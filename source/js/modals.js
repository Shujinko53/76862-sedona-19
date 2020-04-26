let modal = document.querySelector('.modal');
let modalSuccess = document.querySelector('.modal__success');
let modalFailure = document.querySelector('.modal__failure');
let modalClosed = modal.querySelector('.modal__close');
let modalCloseButton = modal.querySelector('.modal__button');
let modalFailCloseButtom = modalFailure.querySelector('.modal__failure-button');

let form = document.querySelector('.form');
let submitButton = document.querySelector('.form__button');

let closeHandler = function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove('modal__open');
  modalFailure.classList.remove('modal__open');
  modalSuccess.classList.add('modal__close');
  modalFailure.classList.add('modal__close');
};

modalCloseButton.addEventListener('click', closeHandler);
modalFailCloseButtom.addEventListener('click', closeHandler);

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (!form.checkValidity()) {
    modalFailure.classList.remove('modal__close');
    modalFailure.classList.add('modal__open');
  } else {
    modalSuccess.classList.remove('modal__close');
    // form.submit();
    form.reset();
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && !modal.classList.contains('.modal__close')) {
      closeHandler(evt);
    }
});
