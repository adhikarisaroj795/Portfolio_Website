import React, { useState, useEffect, useRef, useCallback } from "react";
import "./SnakeGame.css";

// Define types
interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const INITIAL_SNAKE: Position[] = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];

const getRandomFoodPosition = (snake: Position[]): Position => {
  let newFood: Position;
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

// Define movement directions
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
} as const;

const SnakeGame: React.FC<{
  onGameOverChange: (gameOver: boolean) => void;
}> = ({ onGameOverChange }) => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(() =>
    getRandomFoodPosition(INITIAL_SNAKE)
  );
  const [direction, setDirection] = useState<Position>(DIRECTIONS.RIGHT);
  const [speed, setSpeed] = useState<number>(200);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameLoop = useRef<NodeJS.Timeout | null>(null);
  const directionQueue = useRef<Position | null>(null);
  const directionRef = useRef<Position>(direction);
  const snakeRef = useRef<Position[]>(snake);

  useEffect(() => {
    onGameOverChange(gameOver);
  }, [gameOver, onGameOverChange]);

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

    // Prevent reversing direction
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

    let newDirection = directionRef.current;

    if (directionQueue.current) {
      newDirection = directionQueue.current;
      directionQueue.current = null;
      setDirection(newDirection);
    }

    const head: Position = {
      x: snakeRef.current[0].x + newDirection.x,
      y: snakeRef.current[0].y + newDirection.y,
    };

    // Collision detection
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      snakeRef.current.some(
        (segment) => segment.x === head.x && segment.y === head.y
      )
    ) {
      setGameOver(true);
      if (gameLoop.current) clearInterval(gameLoop.current);
      return;
    }

    const newSnake = [head, ...snakeRef.current];

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
              className={`grid-cell ${
                isSnake
                  ? snake[0].x === x && snake[0].y === y
                    ? "snake-head tongue"
                    : "snake"
                  : ""
              } ${isFood ? "food" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SnakeGame;
