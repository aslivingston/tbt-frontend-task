import './css/style.css'
import { Routes, Route } from 'react-router-dom'
import Team from './pages/team/team'
import Team1 from './pages/team/team'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Team1 />} />
      <Route path="/1" element={<Team />} />
    </Routes>
  )
}

export default App