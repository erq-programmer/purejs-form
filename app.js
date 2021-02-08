import { route } from './router';

route('/', 'login', function () {
  this.title = 'PureJS Form';
});

route('/success', 'success', function () {
  this.title = 'Success Info';
});

route('*', '404', function () {
  this.title = 'Page not found!';
});
