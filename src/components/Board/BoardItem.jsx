import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  S_BoardItemBack,
  S_BoardItemContainer,
  S_BoardItemSubcontainer,
  S_BoardItemFront,
  S_BoardItemImage
} from './boardStyles';

const BoardItem = ({
  id,
  src,
  setItem,
  guessed,
  selectedItemsLength,
  reset,
  color
}) => {
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
      isClickable={isClickable}
      reset={reset}
    >
      <S_BoardItemSubcontainer show={guessed || show}>
        <S_BoardItemFront></S_BoardItemFront>
        <S_BoardItemBack color={color}>
          <S_BoardItemImage src={src} />
        </S_BoardItemBack>
      </S_BoardItemSubcontainer>
    </S_BoardItemContainer>
  );
};

export default memo(BoardItem);
