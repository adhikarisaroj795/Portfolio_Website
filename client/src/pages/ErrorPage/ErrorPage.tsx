import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css"; // Import the CSS file

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          {error?.statusText || "Oops! Something went wrong."}
        </p>

        {/* Animated SVG */}
        <div className="error-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>

        <Link to="/" className="home-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
