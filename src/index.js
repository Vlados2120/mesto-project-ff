import { createCard, deleteCard, toggleLike } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import { initialCards } from "./scripts/cards.js";

const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formEditProfile = popupEdit.querySelector(".popup__form");
const formNewCard = popupNewCard.querySelector(".popup__form");
const cardNameInput = popupNewCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = popupNewCard.querySelector(".popup__input_type_url");
const popupImgElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

function openImagePopup(cardData) {
  popupImgElement.src = cardData.link;
  popupImgElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(popupImage);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEdit);
}

formEditProfile.addEventListener("submit", handleProfileFormSubmit);

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  const newCard = createCard(newCardData, deleteCard, toggleLike, openImagePopup);
  placesList.prepend(newCard);
  formNewCard.reset();
  closeModal(popupNewCard);
}

formNewCard.addEventListener("submit", handleNewCardSubmit);

editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEdit);
});

addButton.addEventListener("click", () => openModal(popupNewCard));

document.querySelectorAll(".popup__close").forEach((closeButton) => {
  closeButton.addEventListener("click", (event) => {
    closeModal(event.target.closest(".popup"));
  });
});

document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
});

function renderCards() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, deleteCard, toggleLike, openImagePopup);
    placesList.appendChild(cardElement);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);

import "./pages/index.css";


