"use client";
import React from 'react';
import { Editor } from '@tiptap/react';

interface FloatingToolbarProps {
  editor: Editor | null;
  selection: { from: number; to: number } | null;
}

export const FloatingToolbar: React.FC<FloatingToolbarProps> = ({ editor, selection }) => {
  if (!editor || !selection) return null;

  return (
    <div className="fixed bg-white shadow-lg rounded-lg p-2">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>
    </div>
  );
};
