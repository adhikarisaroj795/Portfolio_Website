import React, { useState, useEffect, useRef, useCallback } from "react";
import "./SnakeGame.css";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];

const getRandomFoodPosition = (snake: { x: number; y: number }[]) => {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (
    snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
  );
  return newFood;
};

const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(() => getRandomFoodPosition(INITIAL_SNAKE));
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [speed, setSpeed] = useState(200);
  const [gameOver, setGameOver] = useState(false);
  const gameLoop = useRef<NodeJS.Timeout | null>(null);
  const directionQueue = useRef<{ x: number; y: number } | null>(null);
  const directionRef = useRef(direction);
  const snakeRef = useRef(snake);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const newDirection =
      event.key === "ArrowUp"
        ? DIRECTIONS.UP
        : event.key === "ArrowDown"
        ? DIRECTIONS.DOWN
        : event.key === "ArrowLeft"
        ? DIRECTIONS.LEFT
        : event.key === "ArrowRight"
        ? DIRECTIONS.RIGHT
        : null;

    if (!newDirection) return;

    if (
      newDirection.x + directionRef.current.x === 0 &&
      newDirection.y + directionRef.current.y === 0
    ) {
      return;
    }

    directionQueue.current = newDirection;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    const currentDirection = directionRef.current;
    const currentSnake = [...snakeRef.current];
    let newDirection = currentDirection;

    if (directionQueue.current) {
      newDirection = directionQueue.current;
      directionQueue.current = null;
      setDirection(newDirection);
    }

    const head = {
      x: currentSnake[0].x + newDirection.x,
      y: currentSnake[0].y + newDirection.y,
    };

    // Collision detection
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      currentSnake.some(
        (segment) => segment.x === head.x && segment.y === head.y
      )
    ) {
      setGameOver(true);
      if (gameLoop.current) clearInterval(gameLoop.current);
      return;
    }

    const newSnake = [head, ...currentSnake];

    // Food consumption
    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomFoodPosition(newSnake));
      setSpeed((prev) => Math.max(prev - 5, 50));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [food, gameOver]);

  useEffect(() => {
    if (!gameOver) {
      gameLoop.current = setInterval(moveSnake, speed);
    }
    return () => {
      if (gameLoop.current) clearInterval(gameLoop.current);
    };
  }, [speed, gameOver, moveSnake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(getRandomFoodPosition(INITIAL_SNAKE));
    setDirection(DIRECTIONS.RIGHT);
    directionRef.current = DIRECTIONS.RIGHT;
    directionQueue.current = null;
    setSpeed(200);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <div className="score-board">
        <span>Score: {snake.length - 3}</span>
        <button onClick={resetGame}>Restart</button>
      </div>

      <div className="game-grid">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={`${x}-${y}`}
              className={`grid-cell ${isSnake ? "snake" : ""} ${
                isFood ? "food" : ""
              }`}
            />
          );
        })}
      </div>

      {/* {gameOver && <div className="game-over">Game Over! Click Restart</div>} */}
    </div>
  );
};

export default SnakeGame;
