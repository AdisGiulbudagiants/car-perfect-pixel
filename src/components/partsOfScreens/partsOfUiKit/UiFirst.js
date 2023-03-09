import TableForUiFirst from "../../tables/TableForUiFirst"
import styles from "./UiFirst.module.css"

const UiFirst = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__table}>
        <h1 className="h-[73px]">Table</h1>
      </div>
      <TableForUiFirst />
    </div>
  )
}

export default UiFirst
