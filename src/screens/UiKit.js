import UiFirst from "../components/partsOfScreens/partsOfUiKit/UiFirst"
import Questions from "../components/partsOfScreens/Questions"
import styles from "./UiKit.module.css"

const UiKit = () => {
  return (
    <div id="element" className={styles.main}>
      <UiFirst />
      <div className="text-white mt-[200px] mb-[50px] text-[52px] font-abeezee uppercase">
        <h1>Table</h1>
      </div>
      <Questions />
    </div>
  )
}

export default UiKit
