
# Live Collaborative Editor Assignment

This project is a demo collaborative editor built with Next.js, React, Tailwind CSS, and tiptap. It features:

- **Collaborative Editor** (tiptap)
- **Chat Sidebar** (AI assistant via OpenAI API)
- **Floating AI Toolbar** (AI-powered text edits)
- **Agent System** (web search via DuckDuckGo, insert results into editor)

## How to Run Locally

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Set your OpenAI API key:**
	- Create a `.env.local` file in the project root:
	  ```env
	  OPENAI_API_KEY=your_openai_api_key_here
	  ```
3. **Start the dev server:**
	```bash
	npm run dev
	```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Deployment
- Deploy to Vercel or Netlify (recommended for demo).
- Make sure to set the `OPENAI_API_KEY` environment variable in your deployment settings.

## Features
- **Editor:** Rich text editing, collaborative extensions.
- **Chat Sidebar:** Chat with AI, get suggestions, grammar fixes, etc.
- **Floating Toolbar:** Select text, get AI-powered edit suggestions, preview and confirm/cancel changes.
- **Agent Panel:** Search the web, insert summaries into the editor.

## Tech Stack
- Next.js, React, Tailwind CSS
- tiptap editor
- OpenAI API
- DuckDuckGo Instant Answer API

---

For assignment/demo purposes only. Not production-ready.
