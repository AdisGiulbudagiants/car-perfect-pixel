import styles from "./Button.module.css"

const Button = ({ name, style }) => {
  return (
    <button style={style} className={styles.button}>
      {name}
    </button>
  )
}

export default Button
