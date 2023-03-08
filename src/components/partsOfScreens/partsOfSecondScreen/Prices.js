import { ReactComponent as Dots } from "../../icons/dots.svg"
import TableForPrices from "../../tables/TableForPrices"
import styles from "../partsOfSecondScreen/Prices.module.css"

const Prices = () => {
  return (
    <div id="prices" className={styles.main}>
      <div className={styles.main__header}>
        <h1>Full car wrap cost</h1>
      </div>
      <div className={styles.main__dots}>
        <Dots />
      </div>
      <TableForPrices />
    </div>
  )
}

export default Prices
