import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { IReducer, selectBlock } from '../../../reducers';
import { INDEX, N } from '../../../typings';

import { Container } from './styles';

interface BlockProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  value: N;
  isActive: boolean;
  isPuzzle: boolean;
}

const Block: FC<BlockProps> = ({ colIndex, rowIndex }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const state = useSelector<IReducer, IState>(
    ({ workingGrid, challengeGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  );

  const handleClick = () => {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]));
    }
  };

  return (
    <Container
      data-cy={`block-${rowIndex}-${colIndex}`}
      active={state.isActive}
      puzzle={state.isPuzzle}
      onClick={handleClick}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  );
};

export default Block;
