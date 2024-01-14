export default class FormValidator {
  //------------------FORM VALIDATOR CONSTRUCTOR--------------------------->>
  constructor(
    formSelector,
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    }
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  //-----------METHOD THAT SHOWS THE INPUT ERROR-------------->>
  _showInputError = (inputElement) => {
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  //-----------METHOD THAT HIDES THE INPUT ERROR-------------->>
  _hideInputError = (inputElement) => {
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  };

  //-----------METHOD THAT CHECKS EACH ELEMENT FOR VALIDITY-------------->>
  _checkInputValidity = (inputElement) => {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //-----------METHOD TO CHECK IF ALL INPUT ELEMENTS ARE VALID-------------->>
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //-----------METHOD THAT TOGGLES THE SUBMIT BUTTON-------------->>
  _toggleButtonState = (inputList) => {
    if (this._hasInvalidInput(inputList)) {
      this.disableSubmit();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  };

  //-----------METHOD THAT SETS EVENT LISTENERS ON THE INPUT ELEMENTS-------------->>
  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState(inputList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  }

  //------------------------METHOD TO ENABLE VALIDATION----------------------->>
  enableValidation() {
    this._formElement = document.querySelector(this._formSelector);
    this._setEventListeners();
  }

  //-----------------METHOD TO DIABLE THE SUBMIT BUTTON------------------>>
  disableSubmit() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }
}
