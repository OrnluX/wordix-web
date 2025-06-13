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
  setStatus,
  acknowledgeReset,
  markInvalidAttempt,
  clearInvalidAttempt,
} from '../store/game/gameSlice'

import { useEffect } from 'react'
import palabras from '../data/palabras.json'
import confetti from 'canvas-confetti'

import GameHeader from '../components/GameHeader'
import WordGrid from '../components/WordGrid'
import GameStatus from '../components/GameStatus'
import Keyboard from '../components/Keyboard'
import RestartButton from '../components/RestartButton'
import Puntaje from '../components/Puntaje'

export default function Game() {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const attempts = useSelector(selectAttempts)
  const currentAttempt = useSelector(selectCurrentAttempt)
  const shouldReset = useSelector((state) => state.game.shouldReset)

  useEffect(() => {
    if (status === 'playing' || shouldReset || status === 'idle') {
      const palabraAleatoria =
        palabras[Math.floor(Math.random() * palabras.length)].toUpperCase()
      dispatch(setCurrentWord(palabraAleatoria))
      dispatch(setStatus('playing'))
      if (shouldReset) dispatch(acknowledgeReset())
    }
  }, [status, shouldReset, dispatch])

  useEffect(() => {
    if (status === 'won') {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.4 },
      })
    }
  }, [status])

  const handleKeyPress = (key) => {
    if (key === 'ENTER') {
      if (currentAttempt.length < 5) {
        dispatch(markInvalidAttempt())
        setTimeout(() => {
          dispatch(clearInvalidAttempt())
        }, 500)
        return
      }
      dispatch(submitAttempt())
    } else if (key === '←') {
      dispatch(removeLastLetterFromCurrentAttempt())
    } else {
      dispatch(appendLetterToCurrentAttempt(key))
    }
  }

  return (
    <>
      <GameHeader />

      <WordGrid attempts={attempts} currentAttempt={currentAttempt} />

      <div className="mb-4 text-xl font-semibold">
        <GameStatus />
        <Puntaje
          palabra={useSelector((state) => state.game.currentWord)}
          intento={attempts.length}
          status={status}
        />
      </div>

      <Keyboard onKeyPress={handleKeyPress} disabled={status !== 'playing'} />
      <RestartButton />
    </>
  )
}
