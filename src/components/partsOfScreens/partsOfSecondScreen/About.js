import { ReactComponent as Dots } from "../../icons/dots.svg"
import { ReactComponent as WashHand } from "../../icons/washHand.svg"
import { ReactComponent as Experience } from "../../icons/experience.svg"
import { ReactComponent as List } from "../../icons/list.svg"
import { ReactComponent as Garant } from "../../icons/garant.svg"
import styles from "../partsOfSecondScreen/About.module.css"

const About = () => {
  return (
    <div id="advantages" className={styles.main}>
      <div className={styles.main__header}>
        <h1>Benefits of protective anti-gravel film</h1>
      </div>
      <div className={styles.main__dots}>
        <Dots />
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card__svg}>
            <WashHand />
          </div>
          <div className={styles.card__header}>
            <h1>Ipsum convallis</h1>
          </div>
          <div className={styles.card__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__svg}>
            <List />
          </div>
          <div className={styles.card__header}>
            <h1>Felis purus</h1>
          </div>
          <div className={styles.card__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__svg}>
            <Experience />
          </div>
          <div className={styles.card__header}>
            <h1>Enim praesent</h1>
          </div>
          <div className={styles.card__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__svg}>
            <Garant />
          </div>
          <div className={styles.card__header}>
            <h1>Aliquam tellus</h1>
          </div>
          <div className={styles.card__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
