import { ReactComponent as Dots } from "../icons/dots.svg"
import { Carousel } from "flowbite-react"
import Button from "../Button"
import TablesForServicesFirst from "../tables/TablesForServicesFirst"
import TablesForServicesSecond from "../tables/TablesForServicesSecond"
import styles from "./Services.module.css"

const Services = () => {
  return (
    <div id="services" className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.header__h1}>our services</h1>
      </div>
      <Dots className={styles.dots} />
      <Carousel
        className={styles.carousel}
        indicators={false}
        slide={false}
        leftControl={
          <div className={styles.leftControl}>
            <Button name="pasting" />
          </div>
        }
        rightControl={
          <div className={styles.rightControl}>
            <Button name="detailing" />
          </div>
        }>
        <>
          <TablesForServicesFirst />
        </>
        <>
          <TablesForServicesSecond />
        </>
      </Carousel>
    </div>
  )
}

export default Services
