import { Carousel } from "flowbite-react"
import { Link } from "react-router-dom"
import { ReactComponent as LeftArrow } from "../icons/leftArrow.svg"
import { ReactComponent as RightArrow } from "../icons/rightArrow.svg"
import Button from "../Button"
import car1 from "./img/1.jpg"
import car2 from "./img/2.jpg"
import car3 from "./img/3.jpg"
import car6 from "./img/6.jpg"
import car7 from "./img/7.jpg"
import car8 from "./img/8.jpg"
import car11 from "./img/11.jpg"
import car12 from "./img/12.jpg"
import car13 from "./img/13.jpg"
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
              <img className={styles.img} src={car1} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car2} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car3} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
          </div>
        </>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img className={styles.img} src={car11} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car8} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car12} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
          </div>
        </>
        <>
          <div className={styles.page}>
            <div className={styles.card}>
              <img className={styles.img} src={car7} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car6} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.img} src={car13} alt="cars" />
              <div className={styles.button}>
                <Link to="price">
                  <Button name="click" />
                </Link>
              </div>
            </div>
          </div>
        </>
      </Carousel>
    </div>
  )
}

export default Slider
