import Link from 'next/link'
import styles from '../styles/Cartao.module.css'
import { useRouter } from "next/router"
import axios from 'axios'

export default function Cartao(props) {
  let router = useRouter();
  async function deletarcard(){
 let deletado = confirm("seu card foi deletado");
   if (deletado == true){
     
const response = await axios.delete("https://skeleton-nodejs.guilhermetombin.repl.co/deletar?id=" + parseInt(props.id))

     alert("seu card foi deletado") 
     router.push("/")
   }
    
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.texto}>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h4>{props.data_de_nascimento}</h4>
          </div>
        <div className={styles.botoes}>
          
          <button className={styles.bdeletar} onClick={deletarcard}>
            Deletar
      </button>
          <button className={styles.balterar} href="#">
            Alterar
      </button>
            
        </div>
      </div>
    </>
  )
}

