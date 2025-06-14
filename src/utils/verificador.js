export function evaluarIntento(intento, palabra, tecladoAnterior) {
  const nuevoEstadoTeclado = { ...tecladoAnterior }

  for (let i = 0; i < intento.length; i++) {
    const letra = intento[i]

    if (palabra[i] === letra) {
      nuevoEstadoTeclado[letra] = 'green'
    } else if (palabra.includes(letra)) {
      if (nuevoEstadoTeclado[letra] !== 'green') {
        nuevoEstadoTeclado[letra] = 'yellow'
      }
    } else {
      if (!nuevoEstadoTeclado[letra]) {
        nuevoEstadoTeclado[letra] = 'red'
      }
    }
  }

  const colores = intento.split('').map((letra, i) => {
    if (palabra[i] === letra) return 'green'
    if (palabra.includes(letra)) return 'yellow'
    return 'red'
  })

  const ganaste = intento === palabra

  return {
    nuevoEstadoTeclado,
    colores,
    palabra: intento,
    ganaste,
  }
}
