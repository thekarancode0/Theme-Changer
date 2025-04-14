import React from 'react'
import Profile from './component/Profile'
import Card from './component/Card'
import ThemeContextProvider from './context/ThemeContext'

export default function App() {
  return (
   <ThemeContextProvider>
    <div className='p-10 overflow-hidden'>
      <Profile/>
      <Card/>
    </div>
   </ThemeContextProvider>
  )
}
