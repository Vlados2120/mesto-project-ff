export function openModal(popup) {
    popup.classList.add("popup_is-opened");
  
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeModal(popup);
      }
    }
  
    popup.handleEscClose = handleEscClose;
    document.addEventListener("keydown", handleEscClose);
  }
  
  export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
  
    if (popup.handleEscClose) {
      document.removeEventListener("keydown", popup.handleEscClose);
      delete popup.handleEscClose;
    }
  }
  