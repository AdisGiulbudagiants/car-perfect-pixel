import { ReactComponent as Flag } from "./icons/flag.svg"
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.punkt}>
        <p className={styles.text}>Home</p>
        <p className={styles.text}>Second</p>
        <p className={styles.text}>Third</p>
        <p className={styles.text}>Gallery</p>
      </div>
      {/* <SvgStore id="flag" /> */}
      <Flag />
    </div>
  )
}

export default Navigation
