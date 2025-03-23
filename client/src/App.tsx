import Navbar from "./components/Navbar/Navbar";
import SnakeGame from "./components/snakeGame/SnakeGame";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SnakeGame />
    </div>
  );
};

export default App;
