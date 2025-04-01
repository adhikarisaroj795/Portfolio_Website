import React, { useState, useEffect, useRef } from "react";
import "./education.css";
import typingSound from "../../../assets/typing.mp3";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

const education: EducationItem[] = [
  {
    degree: "SLC",
    institution: "Convent English School",
    year: "2016",
  },
  {
    degree: "Higher Secondary Level (+2)",
    institution: "Balmiki Providence",
    year: "2016 - 2018",
  },
  {
    degree: "Bachelors In Information Technology (BIT)",
    institution: "Kist - College",
    year: "2018 - 2024",
  },
];

const Education = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = `const Education = [
    ${education
      .map(
        (item) => `{
        degree: "${item.degree}",
        institution: "${item.institution}",
        year: "${item.year}"
    }`
      )
      .join(",\n    ")}
];`;

  const colorMap = {
    const: "code-keyword",
    Education: "code-variable",
    "=": "code-operator",
    "[": "code-punctuation",
    "]": "code-punctuation",
    "{": "code-punctuation",
    "}": "code-punctuation",
    ",": "code-punctuation",
    ":": "code-punctuation",
    degree: "code-key",
    institution: "code-key",
    year: "code-key",
  };

  const hexToRgb = (hex) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };
  const audioRef = useRef(new Audio(typingSound));
  audioRef.current.preload = "auto";
  useEffect(() => {
    let charIndex = 0;
    audioRef.current.volume = 0.3;

    audioRef.current.load();
    audioRef.current.currentTime = 3;
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.play().catch((error) => console.log("Audio error", error));

    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));

        charIndex++;
      } else {
        clearInterval(typingInterval);
        audioRef.current.pause();
      }
    }, 30);

    return () => {
      clearInterval(typingInterval);
      audioRef.current.pause();
    };
  }, [fullText]);

  const renderColoredText = () => {
    let currentText = "";
    let result = [];
    for (let i = 0; i < typedText.length; i++) {
      let char = typedText[i];
      let word = "";
      let j = i;
      while (
        j < typedText.length &&
        typedText[j] !== " " &&
        typedText[j] !== "\n" &&
        typedText[j] !== "," &&
        typedText[j] !== ":" &&
        typedText[j] !== "{" &&
        typedText[j] !== "}" &&
        typedText[j] !== "[" &&
        typedText[j] !== "]"
      ) {
        word += typedText[j];
        j++;
      }
      if (colorMap[word]) {
        if (currentText) {
          result.push(<span key={i - currentText.length}>{currentText}</span>);
          currentText = "";
        }
        result.push(
          <span key={i} className={colorMap[word]}>
            {word}
          </span>
        );
        i = j - 1;
      } else if (
        typedText.substring(i, i + 1) === '"' &&
        typedText.substring(i + 1, i + 2) !== '"'
      ) {
        let stringValue = '"';
        let k = i + 1;
        while (k < typedText.length && typedText[k] !== '"') {
          stringValue += typedText[k];
          k++;
        }
        stringValue += '"';
        if (currentText) {
          result.push(<span key={i - currentText.length}>{currentText}</span>);
          currentText = "";
        }
        result.push(
          <span key={i} style={{ color: hexToRgb("#E7A863") }}>
            {stringValue}
          </span>
        );
        i = k;
      } else if (["{", "}", "[", "]", ","].includes(char)) {
        if (currentText) {
          result.push(<span key={i - currentText.length}>{currentText}</span>);
          currentText = "";
        }
        result.push(
          <span key={i} style={{ color: "white" }}>
            {char}
          </span>
        );
      } else {
        currentText += char;
      }
    }
    if (currentText) {
      result.push(<span key={typedText.length}>{currentText}</span>);
    }
    return result;
  };

  return (
    <div className="education-wrapper">
      <div className="education-container">{renderColoredText()}</div>
    </div>
  );
};

export default Education;
