export default class Card {
  //---------------------------CARD CONSTRUCTOR------------------------------->>
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this.isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  //-----------METHOD TO GET THE CARD ELEMENT OUT OF THE TEMPLATE-------------->>
  getId() {
    return this._id;
  }

  //-----------METHOD TO GET THE CARD ELEMENT OUT OF THE TEMPLATE-------------->>
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  //-----------METHOD TO ADD EVENT LISTENERS ASSOCIATED WITH THE CARD----------->>
  _setEventListeners() {
    //-----------IMAGE ELEMENT CLICK EVENT LISTENER----------->>
    this._imageElement.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });

    //-----------LIKE BUTTON CLICK EVENT LISTENER------------>>
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    //-----------TRASH BUTTON CLICK EVENT LISTENER----------->>
    this._trashButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
  }

  //-----------METHOD TO HANDLE CARD TRASH BUTTON CLICK----------->>
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  //-----------METHOD TO HANDLE CARD LIKE BUTTON CLICK----------->>
  toggleLikeCard(isLiked) {
    this.isLiked = isLiked;
    this.renderLikeCard();
  }

  renderLikeCard() {
    this.isLiked
      ? this._likeButton.classList.add("card__like-button_active")
      : this._likeButton.classList.remove("card__like-button_active");
  }

  //--------------METHOD TO POPULATE THE CARD ELEMENT------------------------>>
  generateCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._trashButton = this._element.querySelector(".card__trash-button");
    this._setEventListeners();

    this._imageElement.setAttribute("src", this._link);
    this._imageElement.setAttribute("alt", this._name);
    this._element.querySelector(".card__title").textContent = this._name;
    this.renderLikeCard();

    return this._element;
  }
}
