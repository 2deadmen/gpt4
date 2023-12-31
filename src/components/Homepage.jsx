import React, { useState } from "react";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import "./style.css";

const Homepage = () => {
  const endpoint = "https://greninjagpt4.openai.azure.com/";
  const azureApiKey = process.env.REACT_APP_API_KEY;

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateResponse = async () => {
    if (!inputText) return;

    setIsLoading(true);
    // let temp={role:"user",content:inputText}
    messages.push({ role: "user", content: inputText });

    try {
      // Simulating API request delay
      const client = new OpenAIClient(
        endpoint,
        new AzureKeyCredential(azureApiKey)
      );
      const deploymentId = "GreninjaAi";
      const result = await client.getChatCompletions(deploymentId, messages);
      const newMessages = [...messages];
      for (const choice of result.choices) {
        console.log(choice.message);
        newMessages.push(choice.message);
        setOutputText(choice.message.content);
        console.log(messages);
      }
      setMessages(newMessages);
    } catch (error) {
      console.log("Error generating response:", error);
    } finally {
      setIsLoading(false);
      console.log(messages);
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
      <button
        className="gpt-button"
        onClick={generateResponse}
        disabled={isLoading}
      >
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
