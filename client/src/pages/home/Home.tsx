import SnakeGame from "../../components/snakeGame/SnakeGame";
import "./home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <section className="home-section container">
      <div className="home-page-wrapper flex">
        <div className="home-page-left">
          <div className="home-left-content">
            <span>Hi all, i am</span>
            <h1>Saroj Adikari</h1>
            <h3>
              <MdKeyboardArrowRight />
              Full-Stack Developer
            </h3>

            <div className="comment">
              <span>//complete the game to continue</span>
              <span>//complete the game to continue</span>
            </div>

            <p>
              <span>Const</span> <span>githubLink </span> =
              <span> https://github.com/adhikarisaroj795</span>
            </p>
          </div>
        </div>
        <div className="home-page-right flex">
          <SnakeGame />
          <div className="game-controls">i am controld</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
