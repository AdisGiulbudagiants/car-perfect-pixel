import WelcomeSecond from "../components/partsOfScreens/partsOfSecondScreen/WelcomeSecond"
import Advantages from "../components/partsOfScreens/partsOfSecondScreen/Advantages"
import About from "../components/partsOfScreens/partsOfSecondScreen/About"
import Prices from "../components/partsOfScreens/partsOfSecondScreen/Prices"
import styles from "./SecondScreen.module.css"

const SecondScreen = () => {
  return (
    <div className={styles.main}>
      <WelcomeSecond />
      <Advantages />
      <About />
      <Prices />
    </div>
  )
}

export default SecondScreen
