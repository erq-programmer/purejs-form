import { route } from './router';
import { notFound, login, success } from './assets/templates';

route('/', 'login', function () {
  let script = document.createElement('script');
  script.type = 'text/html';
  script.id = 'login';
  script.innerHTML = login;
  document.head.appendChild(script);

  this.title = 'PureJS Form';

  let isSubmit = false;

  const setSubmit = () => {
    isSubmit = !isSubmit;
  };

  const togglePassword = () => {
    const passwordInput = document.querySelector('#password');
    const togglePasswordButton = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordButton.textContent = 'Hide';
      togglePasswordButton.setAttribute('aria-label', 'Hide password');
    } else {
      passwordInput.type = 'password';
      togglePasswordButton.textContent = 'Show';
      togglePasswordButton.setAttribute('aria-label', 'Show password as plain text');
    }
  };

  const checkInput = (inputString) => {
    const input = document.getElementById(inputString);
    const inputValue = input.value.trim();

    function setError(input, message) {
      const labelControl = input.parentElement;
      const span = labelControl.querySelector('.label__error');
      input.className = 'form__input form__input--error';
      span.className = 'label__error label__error--visible';
      span.innerText = message;
    }

    function setSuccess(input) {
      const labelControl = input.parentElement;
      const span = labelControl.querySelector('.label__error');
      input.className = 'form__input form__input--success';
      span.className = 'label__error';
      span.innerText = 'There are no errors!';
    }

    if (inputValue === '') {
      setError(input, `${inputString} cannot be blank`);
    } else {
      setSuccess(input);
    }
  };

  this.$on('.toggle-password', 'click', () => {
    togglePassword();
  });

  this.$on('#password', 'change', () => {
    checkInput('password');
  });

  this.$on('#username', 'change', () => {
    checkInput('username');
  });

  this.$on('.login__form', 'submit', (e) => {
    e.preventDefault();

    const loginForm = document.querySelector('.login__form');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    const data = {
      username: usernameInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    if (data.username === '' || data.password === '') {
      checkInput('password');
      checkInput('username');
    } else {
      fetch('https://zwzt-zadanie.netlify.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            const labelControl = passwordInput.parentElement;
            const span = labelControl.querySelector('.label__error');

            span.className = 'label__error label__error--visible';
            span.innerText = data.message;
            passwordInput.className = 'form__input form__input--error';
            usernameInput.className = 'form__input';
          } else {
            window.location.href = '#/success';
          }
        })
        .catch((err) => {
          console.error('There has been a problem with your fetch operation:', err);
        });
      loginForm.reset();
    }
  });
});

route('/success', 'success', function () {
  let script = document.createElement('script');
  script.type = 'text/html';
  script.id = 'success';
  script.innerHTML = success;
  document.head.appendChild(script);

  this.title = 'Login success!';
});

route('*', '404', function () {
  let script = document.createElement('script');
  script.type = 'text/html';
  script.id = '404';
  script.innerHTML = notFound;
  document.head.appendChild(script);

  this.title = 'Page not found!';
});
