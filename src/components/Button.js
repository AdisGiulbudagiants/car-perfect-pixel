import styles from "./Button.module.css"

const Button = ({ name, onSubmit }) => {
  return (
    <button onSubmit={onSubmit} className={styles.button}>
      {name}
    </button>
  )
}

export default Button
