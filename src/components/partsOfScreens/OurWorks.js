import { ReactComponent as Dots } from "../icons/dots.svg"
import pic1 from "../partsOfScreens/img/ourWorks1.jpg"
import pic2 from "../partsOfScreens/img/ourWorks2.jpg"
import styles from "./OurWorks.module.css"

const OurWorks = () => {
  return (
    <div id="gallery" className={styles.main}>
      <div className={styles.header}>
        <h1>our works</h1>
      </div>
      <div className={styles.dots}>
        <Dots />
      </div>
      <div className={styles.pictures}>
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic1} alt="pic1" />
      </div>
    </div>
  )
}

export default OurWorks
