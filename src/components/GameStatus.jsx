import { useSelector } from 'react-redux'
import { selectStatus } from '../store/game/selectors'

export default function GameStatus() {
  const status = useSelector(selectStatus)

  return (
    <div className="mb-4 text-xl font-semibold text-center">
      {status === 'won' && <span className="text-green-400">¡Ganaste! 🎉</span>}
      {status === 'lost' && <span className="text-red-400">Perdiste 😢</span>}
      {(status === 'playing' || status === 'idle') && (
        <span className="text-yellow-400">Jugando...</span>
      )}
    </div>
  )
}
