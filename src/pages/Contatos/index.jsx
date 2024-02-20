import styles from "./Contatos.module.css"
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contatos = () => {
  return (

    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em Contato Comigo</h3>
      <p>Para podemos trocar um papo sobre qualquer assunto.</p>
      <div className={styles.icones}>
        <a href="https://www.linkedin.com/in/lucas-souza-gg1028/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={styles.lkdn}/>
        </a>
        <a href="https://github.com/MauroLucasSouza1150" target="_blank" rel="noopener noreferrer">
        <FaGithub className={styles.github}/>
        </a>
        <a href="https://www.instagram.com/maurolucas_souza/?hl=pt-br" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={styles.insta}/>
        </a>
        <a href="https://twitter.com/MauroLu17424925" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className={styles.tt}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5588981258154&text=Prazer, me Chamo Lucas, Se estiver interessado no meu Trabalho como Dev, é só iniciar a conversa" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className={styles.ws}/>
        </a>
        <a href="mailto:maurolucas2014@gmail.com?subject=Question" title="Olá, se estiver interessado em meu trabalho é só me mandar um e-mail" target="_blank" rel="noopener noreferrer">
        <MdEmail className={styles.email}/>
        </a>
      </div>
    </section>
  )
}

export default Contatos