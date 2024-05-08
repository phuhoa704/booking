import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import { ROUTER } from "./configs/router";
import Home from "./views/Home";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
