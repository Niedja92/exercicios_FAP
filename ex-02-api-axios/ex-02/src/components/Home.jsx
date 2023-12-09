import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Função que resgata os dados da API
  const getPosts = async () => {
    try {
      // Nesse ponto, espera-se uma resposta da API, por
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // Variável criada para puxar os dados
      const data = response.data;

      // A partir da inclusão do setCharacters, é possível redenrizar os personagens na tela
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Função criada para coordenar a execução na página. Executa uma vez e não fica re-renderizando.
  // O array de dependências vazio [], vai fazer com que essa função redenrize apenas uma vez.
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>Loading ...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
