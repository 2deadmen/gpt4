import React, { useState } from 'react';
import './style.css'; 

const Homepage = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateResponse = async () => {
    if (!inputText) return;

    setIsLoading(true);

    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOutputText("Generated response will be here.");
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gpt-container">
      <h1 className="gpt-header">GPT-4 </h1>
      <textarea
        className="gpt-textarea"
        rows={5}
        cols={50}
        placeholder="Enter your input text..."
        value={inputText}
        onChange={handleInputChange}
      />
      <button className="gpt-button" onClick={generateResponse} disabled={isLoading}>
        Generate Response
      </button>
      {isLoading && <p>Loading...</p>}
      {outputText && (
        <div className="gpt-response">
          <h2>Generated Response:</h2>
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
};

export default Homepage;
