import { useSelector } from 'react-redux'
import { selectKeyboard } from '../store/game/selectors'

import { FaArrowLeft, FaSignInAlt } from 'react-icons/fa'

const filas = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
  ['←', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
]

export default function Keyboard({ onKeyPress, disabled = false }) {
  const keyboard = useSelector(selectKeyboard)

  const getColor = (letra) => {
    const estado = keyboard[letra]
    switch (estado) {
      case 'green':
        return 'bg-green-600 text-white'
      case 'yellow':
        return 'bg-yellow-500 text-white'
      case 'red':
        return 'bg-red-800 text-white'
      default:
        return 'bg-gray-800 text-purple-300'
    }
  }

  return (
    <section className="w-full px-1 sm:px-0 max-w-[500px] space-y-2 mb-4">
      {filas.map((fila, i) => (
        <div key={i} className="flex justify-center gap-1">
          {fila.map((tecla) => {
            const claseColor =
              tecla === '←' || tecla === 'ENTER'
                ? 'bg-purple-700 text-white'
                : getColor(tecla)

            const contenido =
              tecla === '←' ? (
                <div className="flex justify-center items-center w-full h-full">
                  <FaArrowLeft className="text-lg" />
                </div>
              ) : tecla === 'ENTER' ? (
                <div className="flex justify-center items-center w-full h-full">
                  <FaSignInAlt className="text-lg" />
                </div>
              ) : (
                tecla
              )

            return (
              <button
                key={tecla}
                onClick={() => !disabled && onKeyPress(tecla)}
                className={`w-full max-w-[42px] sm:max-w-none sm:flex-1 h-12 sm:h-14 text-base sm:text-lg font-bold rounded ${claseColor} transform transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 ${
                  disabled ? 'opacity-40 cursor-not-allowed' : ''
                }`}
                aria-label={tecla}
              >
                {contenido}
              </button>
            )
          })}
        </div>
      ))}
    </section>
  )
}
