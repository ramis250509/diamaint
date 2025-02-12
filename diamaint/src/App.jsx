import { useState } from 'react'
import './App.css'
import '../src/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound';
import MainC from './components/MainC';
function App() {

  return (
    <>
      <Router>
        <Header/>
        <MainC/>
        <Routes>
          <Route to='*' element={PageNotFound}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
