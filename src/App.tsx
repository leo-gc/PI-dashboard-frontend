import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tank from './pages/Tank'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tank/1" element={<Tank tankNumber={1} />} />
        <Route path="/tank/2" element={<Tank tankNumber={2} />} />
        <Route path="/tank/3" element={<Tank tankNumber={3} />} />
        <Route path="/tank/4" element={<Tank tankNumber={4} />} />
        <Route path="/tank/5" element={<Tank tankNumber={5} />} />
        <Route path="/tank/6" element={<Tank tankNumber={6} />} />
        <Route path="/tank/7" element={<Tank tankNumber={7} />} />
        <Route path="/tank/8" element={<Tank tankNumber={8} />} />
      </Routes>
    </Router>
  )
}

export default App
