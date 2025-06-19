import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setStatus } from '../store/game/gameSlice'
import { setNombreJugador } from '../store/stats/statsSlice'

export default function NombreModal({ onClose }) {
  const [nombre, setNombre] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const confirmar = () => {
    const limpio = nombre.trim()
    if (limpio) {
      dispatch(setNombreJugador(limpio))
      dispatch(setStatus('playing'))
      onClose()
      navigate('/jugar')
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm">
      <div className="bg-neutral-900 p-6 rounded-lg w-full max-w-sm mx-4 border border-purple-500 space-y-4 animate-reveal">
        <h2 className="text-xl font-semibold text-purple-300">
          Ingresa tu nombre
        </h2>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded border border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Cancelar
          </button>

          <button
            onClick={confirmar}
            disabled={!nombre.trim()}
            className={` py-2 px-4 text-sm rounded border shadow-md transition duration-300 ${
              nombre.trim()
                ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-gray-100 hover:brightness-110'
                : 'bg-gray-600 cursor-not-allowed text-white'
            }`}
          >
            Jugar
          </button>
        </div>
      </div>
    </div>
  )
}
