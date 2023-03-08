import { ReactComponent as Dots } from "../../icons/dots.svg"
import TablesForAbout from "../../tables/TablesForAbout"
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
      <TablesForAbout />
    </div>
  )
}

export default About
