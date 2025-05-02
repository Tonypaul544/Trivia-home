

import { useState } from 'react'
import Header from './header'
import HomePage from './home'
import './home.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HomePage />
    </>
  )
}

export default App
