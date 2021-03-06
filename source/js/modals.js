let modal = document.querySelector('.modal');
let modalSuccess = document.querySelector('.modal--success');
let modalFailure = document.querySelector('.modal--failure');
let modalClosed = modal.querySelector('.modal--close');
let modalCloseButton = modal.querySelector('.modal__button');
let modalFailCloseButtom = modalFailure.querySelector('.modal__button--failure');

let form = document.querySelector('.form');
let submitButton = document.querySelector('.form__button');

let closeHandler = function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove('modal__open');
  modalFailure.classList.remove('modal__open');
  modalSuccess.classList.add('modal--close');
  modalFailure.classList.add('modal--close');
};

modalCloseButton.addEventListener('click', closeHandler);
modalFailCloseButtom.addEventListener('click', closeHandler);

// Временное отключение валидации
form.setAttribute('novalidate', true);

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Добавление класса, при котором невалидные поля подсвечены
  // Это нужно, чтобы до первого сабмита форма не была с красными полями
  form.classList.add('form__invalid');

  // Включение валидации формы
  form.removeAttribute('novalidate');

  if (!form.checkValidity()) {
    modalFailure.classList.remove('modal--close');

    setTimeout(function() {
      // Повторный вызов сабмита при включенной валидации покажет подсказки
      submitButton.click();
      // Временное отключение валидации для показа невалидных полей
      form.setAttribute('novalidate', true);
    }, 0);
  } else {
    form.removeAttribute('novalidate');
    form.classList.remove('form__invalid');
    modalSuccess.classList.remove('modal--close');
    // form.submit();
    form.reset();
    form.setAttribute('novalidate', true);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && !modal.classList.contains('.modal--close')) {
      closeHandler(evt);
    }
});
