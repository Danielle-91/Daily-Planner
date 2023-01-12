import './App.css';
import Header from './components/Header';
import TopPriorities from './components/notepads/TopPriorities';
import Reminders from './components/notepads/Reminders';
import ToDo from './components/notepads/ToDo';
import Notes from './components/notepads/Notes';

function App() {
  return (

    <div className="wrapper">
      <header>
        <Header />
      </header>

      <section className='notepad'>
        <TopPriorities />

        <Reminders />

        <ToDo />

        <Notes />
      </section>
    </div>
    

    
  );
}

export default App;
