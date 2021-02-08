import { route } from './router';

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
          data.error ? console.log('Error: ', data) : console.log('Success: ', data);
        })
        .catch((err) => {
          console.error('There has been a problem with your fetch operation:', err);
        });

    const loginForm = document.querySelector('.login__form');
    loginForm.reset();
  });
});

route('/success', 'success', function () {
  this.title = 'Success Info';
});

route('*', '404', function () {
  this.title = 'Page not found!';
});
