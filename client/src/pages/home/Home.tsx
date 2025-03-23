import "./home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <section className="home-section container">
      <div className="home-page-wrapper flex">
        <div className="home-page-left">
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
        <div className="home-page-right">i am right</div>
      </div>
    </section>
  );
};

export default Home;
