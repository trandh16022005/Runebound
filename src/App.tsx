import { useEffect } from 'react'
import { createGame } from './game/Game'
import './App.css'

function App() {
  useEffect(() => {
    const game = createGame()

    return () => {
      game.destroy(true)
    }
  }, [])

  return (
      <main className="game-page">
        <div className="game-header">
          <h1>Mini Platformer</h1>

          <p>
            A/D hoặc ←/→ để chạy · Space để nhảy
          </p>
        </div>

        <div id="game-container" />
      </main>
  )
}

export default App