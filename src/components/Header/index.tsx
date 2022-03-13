import Link from "next/link";
import Icon from "../Icon";

import styles from "./Header.module.scss";
import useDarkMode from "hooks/UseDarkMode";

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <header data-testid="header" className={styles.header}>
      <Link href="/">
        <a>
          <img
            className="logo"
            width={100}
            height={75}
            src="/logo.svg"
            alt="HeaderLogo"
          />
        </a>
      </Link>
      <div>Awesome Cheat Sheets</div>
      <Icon
        icon={theme === "light" ? "moon" : "sun"}
        size={18}
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
