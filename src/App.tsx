import { useEffect, useState } from 'react'
import { createGame } from './game/Game'
import './App.css'

type Screen = 'menu' | 'game' | 'levels' | 'settings'

function App() {

  const [screen, setScreen] =
      useState<Screen>('menu')

  useEffect(() => {

    if (screen !== 'game') {
      return
    }

    const game =
        createGame(() => {
          setScreen('menu')
        })

    return () => {
      game.destroy(true)
    }

  }, [screen])

  if (screen === 'game') {
    return (
        <main className="game-page">
          <div id="game-container" />
        </main>
    )
  }

  return (
      <main className="main-menu">

        <div className="menu-content">

          <h1 className="game-title">
            Runebound
          </h1>

          <p className="game-subtitle">
            A 2D Platformer Adventure
          </p>

          <div className="menu-buttons">

            <button
                onClick={() => setScreen('game')}
            >
              PLAY
            </button>

            <button
                onClick={() => setScreen('levels')}
            >
              LEVELS
            </button>

            <button
                onClick={() => setScreen('settings')}
            >
              SETTINGS
            </button>

            <button
                onClick={() => window.close()}
            >
              QUIT
            </button>

          </div>

        </div>

      </main>
  )
}

export default App