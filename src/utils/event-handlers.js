function dragStart() {
  console.log(this.id, 'dragstart');
}

function dragEnd() {
  console.log(this.id, 'dragend');
}

function dragOver() {
  console.log(this.id, 'dragover');
}

function dragEnter() {
  console.log(this.id, 'dragenter');
}

function dragLeave() {
  console.log(this.id, 'dragleave');
}

function drop() {
  console.log(this.id, 'drop');
}

export { dragEnd, dragEnter, dragLeave, dragOver, dragStart, drop };
