import Achievements from "../components/partsOfScreens/Achievements"
import Welcome from "../components/partsOfScreens/Welcome"
import Slider from "../components/partsOfScreens/Slider"
import Advantages from "../components/partsOfScreens/Advantages"
import styles from "./FirstScreen.module.css"

const FirstScreen = () => {
  return (
    <div className={styles.main}>
      <Welcome />
      <Achievements />
      <Slider />
      <Advantages />
      <div className="mt-40 bg-grey">Hello</div>
    </div>
  )
}

export default FirstScreen
