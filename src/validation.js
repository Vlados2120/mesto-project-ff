function showError(input, errorMessage, settings) {
    const errorElement = input.nextElementSibling;
    input.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  }
  
  function hideError(input, settings) {
    const errorElement = input.nextElementSibling;
    input.classList.remove(settings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(settings.errorClass);
  }
  
  function validateInput(input, settings) {
    const pattern = input.dataset.pattern ? new RegExp(input.dataset.pattern) : null;
    const minLength = input.dataset.minlength ? Number(input.dataset.minlength) : 2;
    const maxLength = input.dataset.maxlength ? Number(input.dataset.maxlength) : 40;
    const value = input.value.trim();
  
    if (!value) {
      showError(input, "Вы пропустили это поле.", settings);
      return false;
    }
  
    if (value.length < minLength) {
      showError(input, `Минимальное количество символов: ${minLength}, текущее количество: ${value.length}`, settings);
      return false;
    }
  
    if (value.length > maxLength) {
      showError(input, `Максимальное количество символов: ${maxLength}, текущее количество: ${value.length}`, settings);
      return false;
    }
  
    if (pattern && !pattern.test(value)) {
      showError(input, input.dataset.errorMessage || "Некорректный формат ввода.", settings);
      return false;
    }
  
    hideError(input, settings);
    return true;
  }
  
  function validateUrlInput(input, settings) {
    try {
      new URL(input.value);
      hideError(input, settings);
      return true;
    } catch {
      showError(input, "Введите корректный URL.", settings);
      return false;
    }
  }
  
  function toggleButtonState(form, settings) {
    const submitButton = form.querySelector(settings.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
    const isValid = inputs.every((input) => input.type === "url" ? validateUrlInput(input, settings) : validateInput(input, settings));
    
    submitButton.disabled = !isValid;
    submitButton.classList.toggle(settings.inactiveButtonClass, !isValid);
  }
  
  function setEventListeners(form, settings) {
    const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.type === "url") {
          validateUrlInput(input, settings);
        } else {
          validateInput(input, settings);
        }
        toggleButtonState(form, settings);
      });
    });
  
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      toggleButtonState(form, settings);
    });
  
    toggleButtonState(form, settings);
  }
  
  function enableValidation(settings) {
    const forms = document.querySelectorAll(settings.formSelector);
    forms.forEach((form) => setEventListeners(form, settings));
  }
  
  function clearValidation(form, settings) {
    const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
    const submitButton = form.querySelector(settings.submitButtonSelector);
  
    inputs.forEach((input) => {
      hideError(input, settings);
    });
  
    submitButton.disabled = true;
    submitButton.classList.add(settings.inactiveButtonClass);
  }
  
  export { enableValidation, clearValidation };
  