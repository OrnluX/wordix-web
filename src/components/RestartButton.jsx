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
      className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-gray-100 font-semibold py-3 px-6 rounded text-lg shadow-md hover:brightness-110 transition duration-300"
    >
      Reiniciar partida
    </button>
  )
}
