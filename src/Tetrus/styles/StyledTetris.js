import styled from 'styled-components';

export const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A7FAE7; 
  height: 100vh;
`;

export const StyledTetrisWrapper= styled.div`
  height: 90vh;
  width: 95vw;
  background-color: #222;

`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
      width: 100%;
      max-width: 200px;
      display: block;
      padding: 0 20px;

  }
`;