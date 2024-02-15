import styles from './Card.module.css'
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ name, description, html_url, technologies }) => {

  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
        {technologies}
        </div>
        <a href={html_url} rel="nopenner noreferrer" className={styles.card_btn} target='_blank'>
          <IoIosArrowForward className={styles.arrow} />
        </a>
      </div>
    </section>
  )
}

export default Card