import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => (
  <header data-testid="header" className={styles.header}>
    <Link href="/">
      <a>
        <img
          className="logo"
          width={300}
          height={75}
          src="/logo.svg"
          alt="HeaderLogo"
        />
      </a>
    </Link>
    <div>Awesome Cheat Sheets</div>
  </header>
);

export default Header;
