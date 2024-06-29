import { useState } from 'react'
import BgmiCard from './components/BgmiCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#121212' }}>
      <BgmiCard/>
    </div>
    
    </>
  )
}

export default App
