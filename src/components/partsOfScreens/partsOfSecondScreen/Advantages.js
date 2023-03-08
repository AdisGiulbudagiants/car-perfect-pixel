import { Carousel } from "flowbite-react"
import { ReactComponent as LeftArrow } from "../../icons/leftArrow.svg"
import { ReactComponent as RightArrow } from "../../icons/rightArrow.svg"
import { ReactComponent as Dots } from "../../icons/dots.svg"
import { ReactComponent as Voys } from "../../icons/voys.svg"
import { ReactComponent as Star } from "../../icons/star.svg"
import car1 from "../img/imgForAdvantages.jpg"
import car2 from "../img/imgForAdvantages2.jpg"
import styles from "../partsOfSecondScreen/Advantages.module.css"

const Advantages = () => {
  return (
    <div id="achievements" className={styles.main}>
      <div className={styles.leftWrapper}>
        <div className={styles.leftWrapper__header}>
          <h1>
            Polyurethane film is the only reliable car protection from all
            external influences
          </h1>
        </div>
        <div className={styles.leftWrapper__dots}>
          <Dots />
        </div>
        <div className={styles.leftWrapper__text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            tincidunt aliquam tincidunt pretium sodales. Tristique odio
            pellentesque et tincidunt posuere arcu
          </p>
        </div>
        <div className={styles.leftWrapper__icons}>
          <Voys className={styles.icon} />
          <Star />
        </div>
        <div className={styles.leftWrapper__icons}>
          <Star className={styles.icon} />
          <Voys />
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <Carousel
          leftControl={
            <div className={styles.leftArrow}>
              <LeftArrow />
            </div>
          }
          rightControl={
            <div className={styles.rightArrow}>
              <RightArrow />
            </div>
          }
          indicators={false}
          slideInterval={10000}>
          <>
            <img className={styles.img} src={car1} alt="Car1" />
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque auctor nibh feugiat est. Consectetur lectus.
              </p>
            </div>
          </>
          <>
            <img className={styles.img} src={car2} alt="Car2" />
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque auctor nibh feugiat est. Consectetur lectus.
              </p>
            </div>
          </>
        </Carousel>
      </div>
    </div>
  )
}

export default Advantages
