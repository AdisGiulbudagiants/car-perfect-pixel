import Navigation from "../Navigation"
import SvgStore from "../SvgStore"
import Button from "../Button"
import styles from "./Welcome.module.css"
import TableForWelcome from "../tables/TableForWelcome"

const Welcome = () => {
  return (
    <>
      <Navigation />
      <h1 className={styles.header}>CAR MUSC</h1>
      <div className="flex justify-center mt-1.5">
        <SvgStore id="dots" />
      </div>
      <div className={styles.text}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci
          urna amet penatibus.
        </h1>
      </div>
      <div className="flex justify-center mt-12">
        <Button name="OUR SERVICES" />
      </div>
      <TableForWelcome />
    </>
  )
}

export default Welcome
