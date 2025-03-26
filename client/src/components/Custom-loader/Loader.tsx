import { useState, useEffect } from "react";
import styles from "./Loader.module.css";

const messages: string[] = [
  "Initializing portfolio...",
  "Fetching projects...",
  "Loading experience...",
  "Optimizing UI...",
  "Finalizing setup...",
  "Welcome to my portfolio! 🚀",
];

const TerminalLoader: React.FC = () => {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        const typingTimeout = setTimeout(() => {
          setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 10);

        //10
        return () => clearTimeout(typingTimeout);
      } else {
        const nextMessageTimeout = setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, currentMessage]);
          setCurrentMessage("");
          setMessageIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);

        //500
        return () => clearTimeout(nextMessageTimeout);
      }
    }
  }, [charIndex, messageIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.terminal}>
        {displayedMessages.map((msg, index) => (
          <div key={index} className={styles.line}>
            <span className={styles.prompt}>$</span> {msg}
          </div>
        ))}
        {messageIndex < messages.length && (
          <div className={styles.line}>
            <span className={styles.prompt}>$</span> {currentMessage}
            <span className={styles.cursor}>|</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalLoader;
