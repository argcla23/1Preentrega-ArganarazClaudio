import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import ItemListContainer from './components/ItemListContainer'




function App() {

  return (
    <div>
      <NavBar />
      <h1><ItemListContainer
        valor="Bienvenido amante del automotor"
      />
      </h1>

      <p><ItemListContainer
        valor="Espero que encuentres aqui lo q estas buscando para tu auto" />
      </p>

    </div>
  )
}

export default App
