import React, { useState } from "react";
import update from "immutability-helper";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import sampleItems from "../sampleItems";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 348px));
  column-gap: 10px;
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

  console.log(cardList);
  return (
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
  );
};

export default Cards;
