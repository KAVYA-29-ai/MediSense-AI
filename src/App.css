* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Medical Background Animation */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(120, 255, 214, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 120, 120, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 120, 255, 0.1) 0%, transparent 50%);
  animation: medicalBg 20s ease-in-out infinite alternate;
  z-index: -2;
}

/* Floating Medical Elements */
body::after {
  content: '🦠 💊 🩺 🧬 ⚕️ 🔬 🩹 💉 🫀 🧠 🦴 👁️ 🦷 💊 🩺 🧬 ⚕️ 🔬 🩹 💉';
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  font-size: 2rem;
  opacity: 0.1;
  animation: floatMedical 60s linear infinite;
  z-index: -1;
  pointer-events: none;
  word-spacing: 4rem;
  line-height: 8rem;
}

@keyframes medicalBg {
  0% {
    background-position: 0% 0%;
    transform: scale(1);
  }
  100% {
    background-position: 100% 100%;
    transform: scale(1.1);
  }
}

@keyframes floatMedical {
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-60%) translateY(-60%) rotate(360deg);
  }
}

.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  position: relative;
  overflow: hidden;
}

.app-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: headerPulse 4s ease-in-out infinite;
}

.app-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite, headerBounce 2s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

.app-header p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
}

@keyframes headerPulse {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
  50% { transform: scale(1.1) rotate(180deg); opacity: 0.2; }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes headerBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.main-content {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.input-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  position: relative;
  overflow: hidden;
  animation: cardFloat 6s ease-in-out infinite;
}

.input-section::before {
  content: '🩺';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
  animation: iconSpin 10s linear infinite;
}

.input-section::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: conicSpin 8s linear infinite;
}

.input-section > * {
  position: relative;
  z-index: 2;
}

.input-section label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.input-section textarea {
  width: 100%;
  padding: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  font-size: 1rem;
  resize: vertical;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.input-section textarea:focus {
  outline: none;
  border-color: #4ecdc4;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2), inset 0 2px 4px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes iconSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes conicSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.char-count {
  text-align: right;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.analyze-btn {
  width: 100%;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.analyze-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}

.analyze-btn:hover::before {
  left: 100%;
}

.analyze-btn:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  background-position: 100% 0;
}

.analyze-btn:active {
  transform: translateY(-1px) scale(0.98);
}

.analyze-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.5; }
}

.tip {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.loading::before {
  content: '🦠 💊 🩺 🧬';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  opacity: 0.2;
  animation: virusFloat 3s ease-in-out infinite;
}

.spinner {
  width: 80px;
  height: 80px;
  border: 6px solid rgba(255,255,255,0.1);
  border-top: 6px solid #4ecdc4;
  border-right: 6px solid #ff6b6b;
  border-radius: 50%;
  animation: spin 1s linear infinite, colorShift 2s ease-in-out infinite;
  margin: 0 auto 1.5rem;
  position: relative;
}

.spinner::after {
  content: '🔬';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  animation: iconBounce 1s ease-in-out infinite;
}

.loading p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  animation: textGlow 2s ease-in-out infinite;
}

@keyframes virusFloat {
  0%, 100% { transform: translateX(-50%) translateY(0px); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

@keyframes colorShift {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

@keyframes iconBounce {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

@keyframes textGlow {
  0%, 100% { text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
  50% { text-shadow: 0 0 20px rgba(78, 205, 196, 0.5), 0 2px 4px rgba(0,0,0,0.3); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.response-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  animation: resultSlideIn 0.8s ease-out;
}

.response-section::before {
  content: '⚕️';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
  animation: iconPulse 3s ease-in-out infinite;
}

.api-badge {
  display: inline-block;
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  animation: badgeGlow 2s ease-in-out infinite;
}

.response-section h3 {
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.response-section-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border-left: 4px solid;
  position: relative;
  overflow: hidden;
  animation: itemSlideIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
}

.response-section-item:nth-child(1) { 
  border-left-color: #4ecdc4; 
  animation-delay: 0.1s;
}
.response-section-item:nth-child(2) { 
  border-left-color: #ff6b6b; 
  animation-delay: 0.2s;
}
.response-section-item:nth-child(3) { 
  border-left-color: #f9ca24; 
  animation-delay: 0.3s;
}

.response-section-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, currentColor, transparent);
  animation: borderGlow 3s ease-in-out infinite;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.bullet-point {
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  animation: textFadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.bullet-point:nth-child(odd) { animation-delay: 0.1s; }
.bullet-point:nth-child(even) { animation-delay: 0.2s; }

.bullet-point:before {
  content: "💊";
  position: absolute;
  left: 0;
  font-size: 1.2rem;
  animation: bulletSpin 4s ease-in-out infinite;
}

.response-section-item:nth-child(1) .bullet-point:before { content: "🔍"; }
.response-section-item:nth-child(2) .bullet-point:before { content: "⚡"; }
.response-section-item:nth-child(3) .bullet-point:before { content: "🚨"; }

@keyframes resultSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes itemSlideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes textFadeIn {
  to { opacity: 1; }
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.1); opacity: 0.2; }
}

@keyframes badgeGlow {
  0%, 100% { box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
  50% { box-shadow: 0 4px 25px rgba(78, 205, 196, 0.4); }
}

@keyframes borderGlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes bulletSpin {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}

.disclaimer {
  background: rgba(255, 107, 107, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 107, 107, 0.3);
  padding: 2rem;
  text-align: center;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  animation: disclaimerPulse 4s ease-in-out infinite;
}

.disclaimer::before {
  content: '⚠️';
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 2rem;
  animation: warningBlink 2s ease-in-out infinite;
}

.disclaimer::after {
  content: '⚠️';
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  animation: warningBlink 2s ease-in-out infinite 1s;
}

.disclaimer p {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  font-weight: 600;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
}

@keyframes disclaimerPulse {
  0%, 100% { 
    background: rgba(255, 107, 107, 0.2);
    border-color: rgba(255, 107, 107, 0.3);
  }
  50% { 
    background: rgba(255, 107, 107, 0.3);
    border-color: rgba(255, 107, 107, 0.5);
  }
}

@keyframes warningBlink {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@media (max-width: 768px) {
  .app-header {
    padding: 1.5rem;
  }
  
  .app-header h1 {
    font-size: 2rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .input-section {
    padding: 1.5rem;
  }
}
