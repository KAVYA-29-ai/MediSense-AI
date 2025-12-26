# MediSense-AI (health)

MediSense-AI is a React front-end that lets users enter medical symptoms, sends the data to a backend model (e.g., a Hugging Face LLM or another low-code backend), and displays possible diagnoses along with recommended next steps. The project emphasizes a clean, professional UI and minimal architecture so it can be extended or embedded into larger systems.

## Key features ✅
- Enter symptoms and receive model-predicted diagnoses and next-step recommendations
- Clean, modern, and professional styling (background and typography updated)
- Voice features: Browser-based Text-to-Speech (TTS) and simple voice commands to control reading and navigation
- PDF export: Download UI content as a printable PDF for sharing or record-keeping
- Minimal and easy-to-extend React codebase

## Installation & local development 🚀
1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

## Usage 💡
- Type symptoms into the input and submit to get suggested diagnoses and next steps (requires the backend endpoint).
- Use the **Play** button to have the app read the visible content aloud using your browser's voices.
- Use the **Stop** button to stop speech.
- Click **Download PDF** to export the current visible content as a nicely formatted PDF.

## Implementation notes 🔧
- Voice features use the browser's built-in Web Speech APIs (`speechSynthesis` for TTS and `SpeechRecognition` when available).
- PDF export is implemented using `html2canvas` and `jspdf` to capture the DOM and produce a printable PDF.

## Contributing 🤝
Contributions, suggestions, and bug reports are welcome — open an issue or submit a pull request.

## License
Add your preferred license here.
