import React from "react";
import "./interest.css";

const interests = [
  "🛠 const FullStack = { MERN: true, DevOps: true };",
  "🔧 CI/CD Pipelines → Automating Deployments, No More Manual Pushes!",
  "📦 Containerization → Docker & Kubernetes for Scalable Apps",
  "⚡ Optimized APIs → Clean Code, REST, GraphQL & WebSockets",
  "🗄 Database Queries → Indexing, Aggregations, and Performance Tweaks",
  "💡 Serverless Functions → Just Code, No Server Headaches",
  "🌎 Cross-Browser Compatibility → Ensuring Code Runs Everywhere",
  "🎨 Frontend Magic → React.js + TailwindCSS = Pixel Perfect",
  "🚀 DevOps Workflow → Terraform, Ansible & Cloud Deployments",
  "🔐 Security First → JWT, OAuth, and Secure API Endpoints",
  "📈 Performance Profiling → Debugging & Improving Load Times",
  "💾 Git & Version Control → Commit. Push. Merge. Repeat.",
  "🧩 Problem Solving → Debugging, Refactoring & Writing Efficient Code",
  "👨‍💻 Always Learning → New Tech, New Challenges, New Solutions",
];

const Interest = () => {
  return (
    <div className="interst-wrapper ">
      <div className="intrest-row1">
        <ul>
          {interests?.map((intrest, index) => (
            <li key={index}>{intrest}</li>
          ))}
        </ul>
      </div>
      {/* <div className="intrest-row2">
        <h3> DevOps & Automation</h3>
        <ul>
          <li>CI/CD Pipelines (GitHub Actions, GitLab CI/CD, Jenkins)</li>
          <li>Containerization (Docker, Kubernetes)</li>
          <li>Cloud services (AWS, DigitalOcean, Vercel, Netlify)</li>
        </ul>
      </div>
      <div className="intrest-row3">
        <h3> Other Interests</h3>
        <ul>
          <li>API performance optimization</li>
          <li>Web security and best practices</li>
          <li>Real-time applications (WebSockets, Socket.io)</li>
          <li>Open-source contributions</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Interest;
