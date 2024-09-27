import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
import Erro404 from './pages/Erro404'
import Layout from './pages/Layout'

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes element={<Layout/>}>
      <Route index element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/perfil/:id" element={<Perfil/>}/>
      <Route path="*" element={<Erro404/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App 