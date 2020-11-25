import React, { useState } from "react";
import StartButton from "./StartButton";
import Display from "./Display";
import Stage from "./Stage";
import { createStage, checkCollision } from "./gameHelpers";
import {
  StyledTetrisWrapper,
  StyledTetris,
  StyledBackground,
} from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetrus = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // gameover
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledBackground>
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
      >
        <StyledTetris>
          <Stage stage={stage} />
          <aside>
            {gameOver ? (
              <Display gameOver={gameOver} text="GameOver" />
            ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
            <StartButton callback={startGame} />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </StyledBackground>
  );
};

export default Tetrus;
//51: 30
