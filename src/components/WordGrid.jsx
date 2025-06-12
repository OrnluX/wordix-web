export default function WordGrid({ attempts, currentAttempt }) {
  const totalFilas = 6
  const letrasPorFila = 5

  const celdas = []

  for (let i = 0; i < totalFilas; i++) {
    const palabra =
      i < attempts.length
        ? attempts[i]
        : i === attempts.length
        ? currentAttempt
        : ''

    celdas.push(
      <div key={i} className="grid grid-cols-5 gap-2">
        {[...Array(letrasPorFila)].map((_, j) => (
          <div
            key={j}
            className="w-12 h-12 border-2 border-purple-500 text-center text-xl flex items-center justify-center rounded"
          >
            {palabra[j] || '_'}
          </div>
        ))}
      </div>
    )
  }

  return <section className="grid grid-rows-6 gap-2 mb-6">{celdas}</section>
}
