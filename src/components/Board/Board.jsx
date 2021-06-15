import React from 'react';
import { boardItems } from '../../utils/boardItems';
import BoardItem from './BoardItem';
import { S_BoardContainer } from './boardStyles';

const Board = () => {
  return (
    <S_BoardContainer>
      {boardItems.map((item, i) => (
        <BoardItem key={i} {...item} />
      ))}
    </S_BoardContainer>
  );
};

export default Board;
