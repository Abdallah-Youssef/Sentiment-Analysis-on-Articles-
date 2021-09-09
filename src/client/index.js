require('./styles/style.scss');
import {handleSubmit} from './js/handleSubmit.js'

window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);
})

