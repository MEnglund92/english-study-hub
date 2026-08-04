# English Study Hub

A comprehensive, fully offline single-page English study application. It runs entirely in the browser — no backend or server required.

**Live demo:** https://MEnglund92.github.io/english-study-hub/

## What it is

`index.html` + `data.js` make up the whole app. `data.js` contains **38 vocabulary courses**, **19,164 entries** (word/phrase, English definition, Swedish translation, example sentence, category) and **202 exercises** across six formats. Everything is client-side and works offline.

## Features

### Study tools
- **Browse** — search and filter all 19k+ vocabulary entries by keyword, category, or course. Includes a "Weak Words" filter for high-error entries.
- **Flashcards** — flip-card review with optional SRS (Spaced Repetition, SM-2) mode. Toggle SRS to review only due cards, sorted by oldest first, with Hard/Good/Easy ratings.
- **Quiz** — multiple-choice meaning-recognition quiz. Tracks weak words and records scores per course.
- **Match** — pair phrases to meanings in a memory-style matching game.
- **Exam** — exam-style mode with multiple-choice, match, and cloze questions.
- **Cloze** — fill-in-the-blank exercises from example sentences, with auto-advance and hints.
- **Unscramble** — arrange shuffled words back into the correct sentence.
- **Learn** — SRS-driven word learning queue.
- **Concepts** — in-depth course content with key takeaways and source references.
- **S01** — dedicated audio deck for the 522 S01 words (cards, quiz, match, notes).
- **Audio** — TTS playback grid for any course/category.
- **Resources** — filterable library of study resources by course and level.
- **Dashboard** — streaks, per-category weak-word breakdown, per-course stats, and SRS due count.

### Exercises (202 total)
- **Match** — pair sentences/fragments to the correct answer (106)
- **Writing** — free-response writing with word-count checking (17)
- **Cloze** — choose the word that fits the gap (37)
- **Definition** — type the word from its definition and first-letter hint (36)
- **Fill the gap** — type the missing word in a sentence (6)

### Interactive features
- **Text-to-Speech** — speaker buttons on cards, questions, and headings (auto-detects Swedish vs English).
- **Speech-to-Text** — microphone buttons for pronunciation practice (hidden on unsupported browsers).
- **Spaced Repetition (SRS)** — SM-2 algorithm, tracks stages, intervals, and ease factors per card.
- **Weak-word tracking** — every attempt in quiz/match/cloze/unscramble is recorded; entries with ≥3 attempts and ≥40% error rate are flagged.
- **Streaks & activity log** — activity recorded across all modes.
- **Dark/Light theme** — toggle in the header.
- **Offline-ready (PWA)** — `manifest.json` + `sw.js` service worker.

## Run it locally

```bat
start.bat
```

or from a terminal:

```sh
python -m http.server 5000
# then open http://localhost:5000
```

Just opening `index.html` directly also works (all data is bundled client-side).

## Project layout

```
index.html            the app (UI + logic)
data.js               ALL app data — courses + exercises
sw.js                 service worker (offline/PWA)
manifest.json         PWA manifest
icons/                app icons
img/                  UI images
audio/s01/            S01 word audio (WAV)
docs/                 S01 quiz deck PDF
```

## Data & sources

The vocabulary is extracted from a collection of English-learning textbooks (Cambridge, Oxford, and others). The copyrighted PDF source files are **not** distributed in this repository — they remain local. If you add your own sources, keep the extracted content consistent with the formats documented in `data.js`.

## License / usage

This is a personal study tool. The vocabulary data is derived from copyrighted textbooks; the extracted definitions/translations are provided for personal study only. Do not republish the content commercially.
