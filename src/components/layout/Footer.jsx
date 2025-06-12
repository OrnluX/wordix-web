import { FaGithub, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="text-sm text-purple-500 flex flex-col items-center gap-2 mt-4">
      <p className="flex items-center gap-2">
        <FaGithub />
        Hecho por
        <a
          href="https://github.com/OrnluX"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-300 font-medium"
        >
          OrnluX
        </a>
      </p>

      <div className="flex gap-4 text-xs text-gray-400 items-center">
        <span className="flex items-center gap-1">
          <FaReact className="text-cyan-400" /> React
        </span>
        <span className="flex items-center gap-1">
          <SiRedux className="text-purple-400" /> Redux
        </span>
        <span className="flex items-center gap-1">
          <FaCss3Alt className="text-blue-400" /> Tailwind CSS
        </span>
      </div>
    </footer>
  )
}
