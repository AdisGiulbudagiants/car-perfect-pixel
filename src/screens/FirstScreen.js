import Achievements from "../components/partsOfScreens/Achievements"
import styles from "./FirstScreen.module.css"
import Welcome from "../components/partsOfScreens/Welcome"

const FirstScreen = () => {
  return (
    <div className={styles.main}>
      <Welcome />
      <Achievements />
    </div>
  )
}

export default FirstScreen
