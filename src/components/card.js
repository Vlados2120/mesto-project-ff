export function createCard(cardData, deleteCallback, likeCallback, openImagePopup) {
    const cardTemplate = document
      .querySelector("#card-template")
      .content.querySelector(".card");
  
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const likeButton = cardElement.querySelector(".card__like-button");
  
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
  
    deleteButton.addEventListener("click", () => deleteCallback(cardElement));
  
    likeButton.addEventListener("click", () => likeCallback(likeButton));
  
    cardImage.addEventListener("click", () => openImagePopup(cardData));
  
    return cardElement;
  }
  
  export function deleteCard(cardElement) {
    cardElement.remove();
  }
  
  export function toggleLike(likeButton) {
    likeButton.classList.toggle("card__like-button_is-active");
  }