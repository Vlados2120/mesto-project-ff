import { toggleLike as apiToggleLike, deleteCard as apiDeleteCard } from "../api.js"

export function createCard(cardData, deleteCallback, likeCallback, openImagePopup, userId) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");

  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likesCountElement = cardElement.querySelector(".card__likes-count");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likesCountElement.textContent = cardData.likes.length;

  const isLikedByCurrentUser = cardData.likes.some((like) => like._id === userId);
  if (isLikedByCurrentUser) {
    likeButton.classList.add("card__like-button_is-active");
  }

  if (cardData.owner._id !== userId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", () => deleteCallback(cardElement, cardData._id));
  }

  likeButton.addEventListener("click", () => {
    likeCallback(likeButton, cardData._id, likesCountElement);
  });

  cardImage.addEventListener("click", () => openImagePopup(cardData));

  return cardElement;
}

export function toggleLike(likeButton, cardId, likesCountElement) {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");

  apiToggleLike(cardId, isLiked)
    .then((data) => {
      likesCountElement.textContent = data.likes.length; 
      likeButton.classList.toggle("card__like-button_is-active"); 
    })
    .catch((error) => console.error("Ошибка при изменении лайка:", error));
}

export function deleteCard(cardElement, cardId) {
  apiDeleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((error) => console.error("Ошибка при удалении карточки:", error));
}