import './style.css';

import Board from './src/components/Board';
import Candy from './src/components/Candy';

import { getRandomColor } from './src/utils/utils';
import { COLORS, SIZE } from './src/utils/constants';
import {
  dragEnd,
  dragEnter,
  dragLeave,
  dragOver,
  dragStart,
  drop,
} from './src/utils/event-handlers';

export const board = new Board({
  size: SIZE,
  contentSelector: '#board',
  containerSelector: '#container',
  templateSelector: '#board-template',
  fillCandys: (size) => {
    function mapFn(_, index) {
      const candy = new Candy(
        {
          id: index,
          color: getRandomColor(COLORS),
          contentSelector: '.candy',
          templateSelector: '#candy-template',
        },
        {
          dragEndCb: dragEnd,
          dragEnterCb: dragEnter,
          dragLeaveCb: dragLeave,
          dragOverCb: dragOver,
          dragStartCb: dragStart,
          dropCb: drop,
        }
      );
      return candy.generate();
    }

    return Array.from({ length: size * size }, mapFn);
  },
});

board.addBoard();
