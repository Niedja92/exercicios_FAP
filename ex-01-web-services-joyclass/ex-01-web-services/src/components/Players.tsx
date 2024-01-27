//import { useState } from 'react'
import logo from '../../public/images/logo_lakers.png'
import './Players.css'
import { useState, useEffect } from 'react'
import api from '../services/api'

interface PlayersProps {
  id: number;
  image: string;
  name: string;
  age: number;
  height: string
}

function Players() {
    const [players, setPlayers] = useState<PlayersProps[]>([])

    // GET
    async function loadPlayers() {
      try {
        const response = await api.get("/players")
        setPlayers(response.data)
      } catch (error) {
        console.log('Error:', error)
        alert("Ocorreu um erro ao tentar se conectar com o servidor.")
      }
    }
    // GET
    useEffect(() => {
    loadPlayers()
    }, [])

  return (
    <>
        <div className='header'>
            <h1>Elenco - Los Angeles Lakers - 2023/24</h1>
            <img src={logo} />
        </div>
        <div className='content'>
            {players.map((player) => {
              return (
              <ul key={player.id}>
                <img src={player.image}/>
                <li>Nome: {player.name}</li>
                <li>Idade: {player.age}</li>
                <li>Altura: {player.height}m</li>
              </ul>
              )
            })}s
        </div>
        <div>
            <button>Carregar mais...</button>
        </div>
    </>
  )
}

export default Players