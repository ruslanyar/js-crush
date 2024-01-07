export default class Candy {
  #id;
  #color;
  #contentSelector;
  #templateSelector;
  #element;

  #dragStartCb;
  #dragEndCb;
  #dragOverCb;
  #dragEnterCb;
  #dragLeaveCb;
  #dropCb;

  constructor(
    { templateSelector, contentSelector, id, color },
    { dragStartCb, dragEndCb, dragOverCb, dragEnterCb, dragLeaveCb, dropCb }
  ) {
    this.#id = id;
    this.#color = color;
    this.#contentSelector = contentSelector;
    this.#templateSelector = templateSelector;

    this.#dragEndCb = dragEndCb;
    this.#dragEnterCb = dragEnterCb;
    this.#dragLeaveCb = dragLeaveCb;
    this.#dragOverCb = dragOverCb;
    this.#dragStartCb = dragStartCb;
    this.#dropCb = dropCb;
  }

  #getElement() {
    let templateElement = document.querySelector(this.#templateSelector);
    let candyElement = templateElement.content
      .querySelector(this.#contentSelector)
      .cloneNode(true);

    return candyElement;
  }

  #addEventListeners() {
    this.#element.addEventListener('dragstart', this.#dragStartCb);
    this.#element.addEventListener('dragend', this.#dragEndCb);
    this.#element.addEventListener('dragover', this.#dragOverCb);
    this.#element.addEventListener('dragenter', this.#dragEnterCb);
    this.#element.addEventListener('dragleave', this.#dragLeaveCb);
    this.#element.addEventListener('drop', this.#dropCb);
  }

  generate() {
    this.#element = this.#getElement();
    this.#element.setAttribute('draggable', true);
    this.#element.setAttribute('id', this.#id);
    this.#element.setAttribute('data-color', this.#color[0]);
    this.#element.classList.add(this.#color[1]);
    this.#addEventListeners();
    return this.#element;
  }
}
