import styles from './Sobre.module.css'
import avatar from '../../img/avatar.jpg'
import html from '../../img/html-icon.png'
import css from '../../img/css-icon.png'
import js from '../../img/js-icon.png'
import nodejs from '../../img/nodejs-icon.png'
import react from '../../img/react-icon.png'
import sql from '../../img/sql-icon.png'

const Sobre = () => {
  return (

    <section className={styles.sobre}>
      <div className={styles.bio}>
          <img src={avatar} alt="Meu Avatar" className={styles.avatar}/>
          <div className={styles.apresentacao}>
            <h2>Sobre Mim</h2>
            <p>Muito Prazer, Me Chamo <strong>Lucas</strong>,</p> 
            <p>E sou <span><u>Dev Front-End.</u></span></p> <br />
            <p>Sou um Desenvolvedor Web Júnior.</p> <br />
            <p>Gosto muito de Tecnologia, por isso amo </p> 
            <p>criar aplicações e Interfaces interativas.</p> <br />
            <p>Um dos meus grandes desafios, é trazer uma experiência melhor</p>
            <p>para os usuários na hora da interação nas aplicações.</p>
          </div>
      </div>
      <div className={styles.techs}>
          <h3>Minhas Techs</h3>
          <div className={styles.icones}>
            <img src={html} alt="html-icon" />
            <img src={css} alt="css-icon" />
            <img src={js} alt="js-icon" />
            <img src={nodejs} alt="nodejs-icon" />
            <img src={react} alt="react-icon" />
            <img src={sql} alt="sql-icon" />
          </div>
      </div>
    </section>
    
  )
}

export default Sobre