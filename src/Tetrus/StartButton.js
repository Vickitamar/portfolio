import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    border: none
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: white;
    font-family: Pixel;
    outline: none;
    cusor: pointer;
    background-color: black;
`;

const StartButton = ({ callback }) => (
<StyledButton onClick={callback}>Start Game</StyledButton>
)

export default StartButton;