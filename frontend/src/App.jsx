import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import SignUp from './components/signUp';
import Main from './components/mainScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      
        <Routes>
          {/* Define routes here */}
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<SignUp />} />
          <Route path="/" element={<Main />} />
        </Routes>
      
    </Router>
      
    
  )
}

export default App
