import { useState, useEffect } from "react";
import axios from "axios";
import { supportedLanguages } from "../utils/languages";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/openai", {
        messages: newMessages,
        language,
      });
      const assistantReply = response.data.reply;
      setMessages([...newMessages, { role: "assistant", content: assistantReply }]);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="max-w-3xl mx-auto p-4 mt-12 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-indigo-400 mb-4">AI Legal Chatbot</h2>
      <div className="mb-4">
        <label htmlFor="language" className="mr-2">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          {supportedLanguages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
      <div className="h-64 overflow-y-auto bg-gray-800 p-4 rounded mb-4" style={{ whiteSpace: "pre-wrap" }}>
        {messages.length === 0 && <p className="text-gray-400">Ask your legal question here...</p>}
        {messages.map(({ role, content }, i) => (
          <p
            key={i}
            className={`mb-2 ${role === "user" ? "text-indigo-300" : "text-green-300"}`}
          >
            <strong>{role === "user" ? "You:" : "LegalHelp AI:"}</strong> {content}
          </p>
        ))}
        {isLoading && <p className="text-yellow-300">Typing...</p>}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
          className="flex-grow p-2 rounded bg-gray-700 text-white focus:outline-indigo-400"
          placeholder="Type your question..."
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded"
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </section>
  );
}
