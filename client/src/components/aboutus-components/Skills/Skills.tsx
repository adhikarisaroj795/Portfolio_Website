import React from "react";
import { FiCode, FiServer, FiDatabase, FiCpu } from "react-icons/fi";
import "./Skills.css";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <FiCode className="category-icon" />,
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <FiServer className="category-icon" />,
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database",
      icon: <FiDatabase className="category-icon" />,
      skills: ["PostgreSQL", "Prisma", "MongoDb"],
    },
    {
      title: "DevOps",
      icon: <FiCpu className="category-icon" />,
      skills: ["Docker", "AWS", "CI/CD", "Terraform", "Kubernetes"],
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-grid">
        {categories.map((category) => (
          <div key={category.title} className="skill-category">
            <div className="category-header">
              {category.icon}
              <h3 className="category-title">{category.title}</h3>
            </div>
            <ul className="skills-list">
              {category.skills.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
