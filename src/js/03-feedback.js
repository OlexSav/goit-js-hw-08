import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.querySelector('input[name="email"]');
const messageInput = formEl.querySelector('[name="message"]');

formEl.addEventListener('input', throttle(saveFormData, 500));
formEl.addEventListener('submit', onSubmit);

function saveFormData() {
  const dataForm = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function onSubmit(e) {
  e.preventDefault();
  const dataInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(dataInfo);
  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem('feedback-form-state');
}
window.addEventListener('load', dataStorage);
function dataStorage() {
  const dataIn = localStorage.getItem('feedback-form-state');
  if (dataIn !== null) {
    const formData = JSON.parse(dataIn);
    emailInput.value = formData.email;
    messageInput.value = formData.message ? formData.message : '';
  }
}
