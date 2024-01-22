import './App.css';
import {
  Routes,
  Route
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar';
// import { Home } from './components/Home';
import { Home } from './components/Home';
// import About from './components/About';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import {useState} from 'react'
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
          <Navbar />
          <Alert alert = {alert}/>
          <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              
              {/* <Route exact path="/about" element={<About />}/> */}
                
              <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
                
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
              
              </Routes>
      </NoteState>
    </>
  );
}

export default App;