import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue= ()=> {

    if(count===20)
      {
        return count;
      }
      else{
        
//  setCount(count+1)
// setCount(precount=>precount+1)
// setCount(precount=>precount+1)

// setCount(precount=>precount+1)

// setCount(precount=>precount+1)

 



      }
   
  }

  const remove = () =>{
    if(count===0)
      {
        return count;
      }
      else{
        setCount(count-1)

      }
  }
  

  return (
    
     
    <div className='py-32 flex flex-col items-center'>
      <div className='flex items-center flex-col bg-gray-900 text-white h-80 w-80'>
     <h1>Love Thakur  </h1>
     <h2>{`Counter Value-> ${count}`}</h2>
     <div className='flex items-center flex-col' >

    
     <button 
     onClick={addValue}
      className='p-1 items-center my-3 bg-orange-600 h-10 w-20 border-gray-600 border-[4px]  rounded-lg hover:bg-red-200'>Inc</button>
     <button
     onClick={remove}
      className='p-1 items-center bg-orange-600 h-10 w-20 border-gray-600 border-[4px]  rounded-lg hover:bg-red-200'>dec </button> 
     </div>
    </div>
    </div>
   
  )
}

export default App
