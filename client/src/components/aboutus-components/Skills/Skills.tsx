import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Skills.css";

interface Tag {
  id: string;
  name: string;
  value: number; // 1-10 importance
  category: string;
}

const Skills = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const colorScaleRef = useRef<d3.ScaleOrdinal<string, string> | null>(null);

  // Generate tags with programmatic values
  const generateTags = (): Tag[] => {
    const techStack = [
      { name: "React", baseValue: 9, category: "Frontend" },
      { name: "TypeScript", baseValue: 8, category: "Frontend" },
      { name: "Node.js", baseValue: 7, category: "Backend" },
      { name: "Python", baseValue: 6, category: "Backend" },
      { name: "Docker", baseValue: 5, category: "DevOps" },
      { name: "AWS", baseValue: 6, category: "DevOps" },
      { name: "PostgreSQL", baseValue: 7, category: "Data" },
      { name: "Figma", baseValue: 4, category: "Design" },
      { name: "GraphQL", baseValue: 5, category: "Backend" },
      { name: "Rust", baseValue: 3, category: "Backend" },
      { name: "Kubernetes", baseValue: 4, category: "DevOps" },
      { name: "TensorFlow", baseValue: 2, category: "Data" },
    ];

    return techStack.map((tech) => ({
      id: `${tech.name}-${Math.random().toString(36).substr(2, 9)}`,
      name: tech.name,
      value: tech.baseValue + Math.random(), // Add some variance
      category: tech.category,
    }));
  };

  // Initialize tags and color scale
  useEffect(() => {
    const generatedTags = generateTags();
    setTags(generatedTags);

    // Create programmatic color scale
    const categories = Array.from(
      new Set(generatedTags.map((t) => t.category))
    );
    colorScaleRef.current = d3
      .scaleOrdinal<string>()
      .domain(categories)
      .range(d3.schemeTableau10);
  }, []);

  // Handle responsive resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: Math.min(800, window.innerWidth - 40),
        height: Math.min(600, window.innerWidth * 0.75),
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="algorithmic-container">
      <h2 className="algorithmic-title">Programmatic Skill Cloud</h2>
      <p className="algorithmic-subtitle">
        Size, color, and position generated algorithmically from skill values
      </p>

      <div
        className="algorithmic-tag-cloud"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="algorithmic-tag"
            style={{
              color: colorScaleRef.current
                ? colorScaleRef.current(tag.category)
                : "#4a5568",
              fontSize: `${tag.value * 4}px`,
              fontWeight: 400 + tag.value * 50,
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
