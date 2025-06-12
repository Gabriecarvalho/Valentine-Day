'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image';


export default function StartPage() {
  const [elapsedTime, setElapsedTime] = useState('')
  const loveSince = useMemo(() => new Date('2019-11-20T00:00:00'), [])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = now.getTime() - loveSince.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setElapsedTime(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }, 1000)

    return () => clearInterval(interval)
  }, [loveSince])

  const images = [
    '/casal1.jpg',
    '/casal2.jpg',
    '/casal3.jpg',
    '/casal4.jpg',
    '/casal5.jpg',
    '/casal6.jpg',
    '/casal7.jpg',
    '/casal8.jpg',
    '/casal9.jpg',
    '/casal10.jpg',
    '/casal11.jpg',
    '/casal12.jpg',
  ]

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(imgInterval)
  }, [images.length])

  const [hearts, setHearts] = useState<
    { left: string; top: string; size: string; duration: string; id: number }[]
  >([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 90}%`,

      top: `${Math.random() * 90}%`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 5 + 5}s`,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-gradient-to-b from-black to-blue-900 animate-bgShift flex flex-col items-center justify-start text-white px-4 py-6">
      {/* Música */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/watch?v=izGwDsrQ1eQ"
        title="YouTube audio player"
        allow="autoplay"
        style={{ display: 'none' }}
      ></iframe>


      {/* Corações flutuando */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-white opacity-40 float-heart select-none pointer-events-none"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: heart.size,
            animationDuration: heart.duration,
          }}
        >
          🤍
        </span>
      ))}

      {/* Carrossel de imagens responsivo */}
      <div className="relative w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-xl h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg z-10 mx-auto">
  <Image
    src={images[index]}
    alt="momentos"
    fill
    className="object-cover rounded-lg transition-opacity duration-1000"
    sizes="100vw"
  />
</div>



      {/* Texto e tempo */}
      <div className="text-center mt-6 z-10 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2">❤️EU TE AMO HÁ:</h2>
        <p className="text-xl font-mono">{elapsedTime}</p>
        <hr className="my-4 border-white w-2/3 mx-auto opacity-30" />
        <p className="text-base sm:text-sm px-2 whitespace-pre-line break-words leading-relaxed">
          Ainda me lembro do primeiro dia em que te vi. Não porque foi grandioso, mas porque tudo ao meu redor ficou silencioso. Como se o mundo soubesse que algo importante estava começando.

          Não tinha música, não tinha luz especial, mas tinha algo diferente no ar — como quando o vento muda de direção e você sente que vai chover, mesmo que o céu ainda esteja azul.

          Com o tempo, fui colecionando teus sorrisos como quem guarda cartas raras. Cada palavra tua virava verso na minha cabeça. E cada toque, uma lembrança que mora até hoje nas pontas dos meus dedos.

          Lembro da tua risada atravessando uma tarde qualquer, transformando o comum em mágico. Da forma como teus olhos procuravam os meus quando o mundo parecia um pouco demais. E de como, mesmo em silêncio, sabias me dizer: estou aqui.

          Hoje, ao te escrever isso, percebo: minha memória mais bonita é o agora — porque é nele que tu existes comigo. Não como lembrança, mas como presença. Não como sonho, mas como certeza.

          Te amo não apenas com palavras, mas com tudo aquilo que as palavras não conseguem tocar.

          E que sorte a minha poder te guardar na história mais linda que já escrevi: a nossa.❤️
        </p>
      </div>

      {/* Estilos customizados */}
      <style jsx>{`
        @keyframes bgShift {
          0% {
            background-color: #000010;
          }
          50% {
            background-color: #0a0a3f;
          }
          100% {
            background-color: #000010;
          }
        }

        .animate-bgShift {
          animation: bgShift 10s ease-in-out infinite;
        }

        @keyframes heart {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-600px) scale(1.5);
            opacity: 0;
          }
        }

        .float-heart {
          animation-name: heart;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  )
}
