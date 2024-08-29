import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartWidget from './components/CartWidget'
import Barra from './components/NavBar/Barra'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
 

  return (
    <>
      <Barra/>
      <ItemListContainer greeting="Mis Productos" />
    </>
  )
}

export default App
