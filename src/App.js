
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Planner from './components/Planner';
import Register from './components/Register';

function App() {
  

  return (
  <>
  
    <div className="wrapper">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/planner" element={<Planner />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  </>
  )
}

export default App;
