import React from 'react';
import { useNotes } from './NoteContext';

const NoteList = () => {
  const { notes, deleteNote } = useNotes();

  const getBackgroundColor = (score: number) => {
    if (score < 8) return 'bg-red-500';
    if (score < 10) return 'bg-orange-500';
    if (score < 13) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`p-4 mb-4 border rounded shadow-md ${getBackgroundColor(note.score)}`}
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p>{note.date}</p>
          <p>{note.comment}</p>
          <button
            onClick={() => deleteNote(note.id)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
