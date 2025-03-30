import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className={styles.wrapper}>
        <div className={styles.col1}>
          <span>_Find me in:</span>
        </div>
        <div className={styles.col2}>
          <a
            href="https://www.instagram.com/adk_saroz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className={styles.col3}>
          <a
            href="https://www.linkedin.com/in/saroj-adhikari-ba123b207/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-terminal">
        <div className={styles.foterminal}>
          <span>
            <IoTerminal />
            TERMINAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
