import SnakeGame from "../../components/snakeGame/SnakeGame";
import "./home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  IoMdArrowDropupCircle,
  IoMdArrowDropdownCircle,
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
const Home = () => {
  return (
    <section className="home-section">
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
          <div className="game-controls">
            <div className="controlls-comment">
              <span>// Use Keyboard</span>
              <span>// arrows to play</span>
            </div>

            <div className="controls-arrow">
              <div className="controlls-arrow1">
                <IoMdArrowDropupCircle />
              </div>
              <div className="controlls-arrow2 flex ">
                <div className="arrow-left">
                  <IoMdArrowDropleftCircle />
                </div>
                <div className="arrow-right">
                  <IoMdArrowDroprightCircle />
                </div>
              </div>
              <div className="controlls-arrow3">
                <IoMdArrowDropdownCircle />
              </div>
            </div>

            <div className="snk-highscore">
              <span>// Highest Score: 85</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
