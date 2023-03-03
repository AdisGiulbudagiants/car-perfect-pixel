import { Carousel } from "flowbite-react"
import { ReactComponent as LeftArrow } from "../icons/leftArrow.svg"
import { ReactComponent as RightArrow } from "../icons/rightArrow.svg"
import Button from "../Button"
import car1 from "./1.jpg"
import car2 from "./2.jpg"
import car3 from "./3.jpg"
import styles from "./Slider.module.css"

const Slider = () => {
  return (
    <div className={styles.main}>
      <Carousel
        leftControl={<LeftArrow className={styles.leftArrow} />}
        rightControl={<RightArrow className={styles.rightArrow} />}
        indicators={false}
        slideInterval={10000}>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img src={car1} alt="cars" />
              <Button name="click" />
            </div>
            <div className={styles.card}>
              <img src={car2} alt="cars" />
              <Button name="click" />
            </div>
            <div className={styles.card}>
              <img src={car3} alt="cars" />
              <Button name="click" />
            </div>
          </div>
        </>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img src={car3} alt="cars" />
              <Button name="click" />
            </div>
            <div className={styles.card}>
              <img src={car1} alt="cars" />
              <Button name="click" />
            </div>
            <div className={styles.card}>
              <img src={car2} alt="cars" />
              <Button name="click" />
            </div>
          </div>
        </>
      </Carousel>
    </div>
  )
}

export default Slider
