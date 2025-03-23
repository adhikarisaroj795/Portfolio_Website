import React, { useState, useEffect, useCallback, useRef } from "react";
import "./SnakeGame.css";

// Types and constants
type Position = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
const GRID_SIZE = 20;
const INITIAL_TICK_RATE = 200; // Initial tick rate for slow start
const MIN_TICK_RATE = 50; // Minimum tick rate as the game progresses
const TICK_RATE_DECREASE = 5; // Decrease in tick rate every time the snake eats food
const INITIAL_SNAKE_LENGTH = 3;

// Game state interface
interface GameState {
  snake: Position[];
  food: Position;
  direction: Direction;
  gameOver: boolean;
  isGameStarted: boolean;
  score: number;
  tickRate: number;
}

const SnakeGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    snake: Array(INITIAL_SNAKE_LENGTH).fill({ x: 10, y: 10 }),
    food: { x: 5, y: 5 },
    direction: "RIGHT",
    gameOver: false,
    isGameStarted: false,
    score: 0,
    tickRate: INITIAL_TICK_RATE,
  });

  const gameLoopRef = useRef<number | null>(null);
  const lastMoveTimeRef = useRef<number>(Date.now());

  // Memoized game logic functions
  const generateFood = useCallback(
    () => ({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }),
    []
  );

  const resetGame = useCallback(() => {
    setGameState({
      snake: Array(INITIAL_SNAKE_LENGTH).fill({ x: 10, y: 10 }),
      direction: "RIGHT",
      gameOver: false,
      isGameStarted: false,
      score: 0,
      food: generateFood(),
      tickRate: INITIAL_TICK_RATE,
    });
  }, [generateFood]);

  // Optimized collision detection
  const checkCollision = useCallback(
    (head: Position): boolean => {
      return (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE ||
        gameState.snake.some(
          (segment, index) =>
            index !== 0 && segment.x === head.x && segment.y === head.y
        )
      );
    },
    [gameState.snake]
  );

  // Keyboard controls with debouncing
  useEffect(() => {
    let keyTimeoutId: number;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameState.isGameStarted || gameState.gameOver) return;

      clearTimeout(keyTimeoutId);
      keyTimeoutId = setTimeout(() => {
        switch (e.key) {
          case "ArrowUp":
            if (gameState.direction !== "DOWN")
              setGameState((prev) => ({ ...prev, direction: "UP" }));
            break;
          case "ArrowDown":
            if (gameState.direction !== "UP")
              setGameState((prev) => ({ ...prev, direction: "DOWN" }));
            break;
          case "ArrowLeft":
            if (gameState.direction !== "RIGHT")
              setGameState((prev) => ({ ...prev, direction: "LEFT" }));
            break;
          case "ArrowRight":
            if (gameState.direction !== "LEFT")
              setGameState((prev) => ({ ...prev, direction: "RIGHT" }));
            break;
        }
      }, 50);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(keyTimeoutId);
    };
  }, [gameState.direction, gameState.gameOver, gameState.isGameStarted]);

  // Game loop with requestAnimationFrame
  useEffect(() => {
    if (!gameState.isGameStarted || gameState.gameOver) return;

    const moveSnake = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastMoveTimeRef.current;

      if (deltaTime >= gameState.tickRate) {
        const head = { ...gameState.snake[0] };

        switch (gameState.direction) {
          case "UP":
            head.y--;
            break;
          case "DOWN":
            head.y++;
            break;
          case "LEFT":
            head.x--;
            break;
          case "RIGHT":
            head.x++;
            break;
        }

        if (checkCollision(head)) {
          setGameState((prev) => ({ ...prev, gameOver: true }));
          return;
        }

        const newSnake = [head, ...gameState.snake];
        if (head.x === gameState.food.x && head.y === gameState.food.y) {
          setGameState((prev) => ({
            ...prev,
            snake: newSnake,
            food: generateFood(),
            score: prev.score + 1,
            tickRate: Math.max(
              MIN_TICK_RATE,
              prev.tickRate - TICK_RATE_DECREASE
            ),
          }));
        } else {
          newSnake.pop();
          setGameState((prev) => ({ ...prev, snake: newSnake }));
        }

        lastMoveTimeRef.current = currentTime;
      }

      gameLoopRef.current = requestAnimationFrame(moveSnake);
    };

    gameLoopRef.current = requestAnimationFrame(moveSnake);
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState, checkCollision, generateFood]);

  // Render optimization with CSS transforms
  const renderGridCell = useCallback(
    ({ x, y }: Position) => {
      const isSnake = gameState.snake.some(
        (segment) => segment.x === x && segment.y === y
      );
      const isFood = gameState.food.x === x && gameState.food.y === y;

      return (
        <div
          key={`${x}-${y}`}
          className={`grid-cell ${isSnake ? "snake" : ""} ${
            isFood ? "food" : ""
          }`}
          style={{
            transform: `translate(${x * 20}px, ${y * 20}px)`,
          }}
        />
      );
    },
    [gameState.snake, gameState.food]
  );

  return (
    <div className="game-container">
      <header>
        <h1>Snake Game</h1>
        <div className="score-board">
          <span>Score: {gameState.score}</span>
        </div>
      </header>

      <main>
        {!gameState.isGameStarted && !gameState.gameOver && (
          <button
            onClick={() =>
              setGameState((prev) => ({ ...prev, isGameStarted: true }))
            }
          >
            Start Game
          </button>
        )}

        {gameState.gameOver && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Final Score: {gameState.score}</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}

        <div className="game-grid">
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            return renderGridCell({ x, y });
          })}
        </div>
      </main>
    </div>
  );
};

export default SnakeGame;
