import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Planner from './components/notepads/Planner';
import UseToken from './components/UseToken';

function App() {
  const { token, setToken } = UseToken();
  
  // Display Sign In page if user not signed in
  if(!token){
    return <SignIn setToken={setToken} />
  }


  return (

    <div className="wrapper">
      <BrowserRouter>

        <Routes>
          <Route path="/planner" element={<Planner />} />
          <Route path="/signin" element={<SignIn />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
