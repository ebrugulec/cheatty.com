import styles from "./Header.module.scss";

const Header = () => (
  <header data-testid="header" className={styles.header}>
    <img
      className="logo"
      width={300}
      height={75}
      src="/logo.svg"
      alt="HeaderLogo"
    />
    <div>Awesome Cheat Sheets</div>
  </header>
);

export default Header;
