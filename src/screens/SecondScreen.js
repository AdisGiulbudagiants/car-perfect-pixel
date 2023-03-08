import AdvantagesSecondScreen from "../components/partsOfScreens/AdvantagesSecondScreen"
import WelcomeSecond from "../components/partsOfScreens/WelcomeSecond"
import styles from "./SecondScreen.module.css"

const SecondScreen = () => {
  return (
    <div className={styles.main}>
      <WelcomeSecond />
      <AdvantagesSecondScreen />
    </div>
  )
}

export default SecondScreen
