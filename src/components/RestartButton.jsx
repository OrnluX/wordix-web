import { useDispatch } from 'react-redux'
import { resetGame } from '../store/game/gameSlice'

export default function RestartButton() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetGame())
  }

  return (
    <button
      onClick={handleClick}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mb-6"
    >
      Reiniciar partida
    </button>
  )
}
