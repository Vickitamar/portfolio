import React, { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import styled from "styled-components";

type Props = {
  sectionId: string,
  cardIndex: number,
  moveCard: Function,
  key: Number,
};

const StyledMetricsCard = styled.div`
  position: relative;
  line-height: normal;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.isDragging ? 0 : 1)};
  color: black;
  margin: 5px;
`;

const DraggableCard = (props: Props) => {
  const { sectionId } = props;
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "string",
    hover(item) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = props.cardIndex;

      if (dragIndex !== hoverIndex) {
        props.moveCard(dragIndex, hoverIndex);
        // eslint-disable-next-line no-param-reassign
        item.index = hoverIndex;
      }
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "string", index: props.cardIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const styledCardProps = {
    isDragging,
  };

  const opacity = isDragging ? 0 : 1;
  const style = {
    cursor: "move",
  };

  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      <StyledMetricsCard {...styledCardProps}>{sectionId}</StyledMetricsCard>
    </div>
  );
};

export default DraggableCard;
