!function(){"use strict";class e{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this.handleImageClick=s}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}_setEventListeners(){this._imageElement.addEventListener("click",(()=>{this.handleImageClick(this._name,this._link)})),this._likeButton.addEventListener("click",(()=>{this._likeCard()})),this._trashButton.addEventListener("click",(()=>{this._deleteCard()}))}_deleteCard(){this._element.remove(),this._element=null}_likeCard(){this._likeButton.classList.toggle("card__like-button_active")}generateCard(){return this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".card__image"),this._likeButton=this._element.querySelector(".card__like-button"),this._trashButton=this._element.querySelector(".card__trash-button"),this._setEventListeners(),this._imageElement.setAttribute("src",this._link),this._imageElement.setAttribute("alt",this._name),this._element.querySelector(".card__title").textContent=this._name,this._element}}class t{constructor(e,t){let{inputSelector:s,submitButtonSelector:i,inactiveButtonClass:n,inputErrorClass:r,errorClass:o}=t;this._formElement=e,this._inputSelector=s,this._submitButtonSelector=i,this._inactiveButtonClass=n,this._inputErrorClass=r,this._errorClass=o,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}_showInputError=e=>{e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)};_hideInputError=e=>{e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""};_checkInputValidity=e=>{this._errorElement=this._formElement.querySelector(`#${e.id}-error`),e.validity.valid?this._hideInputError(e):this._showInputError(e)};_hasInvalidInput=e=>e.some((e=>!e.validity.valid));_toggleButtonState=e=>{this._hasInvalidInput(e)?this.disableSubmit():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))};_setEventListeners(){this._toggleButtonState(this._inputList),this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState(this._inputList)}))}))}checkValidity(){this._inputList.forEach((e=>{this._checkInputValidity(e),this._toggleButtonState(this._inputList)}))}enableValidation(){this._setEventListeners()}disableSubmit(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}resetForm(){this._formElement.reset()}}class s{constructor(e){this._modalElement=document.querySelector(e)}open(){this._modalElement.classList.add("modal_opened"),document.addEventListener("keyup",this._handleEscClose)}close=()=>{this._modalElement.classList.remove("modal_opened"),document.removeEventListener("keyup",this._handleEscClose)};_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._closeButton=this._modalElement.querySelector(".modal__close"),this._closeButton.addEventListener("click",this.close),this._modalElement.addEventListener("mousedown",(e=>{e.target===e.currentTarget&&this.close()}))}}class i extends s{constructor(e,t,s){let{formSelector:i}=s;super(e),this._form=this._modalElement.querySelector(i),this._formSubmit=t,this._inputList=Array.from(this._form.querySelectorAll(".modal__input"))}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault();const t=this._getInputValues();this._formSubmit(t)})),super.setEventListeners()}}const n={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_active",formSelector:".modal__form"},r=document.querySelector(".profile"),o=r.querySelector(".profile__edit-button"),l=r.querySelector(".profile__add-button"),a=document.querySelector("#modal-profile-edit"),c=Array.from(a.querySelectorAll(".modal__input")),m=Array.from(document.querySelectorAll(n.formSelector)),_={},u=new class{constructor(e){let{nameSelector:t,descriptionSelector:s}=e;this._nameElement=document.querySelector(t),this._descriptionElement=document.querySelector(s)}getUserInfo(){const e={};return e.name=this._nameElement.textContent,e.description=this._descriptionElement.textContent,e}setUserInfo(e){this._nameElement.textContent=e.name,this._descriptionElement.textContent=e.description}}({nameSelector:".profile__name",descriptionSelector:".profile__description"});function d(t){return new e(t,"#card",S).generateCard()}m.forEach((e=>{const s=new t(e,n),i=e.getAttribute("name");s.enableValidation(),_[i]=s}));const h=new class{constructor(e,t){let{items:s,renderer:i}=e;this._items=s,this._renderer=i,this._container=document.querySelector(t)}rendererItems=()=>{this._items.reverse().forEach((e=>{this.addItem(this._renderer(e))}))};addItem=e=>{this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Las Vegas",link:"https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2023-06/7b05e031-2d80-4d0a-bbd5-9c28a7ef8d8e.jpeg?h=2ce89a5c&itok=ow9jLMty"},{name:"Mertyl Beach",link:"https://www.montereybaysuites.com/wp-content/uploads/2023/01/myrtle-beach-shoreline-1184735168.jpg"}],renderer:d},".cards__list");h.rendererItems();const p=new i("#modal-profile-edit",(function(e){u.setUserInfo(e),p.close()}),n),E=new i("#modal-add-card",(function(e){const t=d(e);h.addItem(t),_.addCardForm.resetForm(),_.addCardForm.disableSubmit(),E.close()}),n),v=new class extends s{constructor(e){super(e),this._previewImage=this._modalElement.querySelector(".modal__image"),this._previewImageTitle=this._modalElement.querySelector(".modal__image-title")}open(e){let{name:t,link:s}=e;this._previewImage.setAttribute("src",s),this._previewImage.setAttribute("alt",t),this._previewImageTitle.textContent=t,super.open()}}("#image-preview-modal");function S(e,t){v.open({name:e,link:t})}o.addEventListener("click",(()=>{!function(){const e=u.getUserInfo();c[0].value=e.name,c[1].value=e.description}(),_.profileForm.checkValidity(),p.open()})),l.addEventListener("click",(()=>E.open())),p.setEventListeners(),E.setEventListeners(),v.setEventListeners()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnRHLEtBQzVDNkYsRUFBaUIsR0FBR1IsTUFBUWlCLEVBQWdCQyxXQUM5QyxDQUlFNEIsR0FDQXBDLEVBQWVxQyxZQUFZekUsZ0JBQzNCaUUsRUFBaUIxRCxNQUFNLElBSXpCeUIsRUFBVWhGLGlCQUFpQixTQUFTLElBQU1rSCxFQUFjM0QsU0FHeEQwRCxFQUFpQnBELG9CQUdqQnFELEVBQWNyRCxvQkFHZHdELEVBQWF4RCxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxXaXRoSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0FSRCBDT05TVFJVQ1RPUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+PlxuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spIHtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuaGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tTUVUSE9EIFRPIEdFVCBUSEUgQ0FSRCBFTEVNRU5UIE9VVCBPRiBUSEUgVEVNUExBVEUtLS0tLS0tLS0tLS0tLT4+XG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tTUVUSE9EIFRPIEFERCBFVkVOVCBMSVNURU5FUlMgQVNTT0NJQVRFRCBXSVRIIFRIRSBDQVJELS0tLS0tLS0tLS0+PlxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8tLS0tLS0tLS0tLUlNQUdFIEVMRU1FTlQgQ0xJQ0sgRVZFTlQgTElTVEVORVItLS0tLS0tLS0tLT4+XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUltYWdlQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG5cbiAgICAvLy0tLS0tLS0tLS0tTElLRSBCVVRUT04gQ0xJQ0sgRVZFTlQgTElTVEVORVItLS0tLS0tLS0tLS0+PlxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2xpa2VDYXJkKCk7XG4gICAgfSk7XG5cbiAgICAvLy0tLS0tLS0tLS0tVFJBU0ggQlVUVE9OIENMSUNLIEVWRU5UIExJU1RFTkVSLS0tLS0tLS0tLS0+PlxuICAgIHRoaXMuX3RyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9kZWxldGVDYXJkKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tTUVUSE9EIFRPIEhBTkRMRSBDQVJEIFRSQVNIIEJVVFRPTiBDTElDSy0tLS0tLS0tLS0tPj5cbiAgX2RlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS1NRVRIT0QgVE8gSEFORExFIENBUkQgTElLRSBCVVRUT04gQ0xJQ0stLS0tLS0tLS0tLT4+XG4gIF9saWtlQ2FyZCgpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tTUVUSE9EIFRPIFBPUFVMQVRFIFRIRSBDQVJEIEVMRU1FTlQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+PlxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XG4gICAgdGhpcy5fdHJhc2hCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdHJhc2gtYnV0dG9uXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuX2xpbmspO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgdGhpcy5fbmFtZSk7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS1GT1JNIFZBTElEQVRPUiBDT05TVFJVQ1RPUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4+XG4gIGNvbnN0cnVjdG9yKFxuICAgIGZvcm1FbGVtZW50LFxuICAgIHtcbiAgICAgIGlucHV0U2VsZWN0b3IsXG4gICAgICBzdWJtaXRCdXR0b25TZWxlY3RvcixcbiAgICAgIGluYWN0aXZlQnV0dG9uQ2xhc3MsXG4gICAgICBpbnB1dEVycm9yQ2xhc3MsXG4gICAgICBlcnJvckNsYXNzLFxuICAgIH1cbiAgKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBpbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gZXJyb3JDbGFzcztcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tTUVUSE9EIFRIQVQgU0hPV1MgVEhFIElOUFVUIEVSUk9SLS0tLS0tLS0tLS0tLS0+PlxuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLU1FVEhPRCBUSEFUIEhJREVTIFRIRSBJTlBVVCBFUlJPUi0tLS0tLS0tLS0tLS0tPj5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tTUVUSE9EIFRIQVQgQ0hFQ0tTIEVBQ0ggRUxFTUVOVCBGT1IgVkFMSURJVFktLS0tLS0tLS0tLS0tLT4+XG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS1NRVRIT0QgVE8gQ0hFQ0sgSUYgQUxMIElOUFVUIEVMRU1FTlRTIEFSRSBWQUxJRC0tLS0tLS0tLS0tLS0tPj5cbiAgX2hhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLU1FVEhPRCBUSEFUIFRPR0dMRVMgVEhFIFNVQk1JVCBCVVRUT04tLS0tLS0tLS0tLS0tLT4+XG4gIF90b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QpID0+IHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tTUVUSE9EIFRIQVQgU0VUUyBFVkVOVCBMSVNURU5FUlMgT04gVEhFIElOUFVUIEVMRU1FTlRTLS0tLS0tLS0tLS0tLS0+PlxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0KTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS1NRVRIT0QgVE8gUkVDSEVDSyBWQUxJREFUSU9OLS0tLS0tLS0tLS0tLS0tLS0tPj5cbiAgY2hlY2tWYWxpZGl0eSgpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1FVEhPRCBUTyBFTkFCTEUgVkFMSURBVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLU1FVEhPRCBUTyBESUFCTEUgVEhFIFNVQk1JVCBCVVRUT04tLS0tLS0tLS0tLS0tLS0tLS0+PlxuICBkaXNhYmxlU3VibWl0KCkge1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLU1FVEhPRCBUTyBSRVNFVCBUSEUgRk9STS0tLS0tLS0tLS0tLS0tLS0tLT4+XG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5yZXNldCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tTU9EQUwgQ09OU1RSVUNUT1ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+PlxuICBjb25zdHJ1Y3Rvcihtb2RhbFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbFNlbGVjdG9yKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS1NRVRIT0QgVEhBVCBJVFRFUkFURVMgT1ZFUiBUSEUgSVRFTVMgQVJSQVkgQU5EIFJFTkRFUlMgVEhFTS0tLS0tLS0tLS0+PlxuICBvcGVuKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICAvLy0tLS0tLS1NRVRIT0QgVEhBVCBUQUtFUyBBIERPTSBFTEVNRU5UIEFORCBBRERTIElUIFRPIFRIRSBDT05UQUlORVItLS0tLS0tLS0tPj5cbiAgY2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfTtcblxuICAvLy0tLS0tLS1NRVRIT0QgVEhBVCBDTE9TRVMgTU9EQUwgV0lUSCBQUkVTUyBPRiBFU0NBUEUtLS0tLS0tLS0tPj5cbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vLS0tLS1NRVRIT0QgVEhBVCBBRERTIEEgQ0xJQ0sgRVZFTlQgTElTVEVORVIgVE8gVEhFIENMT1NFIElDT04tLS0tLS0+PlxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZSk7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsV2l0aEZvcm0gZXh0ZW5kcyBNb2RhbCB7XG4gIC8vLS0tLS0tLS0tLS0tLS0tTU9EQUxXSVRIRk9STSBDT05TVFJVQ1RPUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4+XG4gIGNvbnN0cnVjdG9yKG1vZGFsU2VsZWN0b3IsIGZvcm1TdWJtaXQsIHsgZm9ybVNlbGVjdG9yIH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybVNlbGVjdG9yKTtcbiAgICB0aGlzLl9mb3JtU3VibWl0ID0gZm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIikpO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS1NRVRIT0QgVEhBVCBDT0xMRUNUUyBUSEUgSU5QVVQgVkFMVUVTLS0tLS0tLS0tLS0tLS0+PlxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xuICB9XG4gIC8vLS0tLS0tLS1BRERTIEZVTkNUSU9OQUxJVFkgVE8gVEhFIFNFVEVWRU5UTElTVEVORVJTIE1FVEhPRC0tLS0tLS0tLS0+PlxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLl9nZXRJbnB1dFZhbHVlcygpO1xuICAgICAgdGhpcy5fZm9ybVN1Ym1pdCh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1PQkpFQ1QgV0lUSCBJTklUSUFMIENBUkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0+PlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFzIFZlZ2FzXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy52aXNpdHRoZXVzYS5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9zdHlsZXMvMTZfOV8xMjgweDcyMC9wdWJsaWMvMjAyMy0wNi83YjA1ZTAzMS0yZDgwLTRkMGEtYmJkNS05YzI4YTdlZjhkOGUuanBlZz9oPTJjZTg5YTVjJml0b2s9b3c5akxNdHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWVydHlsIEJlYWNoXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5tb250ZXJleWJheXN1aXRlcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDEvbXlydGxlLWJlYWNoLXNob3JlbGluZS0xMTg0NzM1MTY4LmpwZ1wiLFxuICB9LFxuXTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLU9CSkVDVCBXSVRIIENPTkZJRyBTRVRUSU5HUy0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX2FjdGl2ZVwiLFxuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS1DUkVBVElORyBCVVRUT05TIFBST0ZJTEUgRUxFTUVOVFMtLS0tLS0tLS0tLS0tLS0tLS0tLT4+XG5jb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5cbi8vLS0tLS0tLS0tLS1ERUZJTklORyBBTiBBUlJBWSBPRiBBTEwgUFJPRklMRSBFRElUIElOUFVUUy0tLS0tLS0tLS0tLS0tLT4+XG5jb25zdCBtb2RhbFByb2ZpbGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1wcm9maWxlLWVkaXRcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZUlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gIG1vZGFsUHJvZmlsZUVkaXQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIilcbik7XG5cbi8vLS0tLS0tLS0tLS1ERUZJTklORyBBTiBBUlJBWSBPRiBBTEwgRk9STSBFTEVNRU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbmV4cG9ydCBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmZvcm1TZWxlY3Rvcilcbik7XG5cbi8vLS0tLS0tLS0tLS1ERUZJTklORyBBTiBFTVBUWSBPQkpFQ1QgRk9SIEFMTCBUSEUgRk9STVMtLS0tLS0tLS0tLS0tLS0tLT4+XG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRvcnMgPSB7fTtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgTW9kYWxXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgTW9kYWxXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgY29uZmlnLFxuICBlZGl0QnV0dG9uLFxuICBhZGRCdXR0b24sXG4gIHByb2ZpbGVJbnB1dExpc3QsXG4gIGZvcm1MaXN0LFxuICBmb3JtVmFsaWRhdG9ycyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5cbi8vLS0tLS0tLS0tLS1DUkVBVEUgQSBORVcgQ0xBU1MgSU5TVEFOQ0UgRk9SIFRIRSBVU0VSIElORk8tLS0tLS0tLS0tLS0+PlxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgZGVzY3JpcHRpb25TZWxlY3RvcjogXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIixcbn0pO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tRk9STSBWQUxJREFUT1IgQ1JFQVRPUiBBTkQgRU5BQkxJTkctLS0tLS0tLS0tLS0tLS0tLS0+PlxuZm9ybUxpc3QuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtLCBjb25maWcpO1xuICBjb25zdCBmb3JtTmFtZSA9IGZvcm0uZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgdmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbiAgZm9ybVZhbGlkYXRvcnNbZm9ybU5hbWVdID0gdmFsaWRhdG9yO1xufSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1SRU5ERVIgQ0FSRCBGVU5DVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbmZ1bmN0aW9uIHJlbmRlckNhcmQoY2FyZERhdGEpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkXCIsIGhhbmRsZUltYWdlQ2xpY2spO1xuICByZXR1cm4gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuLy8tLS0tLS0tLS0tLUNSRUFURSBBIE5FVyBDTEFTUyBJTlNUQU5DRSBGT1IgVEhFIENBUkRTIENPTlRBSU5FUi0tLS0tLS0tLS0tLT4+XG5jb25zdCBjYXJkc0NvbnRhaW5lciA9IG5ldyBTZWN0aW9uKFxuICB7IGl0ZW1zOiBpbml0aWFsQ2FyZHMsIHJlbmRlcmVyOiByZW5kZXJDYXJkIH0sXG4gIFwiLmNhcmRzX19saXN0XCJcbik7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLUNBTEwgUkVOREVSRVIgTUVUSE9EIE9OIENBUkRTQ09OVEFJTkVSLS0tLS0tLS0tLS0tLS0tLS0tLT4+XG5jYXJkc0NvbnRhaW5lci5yZW5kZXJlckl0ZW1zKCk7XG5cbi8vLS0tLS0tLS0tLS1DUkVBVEUgQSBNT0RBTFdJVEhGT1JNIElOU1RBTkNFIEZPUiBUSEUgUFJPRklMRSBFRElULS0tLS0tLS0tLS0tPj5cbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBuZXcgTW9kYWxXaXRoRm9ybShcbiAgXCIjbW9kYWwtcHJvZmlsZS1lZGl0XCIsXG4gIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0LFxuICBjb25maWdcbik7XG5cbi8vLS0tLS0tLS0tLS1DUkVBVEUgQSBNT0RBTFdJVEhGT1JNIElOU1RBTkNFIEZPUiBUSEUgQUREIElNQUdFLS0tLS0tLS0tLS0tPj5cbmNvbnN0IGFkZEltYWdlTW9kYWwgPSBuZXcgTW9kYWxXaXRoRm9ybShcbiAgXCIjbW9kYWwtYWRkLWNhcmRcIixcbiAgaGFuZGxlQWRkSW1hZ2VGb3JtU3VibWl0LFxuICBjb25maWdcbik7XG5cbi8vLS0tLS0tLS0tLS1DUkVBVEUgQSBNT0RBTFdJVEhJTUFHRSBJTlNUQU5DRSBGT1IgVEhFIFBSRVZJRVcgSU1BR0UtLS0tLS0tLS0tLS0+PlxuY29uc3QgcHJldmlld01vZGFsID0gbmV3IE1vZGFsV2l0aEltYWdlKFwiI2ltYWdlLXByZXZpZXctbW9kYWxcIik7XG5cbi8vLS0tLS0tLS0tLS1DUkVBVEUgQSBGVU5DVElPTiBUSEFUIEhBTkRMRVMgUFJPRklMRSBFRElUIFNVQk1JVC0tLS0tLS0tLS0tLT4+XG5mdW5jdGlvbiBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCh2YWx1ZXMpIHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8odmFsdWVzKTtcbiAgcHJvZmlsZUVkaXRNb2RhbC5jbG9zZSgpO1xufVxuXG4vLy0tLS0tLS0tLS0tLUNSRUFURSBBIEZVTkNUSU9OIFRIQVQgSEFORExFUyBBREQgSU1BR0UgU1VCTUlULS0tLS0tLS0tLT4+XG5mdW5jdGlvbiBoYW5kbGVBZGRJbWFnZUZvcm1TdWJtaXQodmFsdWVzKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSByZW5kZXJDYXJkKHZhbHVlcyk7XG4gIGNhcmRzQ29udGFpbmVyLmFkZEl0ZW0obmV3Q2FyZCk7XG4gIGZvcm1WYWxpZGF0b3JzLmFkZENhcmRGb3JtLnJlc2V0Rm9ybSgpO1xuICBmb3JtVmFsaWRhdG9ycy5hZGRDYXJkRm9ybS5kaXNhYmxlU3VibWl0KCk7XG4gIGFkZEltYWdlTW9kYWwuY2xvc2UoKTtcbn1cblxuLy8tLS0tLS0tLUlNQUdFIENMSUNLIEhBTkRMRVIgRlVOQ1RJT04gVE8gUE9QVUxBVEUgUFJFVklFVyBNT0RBTC0tLS0tLS0tLS0tLS0+PlxuZnVuY3Rpb24gaGFuZGxlSW1hZ2VDbGljayhuYW1lLCBsaW5rKSB7XG4gIHByZXZpZXdNb2RhbC5vcGVuKHsgbmFtZSwgbGluayB9KTtcbn1cblxuLy8tLS0tLS0tLS1QUk9GSUxFIEVESVQgTU9EQUwgRklMTCBJTlBVVFMgRlVOQ1RJT05TLS0tLS0tLS0tLS0tLS0tLS0+PlxuZnVuY3Rpb24gZmlsbFByb2ZpbGVJbnB1dHMoKSB7XG4gIGNvbnN0IHVzZXJDdXJyZW50SW5mbyA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIHByb2ZpbGVJbnB1dExpc3RbMF0udmFsdWUgPSB1c2VyQ3VycmVudEluZm8ubmFtZTtcbiAgcHJvZmlsZUlucHV0TGlzdFsxXS52YWx1ZSA9IHVzZXJDdXJyZW50SW5mby5kZXNjcmlwdGlvbjtcbn1cblxuLy8tLS0tLS0tLS0tLUFERCBBIENMSUNLIEVWRU5UIExJU1RFTkVSIFRPIFRIRSBFRElUIEJVVFRPTi0tLS0tLS0tLS0tLT4+XG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZpbGxQcm9maWxlSW5wdXRzKCk7XG4gIGZvcm1WYWxpZGF0b3JzLnByb2ZpbGVGb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgcHJvZmlsZUVkaXRNb2RhbC5vcGVuKCk7XG59KTtcblxuLy8tLS0tLS0tLS0tLUFERCBBIENMSUNLIEVWRU5UIExJU1RFTkVSIFRPIFRIRSBBREQgQlVUVE9OLS0tLS0tLS0tLS0tPj5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkSW1hZ2VNb2RhbC5vcGVuKCkpO1xuXG4vLy0tLS0tLS0tLS0tQUREIEVWRU5UIExJU1RFTkVSUyBUTyBUSEUgRURJVCBQUk9GSUxFIE1PREFMLS0tLS0tLS0tLS0+PlxucHJvZmlsZUVkaXRNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy0tLS0tLS0tLS0tQUREIEVWRU5UIExJU1RFTkVSUyBUTyBUSEUgQUREIElNQUdFIE1PREFMLS0tLS0tLS0tLS0+PlxuYWRkSW1hZ2VNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy0tLS0tLS0tLS0tQUREIEVWRU5UIExJU1RFTkVSUyBUTyBUSEUgUFJFVklFVyBJTUFHRSBNT0RBTC0tLS0tLS0tLS0tPj5cbnByZXZpZXdNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLVVTRVJJTkZPIENPTlNUUlVDVE9SLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbiAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIGRlc2NyaXB0aW9uU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVzY3JpcHRpb25TZWxlY3Rvcik7XG4gIH1cblxuICAvLy0tLS0tLS0tUkVUVVJOUyBBTiBPQkpFQ1QgQ09OVEFJTklORyBJTkZPUk1BVElPTiBBQk9VVCBUSEUgVVNFUi0tLS0tLS0tLS0+PlxuICBnZXRVc2VySW5mbygpIHtcbiAgICBjb25zdCB1c2VyQ3VycmVudEluZm8gPSB7fTtcbiAgICB1c2VyQ3VycmVudEluZm8ubmFtZSA9IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIHVzZXJDdXJyZW50SW5mby5kZXNjcmlwdGlvbiA9IHRoaXMuX2Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICByZXR1cm4gdXNlckN1cnJlbnRJbmZvO1xuICB9XG5cbiAgLy8tLS0tLS0tTUVUSE9EIFRIQVQgU0VUUyBUSEUgVVNFUiBJTkZPIElOIFRIRSBQUk9GSUxFLS0tLS0tLS0tLT4+XG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS1TRUNUSU9OIENPTlNUUlVDVE9SLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY2xhc3NTZWxlY3Rvcikge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzU2VsZWN0b3IpO1xuICB9XG5cbiAgLy8tLS0tLS0tLU1FVEhPRCBUSEFUIElUVEVSQVRFUyBPVkVSIFRIRSBJVEVNUyBBUlJBWSBBTkQgUkVOREVSUyBUSEVNLS0tLS0tLS0tLT4+XG4gIHJlbmRlcmVySXRlbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5faXRlbXMucmV2ZXJzZSgpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLl9yZW5kZXJlcihpdGVtKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8tLS0tLS0tTUVUSE9EIFRIQVQgVEFLRVMgQSBET00gRUxFTUVOVCBBTkQgQUREUyBJVCBUTyBUSEUgQ09OVEFJTkVSLS0tLS0tLS0tLT4+XG4gIGFkZEl0ZW0gPSAoZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9O1xufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsV2l0aEltYWdlIGV4dGVuZHMgTW9kYWwge1xuICAvLy0tLS0tLS0tLS0tLS0tLU1PREFMV0lUSElNQUdFIENPTlNUUlVDVE9SLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPj5cbiAgY29uc3RydWN0b3IobW9kYWxTZWxlY3Rvcikge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuICAgIHRoaXMuX3ByZXZpZXdJbWFnZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcbiAgICB0aGlzLl9wcmV2aWV3SW1hZ2VUaXRsZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubW9kYWxfX2ltYWdlLXRpdGxlXCJcbiAgICApO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS1BRERTIEZVTkNUSU9OQUxJVFkgVE8gVEhFIE9QRU4gTUVUSE9ELS0tLS0tLS0tLS0tLS0+PlxuICBvcGVuKHsgbmFtZSwgbGluayB9KSB7XG4gICAgdGhpcy5fcHJldmlld0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsaW5rKTtcbiAgICB0aGlzLl9wcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIG5hbWUpO1xuICAgIHRoaXMuX3ByZXZpZXdJbWFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlSW1hZ2VDbGljayIsInRoaXMiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2dldFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9pbWFnZUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpa2VCdXR0b24iLCJfbGlrZUNhcmQiLCJfdHJhc2hCdXR0b24iLCJfZGVsZXRlQ2FyZCIsIl9lbGVtZW50IiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2VuZXJhdGVDYXJkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwiZm9ybUVsZW1lbnQiLCJfcmVmIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYnV0dG9uRWxlbWVudCIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImFkZCIsIl9lcnJvckVsZW1lbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJpZCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGFzSW52YWxpZElucHV0IiwiaW5wdXRMaXN0Iiwic29tZSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImRpc2FibGVTdWJtaXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmb3JFYWNoIiwiY2hlY2tWYWxpZGl0eSIsImVuYWJsZVZhbGlkYXRpb24iLCJyZXNldEZvcm0iLCJyZXNldCIsIk1vZGFsIiwibW9kYWxTZWxlY3RvciIsIl9tb2RhbEVsZW1lbnQiLCJvcGVuIiwiX2hhbmRsZUVzY0Nsb3NlIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJfY2xvc2VCdXR0b24iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiTW9kYWxXaXRoRm9ybSIsImZvcm1TdWJtaXQiLCJmb3JtU2VsZWN0b3IiLCJzdXBlciIsIl9mb3JtIiwiX2Zvcm1TdWJtaXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlcyIsImNvbmZpZyIsInByb2ZpbGUiLCJlZGl0QnV0dG9uIiwiYWRkQnV0dG9uIiwibW9kYWxQcm9maWxlRWRpdCIsInByb2ZpbGVJbnB1dExpc3QiLCJmb3JtTGlzdCIsImZvcm1WYWxpZGF0b3JzIiwidXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJkZXNjcmlwdGlvblNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2Rlc2NyaXB0aW9uRWxlbWVudCIsImdldFVzZXJJbmZvIiwidXNlckN1cnJlbnRJbmZvIiwiZGVzY3JpcHRpb24iLCJzZXRVc2VySW5mbyIsInJlbmRlckNhcmQiLCJjYXJkRGF0YSIsImZvcm0iLCJ2YWxpZGF0b3IiLCJmb3JtTmFtZSIsImdldEF0dHJpYnV0ZSIsImNhcmRzQ29udGFpbmVyIiwiY2xhc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVyZXJJdGVtcyIsInJldmVyc2UiLCJpdGVtIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwicHJvZmlsZUVkaXRNb2RhbCIsImFkZEltYWdlTW9kYWwiLCJuZXdDYXJkIiwiYWRkQ2FyZEZvcm0iLCJwcmV2aWV3TW9kYWwiLCJfcHJldmlld0ltYWdlIiwiX3ByZXZpZXdJbWFnZVRpdGxlIiwiZmlsbFByb2ZpbGVJbnB1dHMiLCJwcm9maWxlRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=