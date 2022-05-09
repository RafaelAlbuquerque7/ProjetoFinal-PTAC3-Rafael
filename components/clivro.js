import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/router"


export default function Clivro() {
  const [Novolivro, setLivros] = useState({
    titulo: "",
    editora: "",
    data_publicacao: "",
    preco: ""
  });

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLivros({ ...Novolivro, [id]: value });
  };

let router = useRouter();
const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    titulo: Novolivro.titulo,
    editora: Novolivro.editora, 
    data_publicacao: Novolivro.data_publicacao,
    preco: Novolivro.preco
    }
    console.log(data);
    const response = await axios.post("https://skeleton-nodejs.guilhermetombin.repl.co/inserir1", data)
  if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/Livros')
    }

}

  
  
  return (
<>
      <div className={styles.loginbox}>
        <h2>Livros</h2>
          <h2>Digite as informações de livros abaixo</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input id="titulo"
              type="text"
                value={Novolivro.titulo}
              onChange={handleInputChange} />
            <label>Titulo</label>
          </div>

          <div className={styles.userbox}>
            <input id="editora"
              type="text"
              value={Novolivro.editora}
              onChange={handleInputChange}
              />
            <label>Editora</label>
          </div>

          <div className={styles.userbox}>
            <input id="preco"
              type="text"
              value={Novolivro.preco}
              onChange={handleInputChange}
              />
            <label>Preço</label>
          </div>

<div className={styles.userbox}>
            <input id="data_publicacao"
              type="date"
              value={Novolivro.data_publicacao}
              onChange={handleInputChange}
              />
            <label>Data de publicação</label>
          </div>

          
          <center>
            <button type="submit">Confimar</button>
          </center>
        </form>
      </div>
    </>
)
}
