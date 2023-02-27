import styles from "./TableForWelcome.module.css"

const TableForWelcome = () => {
  return (
    <>
      <table className={styles.mainTable}>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>
              <div className={styles.table}>
                <p className={styles.table__header}>ADDRESS:</p>
                <p className={styles.table__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.table}>
                <p className={styles.table__header}>PHONES:</p>
                <p className={styles.table__numbers}>8 (812) 123-45-67</p>
                <p className={styles.table__numbers}>8-911-123-45-67</p>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.table}>
                <p className={styles.table__header}>WORKING MODE:</p>
                <p className={styles.table__date}>MO-FR : 10:00 - 20:00</p>
                <p className={styles.table__date}>SA-SU : 12:00 - 20:00</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableForWelcome
