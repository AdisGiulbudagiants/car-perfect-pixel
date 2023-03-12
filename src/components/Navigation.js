import { Link as LinkScroll } from "react-scroll"
import { Link } from "react-router-dom"
import { ReactComponent as Flag } from "./icons/flag.svg"
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.punkt}>
        <Link className={styles.text} to="/">
          <p>Home</p>
        </Link>
        <LinkScroll
          to="achievements"
          duration={1000}
          className={styles.text}
          smooth={true}>
          <p>Achievements</p>
        </LinkScroll>
        <LinkScroll
          to="advantages"
          duration={2000}
          className={styles.text}
          smooth={true}>
          <p>Advantages</p>
        </LinkScroll>
        <LinkScroll
          className={styles.text}
          to="gallery"
          duration={2500}
          smooth={true}>
          <p>Gallery</p>
        </LinkScroll>
      </div>
      <Flag />
    </div>
  )
}

export default Navigation
