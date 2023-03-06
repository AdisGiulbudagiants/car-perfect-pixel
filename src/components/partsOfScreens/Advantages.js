import { Carousel } from "flowbite-react"
import { ReactComponent as LeftArrow } from "../icons/leftArrow.svg"
import { ReactComponent as RightArrow } from "../icons/rightArrow.svg"
import { ReactComponent as Dots } from "../icons/dots.svg"
import { ReactComponent as MaterialIcon } from "../icons/list.svg"
import { ReactComponent as Experience } from "../icons/experience.svg"
import { ReactComponent as Garant } from "../icons/garant.svg"
import car1 from "./img/imgForAdvantages.jpg"
import car2 from "./img/imgForAdvantages2.jpg"
import styles from "./Advantages.module.css"

const Advantages = () => {
  return (
    <div id="advantages" className={styles.main}>
      <div className={styles.leftWrapper}>
        <div className={styles.materials}>
          <div className={styles.materials__iconAndHeader}>
            <MaterialIcon className="ml-2" />
            <h1 className={styles.materials__header}>
              Materials from the best companies
            </h1>
          </div>
          <p className={styles.materials__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
            rutrum est, molestie proin tristique duis sed. Morbi suspendisse
            amet nisl vestibulum risus. Quis pretium
          </p>
        </div>
        <Dots className={styles.dots} />

        <div className={styles.experience}>
          <div className={styles.experience__iconAndHeader}>
            <Experience height="70" className="mt-3" />
            <h1 className={styles.experience__header}>Experienced craftsmen</h1>
          </div>
          <p className={styles.experience__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec
            elementum egestas vitae ullamcorper.
          </p>
        </div>
        <Dots className={styles.dots} />
        <div className={styles.garant}>
          <div className={styles.garant__iconAndHeader}>
            <Garant />
            <h1 className={styles.garant__header}>Experienced craftsmen</h1>
          </div>
          <p className={styles.garant__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            volutpat.
          </p>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <Carousel
          leftControl={<LeftArrow className={styles.leftArrow} />}
          rightControl={<RightArrow className={styles.rightArrow} />}
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
