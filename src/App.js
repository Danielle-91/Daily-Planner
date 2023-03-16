
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import Planner from './components/Planner';
import Register from './components/Register';

function App() {
  // const { token, setToken } = UseToken();  

  return (

    <div className="wrapper">
      <BrowserRouter>

        <Routes>
          <Route path="/planner" element={<Planner />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
