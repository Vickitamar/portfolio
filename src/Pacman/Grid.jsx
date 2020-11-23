import React, { useState, useEffect } from "react";
import styled from "styled-components";
import layout from "./layout";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 570px;
  height: 580px;
  border: solid black;
`;

const StyledHello = styled.div`
  width: 100px;
  height: 100px;
  border: solid red;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSquare = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.pac-dot {
    background-color: green;
    border: 5px solid white;
    box-sizing: border-box;
  }
  &.wall {
    background-color: blue;
  }
  &.ghost-lair {
    background-color: yellow;
  }
  &.power-pellet {
    background-color: green;
    border-radius: 10px;
  }
  &.pac-man {
    background-color: yellow;
    border-radius: 10px;
  }
  width: 20px;
  height: 20px;
  background-color: white;
`;

const Grid = () => {
  const [pacmanCurrentIndex, setPackmanCurrentIndex] = useState(490);
  function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
  }

  const squares = layout.map((entry, index) => {
    let squareClassName;
    if (entry === 0) {
      squareClassName = "pac-dot";
    } else if (entry === 1) {
      squareClassName = "wall";
    } else if (entry === 2) {
      squareClassName = "ghost-lair";
    } else if (entry === 3) {
      squareClassName = "power-pellet";
    }
    if (index === pacmanCurrentIndex) {
      squareClassName = "pac-man";
    }

    return <StyledSquare key={entry} className={squareClassName} />;
  });

  const happyPress = useKeyPress("h");

  return (
    <StyledContainer>
      <StyledGrid>{squares}</StyledGrid>
      <StyledHello>{happyPress && "😊"}</StyledHello>
    </StyledContainer>
  );
};

export default Grid;
