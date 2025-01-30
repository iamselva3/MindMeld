import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import './login.css'
import './index.css'
// import './fb.css'

import Login from './login.jsx';
import Home from './home.jsx'
import Forgot from './fp.jsx';
import Signup from './signup.jsx';
import App from './app.jsx';
import Home2 from './home2.jsx';
import App1 from './app1.jsx';
import Product from './product.jsx';
import Home3 from './home3.jsx';
import Courselib from './Courselib.jsx';
import Combo from './Combo.jsx';
import Invoice1 from './invoice.jsx';
import Leader from './Leader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
    
      <Route path='/' element={<App />} />
      {/* <Route path='/h' element={<App1 />} /> */}
        {/* {/* <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        // 
        */}
        <Route path='/home' element={<Home />}/>
        <Route path='/home2' element={<Home2 />}/>
        <Route path='/fp' element={<Forgot />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/product' element={<Home3 />} />
        <Route path='/courselib' element={<Courselib />} />
        <Route path='/combo' element={<Combo />} />
        <Route path='/invoice1' element={<Invoice1 />}/>
        <Route path='/leader' element={<Leader />} /> 
        
      </Routes>
    </Router>
  
    
  </StrictMode>,
);