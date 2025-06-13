import { useSelector } from 'react-redux'
import { selectStatus } from '../store/game/selectors'

export default function GameStatus() {
  const status = useSelector(selectStatus)
  const palabra = useSelector((state) => state.game.currentWord)

  return (
    <div className="mb-4 text-xl font-semibold text-center">
      {status === 'won' && <span className="text-green-400">¡Ganaste! 🎉</span>}
      {status === 'lost' && (
        <>
          <span className="text-red-400">Perdiste! 😢</span>
          <div className="bg-gray-800/60 text-purple-200 px-4 py-2 mt-3 rounded-md shadow-inner border border-purple-700">
            <p className="text-lg sm:text-xl">
              La palabra era: <span className="underline">{palabra}</span>
            </p>
          </div>
        </>
      )}
      {(status === 'playing' || status === 'idle') && (
        <span className="text-yellow-400">Jugando...</span>
      )}
    </div>
  )
}
