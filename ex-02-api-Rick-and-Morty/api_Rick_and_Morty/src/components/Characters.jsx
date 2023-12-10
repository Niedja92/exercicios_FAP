import "../index.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className="cards">
        {characters.map((character) => (
          <div className="images" key={character.id}>
            <li>
              <img src={character.image} />
              <h3>{character.name}</h3>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
