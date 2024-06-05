import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AddNote from './AddNotes';
import { NoteProvider } from './NoteContext';
import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';

describe('AddNoteComponent', () => {
  const NOTE_ITEM = {
    title: 'Mathématiques',
    score: 20,
    comment: "Bravo, c'est parfait !",
  };

  vi.mock('./NoteContext', () => ({
    useNotes: vi.fn(),
  }));

  it('should render without errors', () => {
    const { container } = render(
      <NoteProvider>
        <AddNote />
      </NoteProvider>,
    );
    expect(container).toBeDefined();
  });

  it('should be able to add a note with valid title, score, and comment', () => {
    render(
      <NoteProvider>
        <AddNote />
      </NoteProvider>,
    );

    // Fill the title input
    fireEvent.change(screen.getByPlaceholderText('Ex: Mathématiques'), {
      target: { value: NOTE_ITEM.title },
    });

    // Fill the score input
    fireEvent.change(screen.getByPlaceholderText('Note de 0 à 20'), {
      target: { value: NOTE_ITEM.score.toString() },
    });

    // Fill the comment textarea
    fireEvent.change(screen.getByPlaceholderText('Ajouté un commentaire'), {
      target: { value: NOTE_ITEM.comment },
    });

    fireEvent.click(screen.getByText('Ajouter une note'));
  });
});
