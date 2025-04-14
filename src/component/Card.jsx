import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Card() {
    const{theme,setTheme} = useContext(ThemeContext)
  return (
    <div className={`${
        theme ? "bg-amber-50" : "bg-gray-900"
      } w-300 h-50 border-1 flex flex-col justify-center items-center mt-20`}>
        <h1 className={`${theme ? 'text-black':'text-white'}`}>Card Component</h1>
      <button
        className='border px-2 rounded-lg bg-amber-500 m-10'
        onClick={()=>setTheme(!theme)}
      >
        Change Theme
      </button>
     </div>
  )
}
