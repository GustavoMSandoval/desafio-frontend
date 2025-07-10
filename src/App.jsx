import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import  Create  from './Pages/Users/Create'
import  Show  from './Pages/Users/Show'
import  Edit  from './Pages/Users/Edit'

export default function App() {

  return <BrowserRouter>
     <Routes>
        <Route index element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/usuarios/:id' element={<Show/>}/>
        <Route path='/usuarios/edit/:id' element={<Edit/>}/>
      </Routes> 
  </BrowserRouter>
  
}