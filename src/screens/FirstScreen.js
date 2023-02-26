import Navigation from "../components/Navigation"
import SvgStore from "../components/SvgStore"
import styles from "./FirstScreen.module.css"

const FirstScreen = () => {
  return (
    <div className={styles.main}>
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
      <table>
        <tbody>
          <tr>
            <td>
              <div className={styles.table}>
                <p className={styles.table__header}>ADDRESS:</p>
                <p className={styles.table__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </td>
            <td>
              <div className={styles.table}>
                <p className={styles.table__header}>PHONES:</p>
                <p className={styles.table__numbers}>8 (812) 123-45-67</p>
                <p className={styles.table__numbers}>8-911-123-45-67</p>
              </div>
            </td>
            <td>
              <div className={styles.table}>
                <p className={styles.table__header}>WORKING MODE:</p>
                <p className={styles.table__date}>MO-FR : 10:00 - 20:00</p>
                <p className={styles.table__date}>SA-SU : 12:00 - 20:00</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FirstScreen
