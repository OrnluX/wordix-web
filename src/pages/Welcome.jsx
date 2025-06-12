import { useDispatch } from 'react-redux'
import { setStatus } from '../store/game/gameSlice'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/layout/Footer'

export default function Welcome() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const comenzarJuego = () => {
    dispatch(setStatus('playing'))
    navigate('/jugar')
  }

  return (
    <>
      <div className="w-[280px] sm:w-[400px] aspect-square mb-8 drop-shadow-xl rounded overflow-hidden">
        <img
          src="/wordix-3d.webp"
          alt="Grilla isométrica 3D"
          className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="max-w-xl text-lg mb-4 hyphens-auto">
        Adiviná la palabra en 6 intentos. Cada intento debe ser una palabra
        válida de 5 letras. Después de cada intento, el color de las letras
        cambiará para mostrar qué tan cerca estás. El juego se encuentra
        inspirado en el clásico Wordle y actualmente está en desarrollo, así que
        no te hagas el piola.
      </p>

      <p className="max-w-xl text-md text-gray-400 mb-6 hyphens-auto">
        El puntaje depende del intento en que aciertes y la dificultad de la
        palabra. Cada letra tiene su puntaje individual, según su dificultad.
        ¡Jugá con estrategia y superá tu récord!
      </p>

      <button
        onClick={comenzarJuego}
        className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-gray-100 font-semibold py-3 px-6 rounded text-lg shadow-md hover:brightness-110 transition duration-300"
      >
        ¡Comenzar partida!
      </button>
    </>
  )
}
