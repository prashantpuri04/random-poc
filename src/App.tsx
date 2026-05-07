
import './App.tsx'
import { Login } from './components/login'
import { ListData } from './components/ListData'
import { Practice } from './components/Practice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Dropdown } from './components/Dropdown'
import { Sherry } from './components/Sherry/components/Sherry.tsx'
import { SherryAbout } from './components/Sherry/components/About.tsx'
import { SherryLogin } from './components/Sherry/components/Login.tsx'

import store from './components/Sherry/utils/Store.tsx'
import { Provider } from 'react-redux'
import { Sidebar } from './components/Sherry/components/Sidebar.tsx'


function App() {

  return (
    <>
    <Provider store={store} >
      
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
        <Route path="/Sidebar" element={<Sidebar />} />
       
        <Route path="*" element={<h1>404 Not Found</h1>} />
        
    </Routes>
    </BrowserRouter>

    </Provider>
    
    </>
    
  )
}

export default App
