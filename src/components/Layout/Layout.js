import styles from "./Layout.module.css";
function Layout(props) {
  return (
    <>
      <header>{props.header}</header>
      <main className={styles.main}>{props.content}</main>
      <footer>{props.footer}</footer>
    </>
  );
}
export default Layout;
