import './App.css';
import { Header } from './Header';
import { NoteProvider } from './NoteContext';
import AddNote from './AddNotes';
import NoteList from './NoteList';

function App() {
  return (
    <>
      <Header />
      <NoteProvider>
        <div className="container mx-full p-4">
          <AddNote />
          <NoteList />
        </div>
      </NoteProvider>
    </>
  );
}

export default App;
