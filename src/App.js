import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Planner from './components/notepads/Planner';

function App() {

  const [token, setToken] = useState();

  // Display Sign In page if user not signed in
  if(!token){
    return <SignIn setToken={setToken} />
  }


  return (

    <div className="wrapper">
      <BrowserRouter>

        <Routes>
          <Route path="/signin" element={<SignIn />} />

          <Route path="/planner" element={<Planner />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
