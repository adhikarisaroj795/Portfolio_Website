import SnakeGame from "../../components/snakeGame/SnakeGame";
import "./home.css";

import {
  IoMdArrowDropupCircle,
  IoMdArrowDropdownCircle,
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import TypingEffect from "../../components/typingEffect/TypingEffect";

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="home-page-wrapper flex">
        <div className="home-page-left">
          <div className="home-left-content">
            <span className="f-regular">Hi all, i am</span>

            <h1>Saroj Adikari</h1>
            <h3 className="color-blue">
              {/* <MdKeyboardArrowRight /> */}
              <TypingEffect />
            </h3>

            <div className="comment">
              <span>//complete the game to continue</span>
              <span>//find my profile on Gitub</span>
            </div>

            <p>
              <span className="color-blue">Const </span>
              <span className="color-green">githubLink </span> = <span></span>
              <span className="color-yellow">
                <a
                  href="https://github.com/adhikarisaroj795"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/adhikarisaroj795
                </a>
              </span>
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
              <span className="color-blue"> Highest Score: 85</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <TerminalLoader />
      </div> */}
    </section>
  );
};

export default Home;
