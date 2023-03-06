import { Link } from "react-scroll"
import Navigation from "../Navigation"
import { ReactComponent as Dots } from "../icons/dots.svg"
import Button from "../Button"
import styles from "./Welcome.module.css"
import TableForWelcome from "../tables/TableForWelcome"

const Welcome = () => {
  return (
    <div id="home" className={styles.main}>
      <Navigation />
      <h1 className={styles.header}>CAR MUSC</h1>
      <div className="flex justify-center mt-1.5">
        <Dots />
      </div>
      <div className={styles.text}>
        <h1 className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci
          urna amet penatibus.
        </h1>
      </div>
      <div className="flex justify-center mt-12">
        <Link to="services" smooth={true} duration={2000}>
          <Button name="OUR SERVICES" />
        </Link>
      </div>
      <TableForWelcome />
    </div>
  )
}

export default Welcome
