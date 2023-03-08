import { Link } from "react-scroll"
import Navigation from "../../Navigation"
import { ReactComponent as Dots } from "../../icons/dots.svg"
import Button from "../../Button"
import styles from "./WelcomeSecond.module.css"

const WelcomeSecond = () => {
  return (
    <div id="home" className={styles.main}>
      <Navigation />
      <h1 className={styles.header}>Wrapping a car with protective films</h1>
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
          <Button name="Prices" />
        </Link>
      </div>
    </div>
  )
}

export default WelcomeSecond
