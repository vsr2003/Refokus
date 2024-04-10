
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Careers from "./pages/Careers"
import Home from "./pages/Home";
import Work from './pages/Work';
import News from "./pages/News";



function App() {

  return (

    <div className=' overflow-x-hidden  '>

    <BrowserRouter>

    <Navbar />
    
    <Routes>

      <Route path="/" index element={ <Home /> } />
      <Route path="/work" element={ <Work /> } />
      <Route path="/careers" element={ <Careers /> } />
      <Route path="/news" element={ <News /> } />

    </Routes>

    </BrowserRouter>
      
    </div>

  )
}

export default App
