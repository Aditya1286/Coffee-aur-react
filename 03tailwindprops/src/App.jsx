import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  let arr=[1,2,3,4]
  return (
    <>
    <h1 className='underline '>Chai aur Tailwind+React</h1>
    <div className='flex gap-10 justify-center items-center m-10'>
    <Card username="chai aur code" />
    <Card username="tailwind" /></div>
    </>
  )
}

export default App
