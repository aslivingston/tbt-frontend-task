import './css/style.css'
import { Routes, Route } from 'react-router-dom'
import Team from './pages/team/team'
import Team1 from './pages/team1/team1'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Team />} />
      <Route path="/1" element={<Team1 />} />
    </Routes>
  )
}

export default App