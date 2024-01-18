import { useState } from 'react'
import logo from '../../public/images/logo_lakers.png'
import './Cast.css'

const Cast = () => {
    //const [cast, setCast] = useState([])

  return (
    <div>
        <div className='header'>
            <h1>Elenco - Los Angeles Lakers - 2023/24</h1>
            <img src={logo} />
        </div>
        <div className='content'>
            <ul>
                <li></li>
            </ul>
        </div>
        <div>
            <button>Carregar mais...</button>
        </div>
    </div>
  )
}

export default Cast