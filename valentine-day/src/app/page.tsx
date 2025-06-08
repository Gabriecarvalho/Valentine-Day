'use client'

import { useRouter } from 'next/navigation'

export default function StartPage() {
  const router = useRouter()

  const handleClick = () => {
    setTimeout(() => {
      router.push('/Lohaine')
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br animate-bgShift from-black to-blue-900 relative overflow-hidden">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition text-xl z-10"
      >
        ❤️ Aperte
      </button>

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
      `}</style>
    </div>
  )
}
