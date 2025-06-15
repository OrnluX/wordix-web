import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../store/game/gameSlice'

import GameStatus from './GameStatus'
import RestartButton from './RestartButton'
import Puntaje from './Puntaje'

export default function ResultadoModal() {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.game.status)
  const currentWord = useSelector((state) => state.game.currentWord)
  const attempts = useSelector((state) => state.game.attempts)
  const modalRef = useRef(null)

  const intentoNro = attempts.length
  const textoBoton =
    status === 'won' ? '🔁 Jugar otra vez' : '🔁 Intentar de nuevo'

  // Escape para cerrar
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && (status === 'won' || status === 'lost')) {
        dispatch(resetGame())
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [dispatch, status])

  // Click fuera del modal para cerrar
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(resetGame())
    }
  }

  if (status === 'playing' || status === 'idle' || status === 'reset')
    return null

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md mx-4 rounded-lg border border-purple-600 bg-neutral-900 p-6 shadow-xl animate-reveal space-y-4"
      >
        <GameStatus />
        <Puntaje palabra={currentWord} intento={intentoNro} status={status} />

        {(status === 'won' || status === 'lost') && (
          <div className="pt-4 flex justify-center">
            <RestartButton label={textoBoton} />
          </div>
        )}
      </div>
    </div>
  )
}
