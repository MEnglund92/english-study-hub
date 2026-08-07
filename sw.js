const CACHE = 'english-study-v8';
const FILES = ['.','index.html','data.js','manifest.json','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
 self.skipWaiting();
});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
 self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('/tts?'))return e.respondWith(fetch(e.request));
  const isHTML = e.request.mode==='navigate' || e.request.destination==='document';
  if(isHTML){
    e.respondWith(fetch(e.request).then(r=>{
      let clone=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone));
      return r;
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(
   caches.match(e.request).then(r=>{
    if(r)return r;
    return fetch(e.request).then(r=>{
     if(!r||r.status!==200||r.type!=='basic')return r;
     let ct=r.headers.get('content-type')||'';
     if(!ct.startsWith('text/')&&!ct.startsWith('application/')&&!ct.startsWith('image/')&&!ct.startsWith('audio/'))return r;
     let clone=r.clone();
     caches.open(CACHE).then(c=>c.put(e.request,clone));
     return r;
    }).catch(()=>caches.match('index.html'));
   })
  );
});
