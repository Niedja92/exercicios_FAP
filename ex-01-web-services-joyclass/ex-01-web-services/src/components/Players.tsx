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
    const getPlayers = async () => {
      await api.get('/players')
      .then((response) => (
        setPlayers(response.data)
      ))
    }

    // axios.get pega os dados da api e então (then) usa a response dessa api setPlayers(response.data). O then é usado quando existe uma promise

    // GET
    useEffect(() => {
    getPlayers()
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
                <li>{player.id}</li>
                <li>{player.image}</li>
                <li>{player.age}</li>
                <li>{player.height}</li>
              </ul>
              )
            })}
        </div>
        <div>
            <button>Carregar mais...</button>
        </div>
    </>
  )
}

export default Players