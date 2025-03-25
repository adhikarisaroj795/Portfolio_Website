import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className={styles.wrapper}>
        <div className={styles.col1}>
          <span>_Find me in:</span>
        </div>
        <div className={styles.col2}>
          <FaInstagram />
        </div>
        <div className={styles.col3}>
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
