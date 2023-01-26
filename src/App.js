import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './pages/css/main.scss'

import Landing from './pages/landing/Landing'

import Navigation from './pages/components/navigation/Navigation'
import SideBar from './pages/components/sidebar/SideBar'

function App() {
  return <Router>
    <Navigation />
    <main className='content'>
      <SideBar />
      <Landing />
    </main> 
  </Router>
}

export default App
