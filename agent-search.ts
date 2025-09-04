import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query required' });
  }
  try {
    // DuckDuckGo Instant Answer API (no key required, limited info)
    const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
    const response = await axios.get(ddgUrl);
    const summary = response.data.AbstractText || 'No summary found.';
    res.status(200).json({ result: summary });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
