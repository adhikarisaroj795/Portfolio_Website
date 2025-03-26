import { useState, useEffect } from "react";
import "./TypingEffect.css";

const texts: string[] = [
  "Full Stack Developer",
  "UI/UX Designer",
  "DevOps Enthusiast",
];

const TypingEffect: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const speed: number = isDeleting ? 50 : 100;

  useEffect(() => {
    const currentText: string = texts[index];

    let timer: NodeJS.Timeout;

    if (!isDeleting && text === currentText) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h3>
      {">"} {text}
      <span className="blinking-cursor">|</span>
    </h3>
  );
};

export default TypingEffect;
