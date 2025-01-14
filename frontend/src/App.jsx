import { useState } from 'react'
import RootLayout from './components/layout'
import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './pages/home'
import Contact from './pages/contact'
import AllPosts from './pages/all-posts'

function App() {
  return (
    <>
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/posts' element={<AllPosts/>}/>
        </Routes>
      </RootLayout>
    </BrowserRouter>
    </>
  )
}

export default App
