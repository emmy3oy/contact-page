import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './contact-us/contact'

function App() {

  return (
    <>
      <Routes>
           <Route exact path='/' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
