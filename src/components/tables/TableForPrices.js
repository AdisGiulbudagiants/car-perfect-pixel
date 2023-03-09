import styles from "./TableForPrices.module.css"

const TableForPrices = () => {
  return (
    <div className={styles.main}>
      <table>
        <thead>
          <tr>
            <td className={styles.main__header}>car / material</td>
            <td className={styles.main__header}>
              Film <span>Spectroll</span>
            </td>
            <td className={styles.main__header}>
              Film <span>Hexis</span>
            </td>
            <td className={styles.main__header}>
              Film <span>SunTek</span>
            </td>
            <td className={styles.main__header}>
              Film <span>LLumar</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.red}>
              <div className={styles.red__brand}>
                <h1>
                  1 <span className={styles.red__span}>class</span>
                </h1>
                <p>(Mini cooper, Fiat 500)</p>
              </div>
            </td>
            <td className={styles.prices}>53 000 ₽</td>
            <td className={styles.prices}>64 000 ₽</td>
            <td className={styles.prices}>69 000 ₽</td>
            <td className={styles.prices}>72 000 ₽</td>
          </tr>
          <tr>
            <td className={styles.red}>
              <div className={styles.red__brand}>
                <h1>
                  2 <span className={styles.red__span}>class</span>
                </h1>
                <p>(BMW 3, Mercedes)</p>
              </div>
            </td>
            <td className={styles.prices}>53 000 ₽</td>
            <td className={styles.prices}>64 000 ₽</td>
            <td className={styles.prices}>69 000 ₽</td>
            <td className={styles.prices}>72 000 ₽</td>
          </tr>
          <tr>
            <td className={styles.red}>
              <div className={styles.red__brand}>
                <h1>
                  4 <span className={styles.red__span}>class</span>
                </h1>
                <p>(BMW 7, Mercedes S)</p>
              </div>
            </td>
            <td className={styles.prices}>53 000 ₽</td>
            <td className={styles.prices}>64 000 ₽</td>
            <td className={styles.prices}>69 000 ₽</td>
            <td className={styles.prices}>72 000 ₽</td>
          </tr>
          <tr>
            <td className={styles.red}>
              <div className={styles.red__brand}>
                <h1>
                  5 <span className={styles.red__span}>class</span>
                </h1>
                <p>(BMW X3,X4, Mercedes)</p>
              </div>
            </td>
            <td className={styles.prices}>53 000 ₽</td>
            <td className={styles.prices}>64 000 ₽</td>
            <td className={styles.prices}>69 000 ₽</td>
            <td className={styles.prices}>72 000 ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableForPrices
