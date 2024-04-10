import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[700px] mx-auto">
        <h1 className="text-transparent text-6xl mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
          The best Journal app
        </h1>
        <p className="text-2xl text-white/60 mb-4">
          A digital haven to capture your thoughts, feelings, and experiences.
        </p>
        <div>
          <Link href="/journal">
            <button className=" bg-blue-700 p-4 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
