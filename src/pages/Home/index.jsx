import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import perfil from '../img/developer-work.svg'

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <h1>
                    Olá, Me Chamo <br />
                    <span>Mauro Lucas</span>, e sou <br />
                    Desenvolvedor Web
                </h1>
                <Link to="/sobre" className={styles.btn}>
                    Saiba mais sobre mim !
                </Link>
            </div>
            <figure>
                <img src={perfil} alt="Imagem developer" className={styles.img_home} />
            </figure>
        </section>    
    )
}

export default Home