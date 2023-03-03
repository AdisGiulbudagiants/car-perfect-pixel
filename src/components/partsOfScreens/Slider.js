import { Carousel } from "flowbite-react"
import { ReactComponent as LeftArrow } from "../icons/leftArrow.svg"
import { ReactComponent as RightArrow } from "../icons/rightArrow.svg"
import Button from "../Button"
import car1 from "./1.jpg"
import car2 from "./2.jpg"
import car3 from "./3.jpg"
import car6 from "./6.jpg"
import car7 from "./7.jpg"
import car8 from "./8.jpg"
import car11 from "./11.jpg"
import car12 from "./12.jpg"
import car13 from "./13.jpg"
import styles from "./Slider.module.css"

const Slider = () => {
  return (
    <div className={styles.main}>
      <Carousel
        leftControl={<LeftArrow className={styles.leftArrow} />}
        rightControl={<RightArrow className={styles.rightArrow} />}
        indicators={false}
        slideInterval={100000}>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img className={styles.img} src={car1} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car2} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car3} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
          </div>
        </>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img className={styles.img} src={car11} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car8} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car12} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
          </div>
        </>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img className={styles.img} src={car7} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car6} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car13} alt="cars" />
              <div className={styles.button}>
                <Button name="click" />
              </div>
            </div>
          </div>
        </>
      </Carousel>
    </div>
  )
}

export default Slider
