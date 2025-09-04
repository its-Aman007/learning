"use client";
import React, { useState } from 'react';

export default function ChatSidebar() {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hello!' },
    { sender: 'ai', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'ai', text: data.result || 'AI error.' }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'ai', text: 'AI error.' }]);
    }
    setInput('');
  };

  return (
  <div className="fixed right-0 top-0 h-full w-80 bg-black border-l flex flex-col text-white">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-${msg.sender === 'user' ? 'right' : 'left'}`}>{msg.sender === 'user' ? '🧑' : '🤖'} {msg.text}</div>
        ))}
      </div>
      <div className="p-4 border-t flex">
        <input
          className="flex-1 border rounded px-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
