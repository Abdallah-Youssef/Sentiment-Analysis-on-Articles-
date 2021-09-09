require('./styles/style.scss');
require('./styles/base.scss');
require('./styles/footer.scss');
require('./styles/form.scss');
require('./styles/header.scss');


import {handleSubmit} from './js/handleSubmit.js'

window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);
})

