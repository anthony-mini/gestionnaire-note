import { render, screen, fireEvent } from '@testing-library/react';
import NoteList from './NoteList';
import { useNotes } from './NoteContext';
import { describe, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('NoteList', () => {
  vi.mock('./NoteContext', () => ({
    useNotes: vi.fn(),
  }));
  it('renders notes correctly', () => {
    const notes = [
      {
        id: 1,
        title: 'Note 1',
        date: '2022-01-01',
        comment: 'This is note 1',
        score: 9,
      },
      {
        id: 2,
        title: 'Note 2',
        date: '2022-01-02',
        comment: 'This is note 2',
        score: 11,
      },
    ];
    const deleteNote = vi.fn();
    (useNotes as jest.Mock).mockReturnValue({ notes, deleteNote });
    render(<NoteList />);

    expect(screen.getByText('Note 1')).toBeDefined();
    expect(screen.getByText('Note 2')).toBeDefined();
    expect(screen.getByText('2022-01-01')).toBeDefined();
    expect(screen.getByText('2022-01-02')).toBeDefined();
    expect(screen.getByText('This is note 1')).toBeDefined();
    expect(screen.getByText('This is note 2')).toBeDefined();
  });

  it('calls deleteNote when delete button is clicked', () => {
    const notes = [
      {
        id: 1,
        title: 'Note 1',
        date: '2022-01-01',
        comment: 'This is note 1',
        score: 9,
      },
    ];
    const deleteNote = vi.fn();
    (useNotes as jest.Mock).mockReturnValue({ notes, deleteNote });
    render(<NoteList />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(deleteNote).toHaveBeenCalledWith(1);
  });
});
