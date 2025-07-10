import { useState } from 'react'
import Navigation from './component/navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Home from './component/Home'
import Contact from './component/Contact'
import AddUser from './component/AddUser'
import AllUser from './component/AllUser'
import About from './component/About'

function App() {

  
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          
          {/* <Route path="/" element={<div>Home Page</div>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup"element={<SignUp/>} />
          <Route path="/" element={<Home/>}  /> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/alluser' element={<AllUser/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/signup' element={<SignUp/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


// npx json-server Backend/db.json --watch port 5000