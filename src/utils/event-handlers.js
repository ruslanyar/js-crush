import { board } from '../../main';
import candyState from '../components/CandyState';

function dragStart() {
  console.log(this.id, 'dragstart');
  candyState.candyIdBeingDragged = +this.id;
  candyState.colorBeingDragged = this.attributes['data-color'].value;
}

function dragEnd() {
  console.log(this.id, 'dragend');
}

function dragOver(e) {
  e.preventDefault();
  console.log(this.id, 'dragover');
}

function dragEnter() {
  console.log(this.id, 'dragenter');
}

function dragLeave() {
  console.log(this.id, 'dragleave');
}

function drop(e) {
  e.preventDefault();
  console.log(this.id, 'drop');
  // get data of candy being replaced
  candyState.candyIdBeingReplaced = +this.id;
  candyState.colorBeingReplaced = this.attributes['data-color'].value;

  // set data to candy being replaced
  board.candysList[candyState.candyIdBeingReplaced].classList.replace(
    candyState.colorBeingReplaced,
    candyState.colorBeingDragged
  );

  board.candysList[candyState.candyIdBeingReplaced].setAttribute(
    'data-color',
    candyState.colorBeingDragged
  );

  // set data to candy being dragged
  board.candysList[candyState.candyIdBeingDragged].classList.replace(
    candyState.colorBeingDragged,
    candyState.colorBeingReplaced
  );

  board.candysList[candyState.candyIdBeingDragged].setAttribute(
    'data-color',
    candyState.colorBeingReplaced
  );

  candyState.reset();
}

export { dragEnd, dragEnter, dragLeave, dragOver, dragStart, drop };
