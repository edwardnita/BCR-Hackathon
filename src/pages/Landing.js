import React, { useState } from 'react';

function App() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  const recognition = new window.webkitSpeechRecognition();

  recognition.lang = 'ro-RO';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');

    setTranscript(transcript);
  };

  return (
    <div>
      <h1>Recunoașterea Vorbirii</h1>
      <button onClick={startListening} disabled={isListening}>
        Începe Ascultarea
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Oprește Ascultarea
      </button>
      <p>Transcriere: {transcript}</p>
    </div>
  );
}

export default App;
