import WelcomeSecond from "../components/partsOfScreens/partsOfSecondScreen/WelcomeSecond"
import Advantages from "../components/partsOfScreens/partsOfSecondScreen/Advantages"
import About from "../components/partsOfScreens/partsOfSecondScreen/About"
import styles from "./SecondScreen.module.css"

const SecondScreen = () => {
  return (
    <div className={styles.main}>
      <WelcomeSecond />
      <Advantages />
      <About />
    </div>
  )
}

export default SecondScreen
