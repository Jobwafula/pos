
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Home from './pages/Home'
import Header from './components/shared/Header'


function App() {
 

  return (
    <>
       <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path="/orders" element={<Orders  />} />
        
         
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
