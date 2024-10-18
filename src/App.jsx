import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service'
import Blog from './components/Blog/Blog'
import Contactus from './components/Contact/Contactus'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="service" element={<Service/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contactus" element={<Contactus/>} />
      </Routes>
    </>
  )
}

export default App
