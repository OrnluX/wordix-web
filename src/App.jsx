import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Welcome from './pages/Welcome'
import Game from './pages/Game'
// import Estadisticas from './pages/Estadisticas'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/jugar" element={<Game />} />
        {/* <Route path="/estadisticas" element={<Estadisticas />} /> */}
      </Route>
    </Routes>
  )
}
