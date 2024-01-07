class CandyState {
  #colorBeingDragged = null;
  #colorBeingReplaced = null;
  #candyIdBeingDragged = null;
  #candyIdBeingReplaced = null;

  get colorBeingDragged() {
    return this.#colorBeingDragged;
  }

  set colorBeingReplaced(color) {
    this.#colorBeingReplaced = color;
  }

  get colorBeingReplaced() {
    return this.#colorBeingReplaced;
  }

  set candyIdBeingDragged(id) {
    this.#candyIdBeingDragged = id;
  }

  get candyIdBeingDragged() {
    return this.#candyIdBeingDragged;
  }

  set colorBeingDragged(id) {
    this.#colorBeingDragged = id;
  }

  get candyIdBeingReplaced() {
    return this.#candyIdBeingReplaced;
  }

  set candyIdBeingReplaced(id) {
    this.#candyIdBeingReplaced = id;
  }

  reset() {
    this.#candyIdBeingDragged = null;
    this.#candyIdBeingReplaced = null;
    this.#colorBeingDragged = null;
    this.#colorBeingReplaced = null;
  }
}

export default new CandyState();
