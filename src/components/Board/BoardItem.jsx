import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  S_BoardItemBack,
  S_BoardItemContainer,
  S_BoardItemSubcontainer,
  S_BoardItemFront,
  S_BoardItemImage
} from './boardStyles';

const BoardItem = ({ id, src, setItem, guessed, selectedItemsLength }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!selectedItemsLength) setShow(false);
  }, [selectedItemsLength]);

  const isClickable = useMemo(
    () => !show && !guessed && selectedItemsLength < 2,
    [show, guessed, selectedItemsLength]
  );

  const handleOnClick = useCallback(() => {
    if (isClickable) {
      setShow(true);
      setItem();
    }
  }, [isClickable, setShow, setItem]);

  return (
    <S_BoardItemContainer
      onClick={handleOnClick}
      show={guessed || show}
      isClickable={isClickable}
    >
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
