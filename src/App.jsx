import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Game from './pages/Game'
import Welcome from './pages/Welcome'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Welcome />
          </Layout>
        }
      />
      <Route
        path="/jugar"
        element={
          <Layout>
            <Game />
          </Layout>
        }
      />
    </Routes>
  )
}
