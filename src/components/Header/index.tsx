import Link from "next/link";
import Icon from "../Icon";

import styles from "./Header.module.scss";
import { DarkModeState, SetDarkModeState } from "hooks/UseDarkMode";

const Header = ({
  theme,
  setTheme,
}: {
  theme: DarkModeState;
  setTheme: SetDarkModeState;
}) => {
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
      {theme === "light" ? (
        <Icon
          icon="sun"
          size={25}
          color="black"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Icon
          icon="moon-fill"
          size={18}
          color="black"
          onClick={() => setTheme("dark")}
        />
      )}
    </header>
  );
};

export default Header;
