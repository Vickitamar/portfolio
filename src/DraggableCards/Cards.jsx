import React, { useState } from "react";
import update from "immutability-helper";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import sampleItems from "../sampleItems";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 200px));
  column-gap: 10px;
  align-self: center;
  justify-self: center;
`;

const StyledPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  height: 100vh;
`;

const StyledForeground = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: #a7fae7;
  height: 90vh;
  width: 95vw;
`;

const StyledHeader = styled.h1`
  color: #222;
  margin-left: 1em;
  font-size: 6em;
`;

const Cards = () => {
  const [cardList, setCardList] = useState(sampleItems);

  const moveCard = (dragIndex, hoverIndex) => {
    const card = cardList[dragIndex];
    const newCardList = update(cardList, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, card],
      ],
    });
    setCardList(newCardList);
  };

  return (
    <StyledPageWrapper>
      <StyledForeground>
        <StyledHeader>Drag</StyledHeader>
        <StyledCardContainer>
          {cardList.map((card, index) => {
            return (
              <DraggableCard
                sectionId={card.skill}
                cardIndex={index}
                moveCard={moveCard}
                key={card.id}
              />
            );
          })}
        </StyledCardContainer>
      </StyledForeground>
    </StyledPageWrapper>
  );
};

export default Cards;
