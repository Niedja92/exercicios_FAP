//import { useState } from 'react'
import logo from '../../public/images/logo_lakers.png'
import './Players.css'
import { useState, useEffect } from 'react'
import api from '../services/api'
import axios from 'axios';

interface PlayersProps {
  id: string;
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

    //POST
    
   const addNewPlayer = () => {
    const userImage = document.getElementById("userImage") as HTMLInputElement;
    const userName = document.getElementById("userName") as HTMLInputElement;
    const userAge = document.getElementById("userAge") as HTMLInputElement;
    const userHeight = document.getElementById("userHeight") as HTMLInputElement;

    const newPLayer = {
      image: userImage.value,
      name: userName.value,
      age: userAge.value,
      height: userHeight.value,
    };

    if (userImage.value === "" || userName.value === "" || userAge.value === "" || userHeight.value === "") {
      alert("Confira se todos os campos estão preenchidos")
    } else {
      api.post('http://localhost:5555/players', newPLayer)
      .then((response) => {
        setPlayers([...players, response.data]);
      })
    }

   }

   // DELETE
   const deletePlayer = async (id: string) => {
    await api.delete(`http://localhost:5555/players/${id}`)
   }

   // PUT
   const updatePlayer = async (id: string) => {
    const updateName = document.getElementById(`updateName${id}`) as HTMLInputElement

    const updatedPLayer = {
      image: updateImage.value,
      name: updateName.value,
      age: updateAge.value,
      height: updateHeight.value,
    };

    await axios.put(`http://localhost:5555/players/${id}`, updatedPLayer)
    const newPlayer = players.filter((players: any) => players.id !== id)
    setPlayers(newPlayer)
   }

  return (
    <div className='content'>
        <div className='header'>
            <h1>Elenco - Los Angeles Lakers - 2023/24</h1>
            <img className='img-header' src={logo} />
        </div>

            <ul className='players'> {players.map((player) => (
                  <li key={player.id}>
                    <img src={player.image} />
                    <p>Nome: {player.name}</p>
                    <p>Idade: {player.age} anos</p>
                    <p>Altura: {player.height}m</p>

                    <div className='btn'>
                      <button id={`updateName${player.id}`} onClick={() => updatePlayer(player.id)} >Editar</button>
                      <button onClick={() => deletePlayer(player.id)}>Excluir</button>
                    </div>              
                  </li>
                ))}
                                
            </ul>

          <div className='btn-add'>
            <input 
              id='userImage'
              type="text" 
              placeholder='Cole o link da imagem aqui' 
    
            />
            <input 
            id='userName'
            type="text" 
            placeholder='Digite o nome do jogador' 
            
            />
            <input 
            id='userAge'
            type="number" 
            placeholder='Digite a idade do jogador' 
            
            />
            <input 
            id='userHeight'
            type="number" 
            placeholder='Digite a altura' 
           
            />
            <button onClick={addNewPlayer}>Adicionar jogador</button>
          </div>
                          
    </div>  
  )
}

export default Players