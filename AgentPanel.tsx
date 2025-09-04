"use client";
import React, { useState } from 'react';

export default function AgentPanel({ onInsert }: { onInsert: (text: string) => void }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/agent-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResult(data.result || 'No result.');
    } catch {
      setResult('Error fetching result.');
    }
    setLoading(false);
  };

  return (
  <div className="fixed left-0 top-0 h-full w-80 bg-black border-r flex flex-col z-20 shadow text-white">
      <div className="p-4 border-b font-bold">Agent Web Search</div>
      <div className="p-4 flex flex-col gap-2">
        <input
          className="border rounded px-2 py-1"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search the web..."
        />
        <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
        {result && (
          <div className="mt-2 bg-gray-100 p-2 rounded">
            <div>{result}</div>
            <button className="mt-2 bg-green-500 text-white px-2 py-1 rounded" onClick={() => onInsert(result)}>
              Insert into Editor
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
