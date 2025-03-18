import "./pages/index.css";
import { getUserData, getCards, updateUserProfile, updateAvatar, addNewCard,} from "./api.js"; 
import { createCard, deleteCard, toggleLike } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import { enableValidation } from "./validation.js";

const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupAvatar = document.querySelector(".popup_type_avatar");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarButton = document.querySelector(".profile__edit-avatar-button");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");
const formEditProfile = popupEdit.querySelector(".popup__form");
const formNewCard = popupNewCard.querySelector(".popup__form");
const formAvatar = popupAvatar.querySelector(".popup__form");
const cardNameInput = popupNewCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = popupNewCard.querySelector(".popup__input_type_url");
const avatarInput = popupAvatar.querySelector(".popup__input_type_avatar");
const popupImgElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

function setLoadingState(button, isLoading) {
  if (isLoading) {
    button.dataset.defaultText = button.textContent;
    button.textContent = "Сохранение...";
    button.disabled = true;
  } else {
    button.textContent = button.dataset.defaultText;
    button.disabled = false;
  }
}

function openImagePopup(cardData) {
  popupImgElement.src = cardData.link;
  popupImgElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(popupImage);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setLoadingState(submitButton, true);
  updateUserProfile(nameInput.value, jobInput.value)
    .then((userData) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closeModal(popupEdit);
    })
    .finally(() => setLoadingState(submitButton, false));
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setLoadingState(submitButton, true);
  updateAvatar(avatarInput.value)
    .then((userData) => {
      profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
      closeModal(popupAvatar);
    })
    .finally(() => setLoadingState(submitButton, false));
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setLoadingState(submitButton, true);
  addNewCard(cardNameInput.value, cardLinkInput.value)
    .then((cardData) => {
      const cardElement = createCard(cardData, deleteCard, toggleLike, openImagePopup, cardData.owner._id);
      placesList.prepend(cardElement);
      formNewCard.reset();
      closeModal(popupNewCard);
    })
    .finally(() => setLoadingState(submitButton, false));
}

Promise.all([getUserData(), getCards()])
  .then(([userData, cards]) => {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
    placesList.innerHTML = "";
    cards.forEach((cardData) => {
      const cardElement = createCard(cardData, deleteCard, toggleLike, openImagePopup, userData._id);
      placesList.appendChild(cardElement);
    });
  })
  .catch((error) => console.error("Ошибка при загрузке данных:", error));

formEditProfile.addEventListener("submit", handleProfileFormSubmit);
formNewCard.addEventListener("submit", handleNewCardSubmit);
formAvatar.addEventListener("submit", handleAvatarFormSubmit);

editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEdit);
});

addButton.addEventListener("click", () => {
  formNewCard.reset();
  openModal(popupNewCard);
});

avatarButton.addEventListener("click", () => {
  formAvatar.reset();
  openModal(popupAvatar);
});

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

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});