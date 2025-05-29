
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Home from './pages/Home'
import Header from './components/shared/Header'
import Tables from './pages/Tables'
import Menu from './pages/Menu'


function App() {
 

  return (
    <>
       <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path="/orders" element={<Orders  />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/menu' element={<Menu />}  />
        
         
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
