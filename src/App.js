import React from 'react'
import './App.css'
import {TablaPedido} from "./components/Pedido"
import {orden} from "./domain/orden"

function App() {
  return (
    <div className="App">
      <TablaPedido orden={orden}/>
    </div>
  )
}

export default App
