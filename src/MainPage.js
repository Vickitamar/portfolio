import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A7FAE7; 
  height: 100vh;
`;

const StyledForeground = styled.div`
  background-color: #222;
  height: 90vh;
  width: 95vw;
  display: flex;
  align-items: center;
`;

const StyledNameHeader = styled.h1`
  color: #A7FAE7;
  font-size: 6em;
  margin-left: 1em;
`;

const MainPage = () => {
  return (
    <StyledBackground>
      <StyledForeground>
        <StyledNameHeader>
          Hello, my name is
          <br />
          Vicki.
        </StyledNameHeader>
      </StyledForeground>
    </StyledBackground>
  );
};

export default MainPage;
