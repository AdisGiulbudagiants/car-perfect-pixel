import Achievements from "../components/partsOfScreens/Achievements"
import Welcome from "../components/partsOfScreens/Welcome"
import Slider from "../components/partsOfScreens/Slider"
import Advantages from "../components/partsOfScreens/Advantages"
import Services from "../components/partsOfScreens/Services"
import AdvantagesSecond from "../components/partsOfScreens/AdvantagesSecond"
import styles from "./FirstScreen.module.css"

const FirstScreen = () => {
  return (
    <div className={styles.main}>
      <Welcome />
      <Achievements />
      <Slider />
      <Advantages />
      <Services />
      <AdvantagesSecond />
      <div className="mt-40 bg-grey">Hello</div>
    </div>
  )
}

export default FirstScreen
