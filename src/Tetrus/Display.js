import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #A7FAE7;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: #A7FAE7;
`;

const Display = ({gameOver, text}) => (
<StyledDiv>{text}</StyledDiv>
)

export default Display;