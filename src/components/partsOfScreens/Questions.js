import { Link } from "react-scroll"
import { ReactComponent as Dots } from "../icons/dots.svg"
import { ReactComponent as Telegram } from "../icons/telegram.svg"
import { ReactComponent as Youtube } from "../icons/youtube.svg"
import { ReactComponent as Vk } from "../icons/vk.svg"
import { ReactComponent as Geo } from "../icons/Geolocation.svg"
import { ReactComponent as Phone } from "../icons/phone.svg"
import { ReactComponent as Mail } from "../icons/mail.svg"
import Button from "../Button"
import styles from "./Questions.module.css"

const Questions = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>We will answer any question</h1>
        </div>
        <div className={styles.dots}>
          <Dots />
        </div>
        <div className={styles.partOne}>
          <div className={styles.partOne__inputs}>
            <label>
              <input className={styles.name} placeholder="Name" />
            </label>
            <label>
              <input required className={styles.phone} placeholder="Phone" />
            </label>
          </div>
          <div className={styles.partTwo}>
            <div className={styles.partTwo__questions}>
              <textarea
                required
                className={styles.questions}
                placeholder="Question about design, tuning, etc."
              />
            </div>
            <div className={styles.partTwo__socials}>
              <div className={styles.links}>
                <a href="https://t.me/AbuDabiSida" target="_blank">
                  <Telegram />
                </a>
              </div>
              <div className={styles.links}>
                <a href="https://www.youtube.com/" target="_blank">
                  <Youtube />
                </a>
              </div>
              <div className={styles.links}>
                <a href="https://vk.com/id383399628" target="_blank">
                  <Vk />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.partThree}>
            <div className={styles.partThree__leftWrapper}>
              <Button name="send" />
            </div>
            <div className={styles.partThree__rightWrapper}>
              <div className={styles.partThree__geo}>
                <Geo />
                <p className={styles.text}>
                  Eu faucibus et rutrum fringilla orci nunc
                </p>
              </div>
              <div className={styles.phoneAndMail}>
                <div className={styles.partThree__phone}>
                  <Phone />
                  <p className={styles.text}>8 (812) 123-45-67</p>
                </div>
                <div className={styles.partThree__mail}>
                  <Mail />
                  <p className={styles.text}>test@test.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <footer className={styles.footer}>
        <p className={styles.footer__text}>
          2022 © Est et viverra pellentesque pharetra lorem proin in
        </p>
        <div className={styles.footer__links}>
          <Link
            to="home"
            duration={2500}
            smooth={true}
            className={styles.footer__link}>
            <p>Home</p>
          </Link>
          <Link
            to="advantages"
            smooth={true}
            duration={2000}
            className={styles.footer__link}
            href="#">
            <p>Сar wrapping</p>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={1500}
            className={styles.footer__link}>
            <p>Our services</p>
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1500}
            className={styles.footer__link}>
            <p>Gallery</p>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Questions
