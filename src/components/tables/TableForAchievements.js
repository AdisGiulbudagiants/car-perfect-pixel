import SvgStore from "../SvgStore"
import styles from "./TableForAchievements.module.css"

const TableForAchievements = () => {
  return (
    <>
      <table className={styles.table}>
        <tbody className={styles.table__tbody}>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>1
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>6
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>2
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>1
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
        </tbody>
      </table>
      {/* Right second table */}
      <table className={styles.table2}>
        <tbody className={styles.table__tbody}>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>4
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>3
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
          <td className={styles.table__td}>
            <h1 className={styles.table__h1}>
              <span className={styles.table__span}>#</span>1
            </h1>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
          <td className={styles.table__td}>
            <div
              className="flex justify-center"
              style={{ marginTop: 30, marginBottom: 22 }}>
              <SvgStore id="cup" />
            </div>
            <p className={styles.table__text}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE
              DUI
            </p>
          </td>
        </tbody>
      </table>
    </>
  )
}

export default TableForAchievements
