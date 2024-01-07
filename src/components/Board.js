export default class Board {
  #candys;
  #size;
  #containerSelector;
  #templateSelector;
  #contentSelector;
  #fillCandys;

  constructor({
    containerSelector,
    templateSelector,
    contentSelector,
    size,
    fillCandys,
  }) {
    this.#size = size;
    this.#containerSelector = containerSelector;
    this.#templateSelector = templateSelector;
    this.#contentSelector = contentSelector;
    this.#fillCandys = fillCandys;
  }

  #getElement() {
    let templateElement = document.querySelector(this.#templateSelector);
    let boardElement = templateElement.content
      .querySelector(this.#contentSelector)
      .cloneNode(true);

    return boardElement;
  }

  #createBoard() {
    let boardElement = this.#getElement();
    this.#candys = this.#fillCandys(this.#size);
    this.#candys.forEach((candy) => {
      boardElement.appendChild(candy);
    });
    return boardElement;
  }

  addBoard() {
    let containerElement = document.querySelector(this.#containerSelector);
    let board = this.#createBoard();
    containerElement.appendChild(board);
  }
}
