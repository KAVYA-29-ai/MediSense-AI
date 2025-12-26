import React, { useState } from 'react';

function App() {
  const [symptoms, setSymptoms] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiUsed, setApiUsed] = useState('');

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return;

    setLoading(true);
    setResponse('');
    setApiUsed('');

    const prompt = `
You are a medical AI assistant.
Analyze the following symptoms and respond ONLY in this format:

🔍 LIKELY CONDITIONS:
• Condition 1
• Condition 2
• Condition 3

⚡ RECOMMENDED ACTIONS:
• Action 1
• Action 2
• Action 3

🚨 SEEK IMMEDIATE CARE IF:
• Warning sign 1
• Warning sign 2

Symptoms: ${symptoms}
`;

    try {
      const gemini = await callGemini(prompt);
      setResponse(gemini);
      setApiUsed('Google Gemini');
    } catch {
      try {
        const hf = await callHuggingFace(prompt);
        setResponse(hf);
        setApiUsed('Hugging Face (Fallback)');
      } catch {
        setResponse('AI services are currently unavailable.');
        setApiUsed('Error');
      }
    }
    setLoading(false);
  };

  const callGemini = async (prompt) => {
    const key = process.env.REACT_APP_GEMINI_API_KEY;
    if (!key) throw new Error('No Gemini key');

    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': key,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  };

  const callHuggingFace = async (prompt) => {
    const key = process.env.REACT_APP_HUGGINGFACE_API_KEY;
    if (!key) throw new Error('No HF key');

    const res = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/BioGPT-Large',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    const data = await res.json();
    return data[0]?.generated_text || 'No response generated.';
  };

  return (
    <div className="app">
      <header className="header">
        <h1>MediScope AI</h1>
        <p>AI-assisted preliminary symptom insights</p>
      </header>

      <main className="container">
        <textarea
          placeholder="Describe your symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        <button onClick={analyzeSymptoms} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Symptoms'}
        </button>

        {response && (
          <div className="result">
            <span className="badge">{apiUsed}</span>
            <pre>{response}</pre>
          </div>
        )}
      </main>

      <footer className="footer">
        ⚠️ This tool is for educational purposes only. Not a medical diagnosis.
      </footer>
    </div>
  );
}

export default App;
