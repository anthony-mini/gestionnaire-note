import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AddNote from './AddNotes';
import { NoteProvider } from './NoteContext';

import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

describe('AddNoteComponent', () => {
  const NOTE_ITEM = {
    title: 'Mathématiques',
    score: 20,
    comment: "Bravo, c'est parfait !",
  };

  it('should render without errors', () => {
    const { container } = render(
      <NoteProvider>
        <AddNote />
      </NoteProvider>,
    );
    expect(container).toBeDefined();
  });

  // Test 2: The user should be able to add a note with valid title, score, and comment

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

    // Verify that the inputs are cleared after adding the note
    expect(screen.getByPlaceholderText('Ex: Mathématiques')).toBe('');
    expect(screen.getByPlaceholderText('Note de 0 à 20')).toBe('');
    expect(screen.getByPlaceholderText('Ajouté un commentaire')).toBe('');
  });
});
