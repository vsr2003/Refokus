
import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Careers from "./pages/Careers"
import Home from "./pages/Home";
import Work from './pages/Work';



function App() {

  return (

    <div className=' overflow-x-hidden  '>

    <HashRouter>

    <Navbar />
    
    <Routes>

      <Route path="/" element={ <Home /> } />
      <Route path="/work" element={ <Work /> } />
      <Route path="/careers" element={ <Careers /> } />

    </Routes>

    </HashRouter>
      
    </div>

  )
}

export default App
