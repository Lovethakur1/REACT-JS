import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState("gray")

  

  return (
    <>

<div className='w-full h-screen duration-200' style={{ backgroundColor: Color }}>
      <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white py-3 px-4 rounded-2xl shadow-lg'>
          <button className='px-4 py-2 bg-gray-400 rounded-3xl hover:bg-gray-500 transition duration-200' onClick={() => setColor("white")}>
            WHITE
          </button>
          <button className='px-4 py-2 bg-red-400 rounded-3xl hover:bg-red-500 transition duration-200' onClick={() => setColor("red")}>
            RED
          </button>
          <button className='px-4 py-2 bg-yellow-400 rounded-3xl hover:bg-yellow-500 transition duration-200' onClick={() => setColor("yellow")}>
            YELLOW
          </button>
          <button className='px-4 py-2 bg-green-400 rounded-3xl hover:bg-green-500 transition duration-200' onClick={() => setColor("green")}>
            GREEN
          </button>
          <button className='px-4 py-2 bg-blue-400 rounded-3xl hover:bg-blue-500 transition duration-200' onClick={() => setColor("blue")}>
            BLUE
          </button>
          <button className='px-4 py-2 bg-purple-400 rounded-3xl hover:bg-purple-500 transition duration-200' onClick={() => setColor("purple")}>
            PURPLE
          </button>
          <button className='px-4 py-2 bg-pink-400 rounded-3xl hover:bg-pink-500 transition duration-200' onClick={() => setColor("pink")}>
            PINK
          </button>
          <button className='px-4 py-2 bg-orange-400 rounded-3xl hover:bg-orange-500 transition duration-200' onClick={() => setColor("orange")}>
            ORANGE
          </button>
          <button className='px-4 py-2 bg-teal-400 rounded-3xl hover:bg-teal-500 transition duration-200' onClick={() => setColor("teal")}>
            TEAL
          </button>
          <button className='px-4 py-2 bg-indigo-400 rounded-3xl hover:bg-indigo-500 transition duration-200' onClick={() => setColor("indigo")}>
            INDIGO
          </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
