import { useSelector } from 'react-redux'
import { selectKeyboard } from '../store/game/selectors'

const filas = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
  ['←', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
]

export default function Keyboard({ onKeyPress }) {
  const keyboard = useSelector(selectKeyboard)

  const getColor = (letra) => {
    const estado = keyboard[letra]
    switch (estado) {
      case 'green':
        return 'bg-green-600 text-white'
      case 'yellow':
        return 'bg-yellow-500 text-white'
      case 'gray':
        return 'bg-gray-600 text-white'
      default:
        return 'bg-gray-800 text-purple-300'
    }
  }

  return (
    <section className="w-full max-w-md space-y-2 mb-4">
      {filas.map((fila, i) => (
        <div key={i} className="flex justify-center gap-1">
          {fila.map((tecla) => {
            const claseColor =
              tecla === '←' || tecla === 'ENTER'
                ? 'bg-purple-700 text-white'
                : getColor(tecla)
            return (
              <button
                key={tecla}
                onClick={() => onKeyPress(tecla)}
                className={`flex-1 min-w-[40px] h-14 font-bold text-lg rounded ${claseColor}`}
              >
                {tecla === '←' ? '⌫' : tecla === 'ENTER' ? '↵' : tecla}
              </button>
            )
          })}
        </div>
      ))}
    </section>
  )
}
