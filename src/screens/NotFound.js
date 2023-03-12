import { Link } from "react-router-dom"
import Button from "../components/Button"
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__text}>Page Not Found</h1>
      <div className={styles.main__button}>
        <Link to="/">
          <Button name="click to go main page" />
        </Link>
      </div>
    </div>
  )
}

export default NotFound
