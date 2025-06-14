import { useSelector } from 'react-redux'

export default function WordGrid({ attempts, currentAttempt }) {
  const totalFilas = 6
  const letrasPorFila = 5
  const invalidAttempt = useSelector((state) => state.game.invalidAttempt)

  const celdas = []

  for (let i = 0; i < totalFilas; i++) {
    let palabra = ''
    let colores = []

    if (i < attempts.length) {
      palabra = attempts[i].palabra
      colores = attempts[i].colores
    } else if (i === attempts.length) {
      palabra = currentAttempt
    }

    celdas.push(
      <div key={i} className="grid grid-cols-5 gap-2">
        {[...Array(letrasPorFila)].map((_, j) => {
          const letra = palabra[j] || ''
          const color =
            colores[j] === 'green'
              ? 'bg-green-600 text-white border-green-600'
              : colores[j] === 'yellow'
              ? 'bg-yellow-500 text-white border-yellow-500'
              : colores[j] === 'red'
              ? 'bg-red-800 text-white border-gray-700'
              : 'border-purple-500'

          const animacion =
            i === attempts.length && invalidAttempt
              ? 'animate-shake border-red-500'
              : ''

          return (
            <div
              key={j}
              className={`w-12 h-12 border-2 text-center text-xl flex items-center justify-center rounded transition ${color} ${animacion}`}
            >
              {letra || '_'}
            </div>
          )
        })}
      </div>
    )
  }

  return <section className="grid grid-rows-6 gap-2 mb-6">{celdas}</section>
}
