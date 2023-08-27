'use client'

import Image from 'next/image'
import styles from '@/styles/Header.module.css'
export default function Home() {
  async function handleSubmit(){
      console.log('oi')
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.section1}>
        <article className={styles.text}>
        <h2>
            Oiê! Já pensou que lindo
             ter nossos produtos em
              sua vitrine?
            </h2>
          <form className={styles.form}>
            
            <label >Me fala: qual seu nome? </label>
            <input type="text" className={styles.input} />

            <label>Qual o nome da sua loja?</label>
            <input type="text" className={styles.input} />

            <label>O seu telefone, de preferência WhatsApp.</label>
            <input type="text"  className={styles.input}/>

            <label>Agora, só falta seu e-mail.</label>
            <input type="text" className={styles.input} />

            <button className={styles.button}>Enviar</button>
          </form>
          
        </article>
        
     


      </section>

      
    </main>
  )
}
