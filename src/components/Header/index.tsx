import Link from "next/link";
import Icon from "../Icon";

import styles from "./Header.module.scss";
import useDarkMode from "hooks/UseDarkMode";

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <header data-testid="header" className={styles.header}>
      <div className={styles.headerBrand}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <div className={styles.headerAction}>
        <div id="searchWrapper" />
        <Icon
          icon={theme === "light" ? "moon" : "sun"}
          size={18}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
