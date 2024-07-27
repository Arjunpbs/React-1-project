import React from 'react'
import Header from './components/Header'
import Add from './components/Add'
import './App.css';
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Cart from './components/Cart';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<Cart />}></Route>
      <Route path='/add' element={<Add/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
