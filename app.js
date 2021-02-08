import { route } from './router';
import { notFound } from './assets/templates/404';

let scrp = document.createElement('script');
scrp.type = 'text/html';
scrp.id = '404';
scrp.innerHTML = notFound;
document.head.appendChild(scrp);

route('/', 'login', function () {
  this.title = 'PureJS Form';
  this.$on('.login__form', 'submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    const data = {
      username: username.value,
      password: password.value,
    };

    data &&
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
            const formError = document.querySelector('.form__error');
            formError.textContent = data.message;
            formError.style.opacity = '1';
            formError.style.visibility = 'visible';
            setTimeout(function () {
              formError.textContent = 'There are no errors';
              formError.style.opacity = '0';
              formError.style.visibility = 'hidden';
            }, 5000);
          } else {
            window.location.href = '#/success';
          }
        })
        .catch((err) => {
          console.error('There has been a problem with your fetch operation:', err);
        });

    const loginForm = document.querySelector('.login__form');
    loginForm.reset();
  });
});

route('/success', 'success', function () {
  this.title = 'Login success!';
});

route('*', '404', function () {
  this.title = 'Page not found!';
});
