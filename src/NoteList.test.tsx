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

  it('The notes have the correct background colors ', () => {
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
      {
        id: 3,
        title: 'Note 3',
        date: '2022-01-03',
        comment: 'This is note 3',
        score: 13,
      },
      {
        id: 4,
        title: 'Note 4',
        date: '2022-01-04',
        comment: 'This is note 4',
        score: 15,
      },
    ];
    const deleteNote = vi.fn();
    (useNotes as jest.Mock).mockReturnValue({ notes, deleteNote });
    render(<NoteList />);

    const note1 = screen.getByText('Note 1').closest('div');
    const note2 = screen.getByText('Note 2').closest('div');
    const note3 = screen.getByText('Note 3').closest('div');
    const note4 = screen.getByText('Note 4').closest('div');

    expect(note1).toHaveClass('bg-orange-500');
    expect(note2).toHaveClass('bg-yellow-500');
    expect(note3).toHaveClass('bg-yellow-500');
    expect(note4).toHaveClass('bg-green-500');
  });
});
