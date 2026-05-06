
import './App.tsx'
import { Login } from './components/login'
import { ListData } from './components/ListData'
import { Practice } from './components/Practice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Dropdown } from './components/Dropdown'
import { Sherry } from './components/Sherry/Sherry.tsx'
import { SherryAbout } from './components/Sherry/About.tsx'
import { SherryLogin } from './components/Sherry/Login.tsx'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<ListData />} />
        <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} /> 
        <Route path="/practice" element={<Practice />} />
        <Route path="/dropdown" element={<Dropdown />} />

        <Route path="/sherry" element={<Sherry />} />
        <Route path="/sherry/about" element={<SherryAbout />} />
        <Route path="/sherry/login" element={<SherryLogin />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
       
    </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
