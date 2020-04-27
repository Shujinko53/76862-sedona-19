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

// Временное отключение валидации
form.setAttribute("novalidate", true);

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Добавление класса, при котором невалидные поля подсвечены
  // Это нужно, чтобы до первого сабмита форма не была с красными полями
  form.classList.add('form__invalid');

  // Включение валидации формы
  form.removeAttribute('novalidate');

  if (!form.checkValidity()) {
    modalFailure.classList.remove('modal__close');

    setTimeout(function() {
      // Повторный вызов сабмита при включенной валидации покажет подсказки
      submitButton.click();
      // Временное отключение валидации для показа невалидных полей
      form.setAttribute('novalidate', true);
    }, 0);
  } else {
    form.removeAttribute('novalidate');
    form.classList.remove('form__invalid');
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
