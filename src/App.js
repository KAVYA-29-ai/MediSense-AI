import React, { useState } from 'react';
import './App.css';

function App() {
  const [symptoms, setSymptoms] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiUsed, setApiUsed] = useState('');

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) {
      alert('Please enter your symptoms');
      return;
    }

    setLoading(true);
    setResponse('');
    setApiUsed('');

    const prompt = `As a medical AI assistant, analyze these symptoms briefly:

Symptoms: ${symptoms}

Please provide in this EXACT format:
🔍 LIKELY CONDITIONS:
• [Condition 1]: Brief description
• [Condition 2]: Brief description
• [Condition 3]: Brief description

⚡ RECOMMENDED ACTIONS:
• [Action 1]
• [Action 2]
• [Action 3]

🚨 SEEK IMMEDIATE CARE IF:
• [Warning sign 1]
• [Warning sign 2]

Keep response under 300 words and use bullet points.`;

    // Try Gemini API first
    try {
      console.log('Trying Gemini API...');
      const geminiResponse = await callGeminiAPI(prompt);
      setResponse(geminiResponse);
      setApiUsed('Google Gemini');
      setLoading(false);
      return;
    } catch (error) {
      console.log('Gemini API failed:', error.message);
    }

    // Fallback to Hugging Face
    try {
      console.log('Falling back to Hugging Face...');
      const hfResponse = await callHuggingFaceAPI(prompt);
      setResponse(hfResponse);
      setApiUsed('Hugging Face (Fallback)');
    } catch (error) {
      console.error('Both APIs failed:', error);
      setResponse('Sorry, both AI services are currently unavailable. Please try again later.');
      setApiUsed('Error');
    }

    setLoading(false);
  };

  const callGeminiAPI = async (prompt) => {
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error('Gemini API key not found');
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Response:', errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini API Response:', data);
    
    // Better error checking for different response formats
    if (data.error) {
      throw new Error(`Gemini API Error: ${data.error.message}`);
    }
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from Gemini API');
    }
    
    const candidate = data.candidates[0];
    
    // Check if response was blocked
    if (candidate.finishReason === 'SAFETY') {
      throw new Error('Response blocked by safety filters');
    }
    
    if (!candidate.content || !candidate.content.parts || candidate.content.parts.length === 0) {
      throw new Error('Invalid response format from Gemini API');
    }

    return candidate.content.parts[0].text;
  };

  const callHuggingFaceAPI = async (prompt) => {
    const apiKey = process.env.REACT_APP_HUGGINGFACE_API_KEY;
    
    if (!apiKey) {
      throw new Error('Hugging Face API key not found');
    }

    // Use a medical-focused model for better responses
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/BioGPT-Large', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 300,
          temperature: 0.7,
          do_sample: true,
          return_full_text: false
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    // Format the response properly for medical context
    let generatedText = data[0]?.generated_text || 'Unable to analyze symptoms at this time.';
    
    // If response doesn't have proper format, create a basic medical response
    if (!generatedText.includes('🔍') && !generatedText.includes('LIKELY CONDITIONS')) {
      generatedText = `🔍 LIKELY CONDITIONS:
• Common condition related to described symptoms
• Consider consulting a healthcare provider
• Multiple factors could contribute to these symptoms

⚡ RECOMMENDED ACTIONS:
• Rest and stay hydrated
• Monitor symptoms closely
• Consider over-the-counter remedies if appropriate

🚨 SEEK IMMEDIATE CARE IF:
• Symptoms worsen significantly
• High fever or severe pain develops
• Any concerning changes occur`;
    }

    return generatedText;
  };

  const formatResponse = (text) => {
    const sections = text.split(/(?=🔍|⚡|🚨)/);
    
    return sections.map((section, index) => {
      if (section.trim() === '') return null;
      
      const lines = section.split('\n').filter(line => line.trim());
      const title = lines[0];
      const content = lines.slice(1);
      
      return (
        <div key={index} className="response-section-item">
          <h4 className="section-title">{title}</h4>
          <ul className="section-content">
            {content.map((line, lineIndex) => {
              if (line.startsWith('•')) {
                return (
                  <li key={lineIndex} className="bullet-point">
                    {line.substring(1).trim()}
                  </li>
                );
              }
              return (
                <p key={lineIndex} className="section-text">
                  {line}
                </p>
              );
            })}
          </ul>
        </div>
      );
    }).filter(Boolean);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      analyzeSymptoms();
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🏥 Medical Symptoms Analyzer</h1>
        <p>Get AI-powered insights about your symptoms</p>
      </header>

      <main className="main-content">
        <div className="input-section">
          <label htmlFor="symptoms">Describe your symptoms:</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Example: I have a headache, fever, and feel tired for the past 2 days..."
            rows="4"
            maxLength="1000"
          />
          <div className="char-count">{symptoms.length}/1000</div>
          
          <button 
            onClick={analyzeSymptoms} 
            disabled={loading || !symptoms.trim()}
            className="analyze-btn"
          >
            {loading ? '🔄 Analyzing...' : '🔍 Analyze Symptoms'}
          </button>
          
          <p className="tip">💡 Tip: Press Ctrl+Enter to analyze</p>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>AI is analyzing your symptoms...</p>
          </div>
        )}

        {response && !loading && (
          <div className="response-section">
            <div className="api-badge">
              Powered by: {apiUsed}
            </div>
            <h3>📋 Analysis Results</h3>
            <div className="response-content">
              {formatResponse(response)}
            </div>
          </div>
        )}
      </main>

      <footer className="disclaimer">
        <p>⚠️ <strong>Medical Disclaimer:</strong> This tool provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical concerns.</p>
      </footer>
    </div>
  );
}

export default App;
