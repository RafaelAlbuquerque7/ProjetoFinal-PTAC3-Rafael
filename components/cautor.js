import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/router"


export default function Cautor() {
  const [Novoautor, setAutor] = useState({
    nome: "",
    sobrenome: "",
    data_de_nascimento: ""
  });

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutor({ ...Novoautor, [id]: value });
  };

let router = useRouter();
const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      
    nome: Novoautor.nome,
    sobrenome: Novoautor.sobrenome,
    data_de_nascimento: Novoautor.data_de_nascimento,
    }
    console.log(data);
    const response = await axios.post("https://skeleton-nodejs.guilhermetombin.repl.co/inserir", data)
  if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/Autores')
    }

}

  
  
  return (
<>
      <div className={styles.loginbox}>
        <h2>Autores</h2>
          <h2>Digite as informações do Autor abaixo</h2>
        <form onSubmit={handleSubmit}>
          
          <div className={styles.userbox}>
            <input id="nome"
              type="text"
                value={Novoautor.nome}
              onChange={handleInputChange} />
            <label>Nome</label>
          </div>

          <div className={styles.userbox}>
            <input id="sobrenome"
              type="text"
                value={Novoautor.sobrenome}
              onChange={handleInputChange} />
            <label>Sobrenome</label>
          </div>

          
          <div className={styles.userbox}>
            <input id="data_de_nascimento"
              type="date"
                value={Novoautor.data_de_nascimento}
              onChange={handleInputChange} />
            <label>Data de nascimento</label>
          </div>
        

          
          <center>
            <button type="submit">Confimar</button>
          </center>
        </form>
      </div>
    </>
)
}
