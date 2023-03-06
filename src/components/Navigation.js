import { Link } from "react-scroll"
import { ReactComponent as Flag } from "./icons/flag.svg"
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.punkt}>
        <Link className={styles.text} to="home" duration={500} smooth={true}>
          <p>Home</p>
        </Link>
        <Link
          to="achievements"
          duration={1000}
          className={styles.text}
          smooth={true}>
          <p>Achievements</p>
        </Link>
        <Link
          to="advantages"
          duration={2000}
          className={styles.text}
          smooth={true}>
          <p>Advantages</p>
        </Link>
        <Link
          className={styles.text}
          to="gallery"
          duration={2500}
          smooth={true}>
          <p>Gallery</p>
        </Link>
      </div>
      <Flag />
    </div>
  )
}

export default Navigation
