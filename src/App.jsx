
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'
function App() {


  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
