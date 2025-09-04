"use client";
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Selection } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import { FloatingToolbar } from './FloatingToolbar';
import { useState } from 'react';
import AgentPanel from './AgentPanel';

export default function CollaborativeEditor() {
  const editor = useEditor({
    extensions: [
  StarterKit,
  Placeholder.configure({ placeholder: 'Start typing...' }),
  Table,
  TableRow,
  TableCell,
  TableHeader,
  TextStyle,
  Color,
  Link,
  Underline,
  Highlight,
    ],
    content: '',
  });

  const [selection, setSelection] = useState<Selection | null>(null);
  const handleInsertAgentResult = (text: string) => {
    editor?.commands.insertContent(text);
  };

  return (
    <div className="relative w-full h-full">
      <AgentPanel onInsert={handleInsertAgentResult} />
      <EditorContent editor={editor} onMouseUp={() => setSelection(editor?.state.selection)} />
      {selection && <FloatingToolbar editor={editor} selection={selection} />}
    </div>
  );
}
