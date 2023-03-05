import { ReactComponent as WashHand } from "../icons/washHand.svg"
import { ReactComponent as List } from "../icons/list.svg"
import { ReactComponent as Experience } from "../icons/experience.svg"
import { ReactComponent as Garant } from "../icons/garant.svg"
import Button from "../Button"
import styles from "./TablesForServicesFirst.module.css"

const TablesForServicesFirst = () => {
  return (
    <>
      <div className={styles.main}>
        {/* Cart 1 */}
        <div className={styles.cart}>
          <div className={styles.cart__svg}>
            <WashHand />
          </div>
          <div className={styles.cart__header}>
            <h1>protective films</h1>
          </div>
          <div className={styles.cart__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
          <div className={styles.cart__button}>
            <Button name="more" />
          </div>
        </div>
        {/* Cart 2 */}
        <div className={styles.cart}>
          <div className={styles.cart__svg}>
            <List />
          </div>
          <div className={styles.cart__header}>
            <h1>color films</h1>
          </div>
          <div className={styles.cart__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
          <div className={styles.cart__button}>
            <Button name="more" />
          </div>
        </div>
        {/* Cart 3 */}
        <div className={styles.cart}>
          <div className={styles.cart__svg}>
            <Experience />
          </div>
          <div className={styles.cart__header}>
            <h1>design</h1>
          </div>
          <div className={styles.cart__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
          <div className={styles.cart__button}>
            <Button name="more" />
          </div>
        </div>
        {/* Cart 4 */}
        <div className={styles.cart}>
          <div className={styles.cart__svg}>
            <Garant />
          </div>
          <div className={styles.cart__header}>
            <h1>interior pasting</h1>
          </div>
          <div className={styles.cart__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              ultrices pellentesque vulputate sit. Ut feugiat.
            </p>
          </div>
          <div className={styles.cart__button}>
            <Button name="more" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TablesForServicesFirst
