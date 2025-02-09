import { useState } from 'react'
import './App.css'
import '../src/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
function App() {

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route to='*' element={PageNotFound}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
