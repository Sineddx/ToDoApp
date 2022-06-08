import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.title}>todo app</p>
    </div>
  );
}

export default Header;
