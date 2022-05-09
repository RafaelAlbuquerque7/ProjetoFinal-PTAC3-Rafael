import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
      <div className={styles.menucabe}>
        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <h1 className={styles.titulo}>
                LIVRARIA DO RAFAEL</h1></a></Link>

          <ul>

            <li><a href="/posts/Livros">Livros</a></li>
            <li><a href="/posts/Autores">Autores</a></li>
            <li><a href="/posts/Sobre">Sobre</a></li>
    
          
          </ul>
 
        </nav>

        <div></div>

        <div></div>

      </div>

    </>
  )
}
