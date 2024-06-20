import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Myproject from './pages/Myproject';
import Contact from './pages/Contact';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Aboutme' Component={Aboutme}/>
          <Route path='/Contact'  Component={Contact}/>
          <Route path='/MyProjects' Component={Myproject}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
