let modal = document.querySelector('.modal');
let modalFailure = document.querySelector('.modal__failure');
let modalClosed = document.querySelector('.modal__close');
let modalOpened = document.querySelector('.modal__open');
let modalCloseButton = document.querySelector('.modal__button');
let modalFailCloseButtom = document.querySelector('.modal__failure-button');
let formSubmitButton = document.querySelector('.form__button');

let closeHandler = function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal__open');
  modalFailure.classList.remove('modal__open');
  modal.classList.add('modal__close');
  modalFailure.classList.add('modal__close');
};

modalCloseButton.addEventListener('click', closeHandler);
modalFailCloseButtom.addEventListener('click', closeHandler);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal__open') || modalFailure.classList.contains('modal__open')) {
      closeHandler(evt);
    }
  }
});

formSubmitButton.addEventListener('click', function() {
  modal.classList.add('.modal__open');
});
