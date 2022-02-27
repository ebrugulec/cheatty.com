import Icon from "../Icon";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer data-testid="footer" className={styles.footer}>
    <div className={styles.socialLinks}>
      <a
        href="https://github.com/ebrugulec/dev-cheat-sheets"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Icon icon="github" size={20} color="black" />
      </a>
    </div>
    <div className={styles.content}>Awesome Cheat Sheets</div>
  </footer>
);

export default Footer;
