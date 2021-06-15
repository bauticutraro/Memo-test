import React from 'react';
import {
  S_BoardItemBack,
  S_BoardItemContainer,
  S_BoardItemSubcontainer,
  S_BoardItemFront
} from './boardStyles';

const BoardItem = () => {
  return (
    <S_BoardItemContainer>
      <S_BoardItemSubcontainer>
        <S_BoardItemFront>adelante</S_BoardItemFront>
        <S_BoardItemBack>atras</S_BoardItemBack>
      </S_BoardItemSubcontainer>
    </S_BoardItemContainer>
  );
};

export default BoardItem;
