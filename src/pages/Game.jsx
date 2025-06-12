import { useSelector, useDispatch } from 'react-redux'
import {
  selectStatus,
  selectAttempts,
  selectCurrentAttempt,
} from '../store/game/selectors'
import {
  appendLetterToCurrentAttempt,
  removeLastLetterFromCurrentAttempt,
  submitAttempt,
  setCurrentWord,
} from '../store/game/gameSlice'

import { useEffect } from 'react'
import palabras from '../data/palabras.json'

import GameHeader from '../components/GameHeader'
import GameStatus from '../components/GameStatus'
import WordGrid from '../components/WordGrid'
import Keyboard from '../components/Keyboard'
import RestartButton from '../components/RestartButton'

export default function Game() {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const attempts = useSelector(selectAttempts)
  const currentAttempt = useSelector(selectCurrentAttempt)

  useEffect(() => {
    if (status === 'playing') {
      const palabraAleatoria =
        palabras[Math.floor(Math.random() * palabras.length)].toUpperCase()
      dispatch(setCurrentWord(palabraAleatoria))
    }
  }, [status, dispatch])

  const handleKeyPress = (key) => {
    if (key === 'ENTER') {
      dispatch(submitAttempt())
    } else if (key === '←') {
      dispatch(removeLastLetterFromCurrentAttempt())
    } else {
      dispatch(appendLetterToCurrentAttempt(key))
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 text-purple-300 p-4 flex flex-col items-center">
      {/* Header */}
      <GameHeader />

      {/* Grilla */}
      <WordGrid attempts={attempts} currentAttempt={currentAttempt} />

      {/* Estado del juego */}
      <div className="mb-4 text-xl font-semibold">
        <GameStatus />
      </div>

      {/* Botón para reiniciar partida */}
      <RestartButton />

      {/* Estado del juego */}

      {/* Teclado */}
      <Keyboard onKeyPress={handleKeyPress} />
    </main>
  )
}
