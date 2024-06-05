import { createContext, useState, useContext, ReactNode } from 'react';

interface Note {
  id: number;
  title: string;
  score: number;
  comment: string;
  date: string;
}

interface NoteContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => setNotes([...notes, note]);
  const deleteNote = (id: number) => setNotes(notes.filter((n) => n.id !== id));

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNotes must be used within a NoteProvider');
  }
  return context;
};
