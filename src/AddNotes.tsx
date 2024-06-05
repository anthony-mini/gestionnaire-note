import React, { useState } from 'react';
import { useNotes } from './NoteContext';

const AddNote = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      score: parseInt(score),
      comment,
      date: new Date().toLocaleDateString('fr-FR'),
    };

    addNote(newNote);
    setTitle('');
    setScore('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-2">Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Note</label>
        <input
          type="number"
          value={score}
          onChange={(e) => {
            const newScore = Number(e.target.value);
            if (newScore >= 0 && newScore <= 20) {
              setScore(e.target.value);
            }
          }}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Commentaire</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Ajouter une note
      </button>
    </form>
  );
};

export default AddNote;
