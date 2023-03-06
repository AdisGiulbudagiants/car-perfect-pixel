import { ReactComponent as Dots } from "../icons/dots.svg"
import TableForAchievements from "../tables/TableForAchievements"
import styles from "./Achievements.module.css"

const Achievements = () => {
  return (
    <div id="achievements" className={styles.main}>
      <div className={styles.leftWrapper}>
        <h1 className={styles.header}>
          OUR ACHIEVEMENTS FROM THE RUSSIAN CUP TO THE WORLD CHAMPIONSHIPS
        </h1>
        <div style={{ marginTop: 18 }}>
          <Dots />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
          tincidunt aliquam tincidunt pretium sodales. Tristique odio
          pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut
          amet odio orci magnis praesent ultrices. Praesent malesuada lacus
          tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis
          pretium, volutpat.
        </p>
      </div>
      <div className={styles.rightWrapper}>
        <TableForAchievements />
      </div>
    </div>
  )
}

export default Achievements
