import styles from "./index.module.css";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <nav className={styles.footer}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <a href="/news">ニュース</a>
            </li>
            <li className={styles.item}>
              <a href="/news">メンバー</a>
            </li>
            <li className={styles.item}>
              <a href="/news">お問い合わせ</a>
            </li>
          </ul>
        </nav>
        <p className={styles.cr}>SIMPLE. ALL Rights Reserved 2024</p>
      </footer>
    )
}