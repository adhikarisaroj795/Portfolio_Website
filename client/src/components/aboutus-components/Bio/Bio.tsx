import React from "react";
import "./Bio.css";

const Bio: React.FC = () => {
  const lines = [
    "/**",
    " * As a passionate Full Stack MERN Developer with a strong",
    " * foundation in MongoDB, Express.js, React.js, and Node.js, I",
    " * thrive on transforming innovative ideas into functional and user-",
    " * friendly applications.",
    " *",
    " * My expertise extends beyond development to DevOps, enabling me to",
    " * streamline deployment, automate workflows, and optimize system",
    " * performance. With a focus on scalability and seamless user",
    " * experiences, I build robust web solutions that are both efficient",
    " * and future-ready.",
    " *",
    " */",
  ];
  return (
    <div className="bio-wrapper">
      <pre className="bio-comment">
        {lines.map((line, index) => (
          <div key={index} className="comment-line">
            <span className="line-number">{index + 1}</span>
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default Bio;
