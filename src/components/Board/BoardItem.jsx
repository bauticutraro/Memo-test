import React from 'react';
import {
  S_BoardItemBack,
  S_BoardItemContainer,
  S_BoardItemSubcontainer,
  S_BoardItemFront,
  S_BoardItemImage
} from './boardStyles';

const BoardItem = ({ id, src }) => {
  return (
    <S_BoardItemContainer>
      <S_BoardItemSubcontainer>
        <S_BoardItemFront></S_BoardItemFront>
        <S_BoardItemBack>
          <S_BoardItemImage src={src} />
        </S_BoardItemBack>
      </S_BoardItemSubcontainer>
    </S_BoardItemContainer>
  );
};

export default BoardItem;
