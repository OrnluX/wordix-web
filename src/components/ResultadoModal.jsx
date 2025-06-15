import { useSelector } from 'react-redux'
import GameStatus from './GameStatus'
import RestartButton from './RestartButton'
import Puntaje from './Puntaje'

export default function ResultadoModal() {
  const status = useSelector((state) => state.game.status)
  const currentWord = useSelector((state) => state.game.currentWord)
  const attempts = useSelector((state) => state.game.attempts)

  if (status === 'playing' || status === 'idle' || status === 'reset')
    return null

  const intentoNro = attempts.length

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4 rounded-lg border border-purple-600 bg-neutral-900 p-6 shadow-xl animate-reveal space-y-4">
        <GameStatus />

        {/* Puntaje con props calculadas desde el estado */}
        <Puntaje palabra={currentWord} intento={intentoNro} status={status} />

        {status != 'playing' && (
          <div className="pt-4 flex justify-center">
            <RestartButton />
          </div>
        )}
      </div>
    </div>
  )
}
