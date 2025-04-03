import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

// ✅ Define the expected prop type
interface FooterProps {
  setTerminalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ setTerminalActive }) => {
  console.log(setTerminalActive);
  return (
    <footer>
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
        <div className={styles.foterminal} style={{ border: "2px solid blue" }}>
          <span
            onClick={() => {
              console.log("Terminal clicked");

              setTerminalActive((prev) => {
                console.log("Prevstate", prev);
                return !prev;
              });
            }}
          >
            <IoTerminal />
            TERMINAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
