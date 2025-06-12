const letraValores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  Ñ: 8,
  O: 1,
  P: 3,
  Q: 5,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 5,
  X: 8,
  Y: 4,
  Z: 10,
}

function calcularPuntaje(palabra, intentoNro, status) {
  if (typeof palabra !== 'string' || palabra.length !== 5) return 0
  if (status === 'lost') return 0
  if (intentoNro === 0) return 0 // no hay intentos aún

  const letras = palabra.toUpperCase().split('')
  const base = letras.reduce(
    (acc, letra) => acc + (letraValores[letra] || 0),
    0
  )
  return status === 'won'
    ? base * (7 - intentoNro)
    : Math.floor(base * ((6 - intentoNro) / 6)) // estimado mientras juega
}

export default function Puntaje({ palabra, intento, status }) {
  const puntaje = calcularPuntaje(palabra, intento, status)

  return (
    <div
      className={`text-lg font-semibold mt-2 ${
        status === 'won'
          ? 'text-green-400'
          : status === 'lost'
          ? 'text-red-400'
          : 'text-purple-300'
      }`}
    >
      🎯 Puntaje: {puntaje} puntos
    </div>
  )
}
