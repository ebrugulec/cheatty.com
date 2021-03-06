import Link from "next/link";
import Icon from "../Icon";

import styles from "./Header.module.scss";
import useDarkMode from "hooks/UseDarkMode";

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <header data-testid="header" className={styles.header}>
      <Link href="/">
        <a className={styles.headerBrand}>
          <Icon icon="pages" size={20} />
          Cheatty
        </a>
      </Link>
      <div className={styles.headerAction}>
        <div id="searchWrapper" />
        <Icon
          className={styles.headerThemeSwitch}
          icon={theme === "light" ? "moon" : "sun"}
          size={18}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
