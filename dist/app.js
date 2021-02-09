/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./router.js");
/* harmony import */ var _assets_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/templates */ "./assets/templates/index.js");



(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/', 'login', function () {
  let script = document.createElement('script');
  script.type = 'text/html';
  script.id = 'login';
  script.innerHTML = _assets_templates__WEBPACK_IMPORTED_MODULE_1__.login;
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

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/success', 'success', function () {
  let script = document.createElement('script');
  script.type = 'text/html';
  script.id = 'success';
  script.innerHTML = _assets_templates__WEBPACK_IMPORTED_MODULE_1__.success;
  document.head.appendChild(script);

  this.title = 'Login success!';
});

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('*', '404', function () {
  let script = document.createElement('script');
  script.type = 'text/html';
  script.id = '404';
  script.innerHTML = _assets_templates__WEBPACK_IMPORTED_MODULE_1__.notFound;
  document.head.appendChild(script);

  this.title = 'Page not found!';
});


/***/ }),

/***/ "./assets/templates/404.js":
/*!*********************************!*\
  !*** ./assets/templates/404.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notFound": () => /* binding */ notFound
/* harmony export */ });
const notFound = `
  <main class="not-found">
  <h1 class="not-found__heading"><%= title %></h1>
  <img
    class="not-found__image"
    src="./assets/images/404.svg"
    alt="Success info background image"
  />
  <a href="/" class="not-found__button">Back to login page</a>
</main>
`;


/***/ }),

/***/ "./assets/templates/index.js":
/*!***********************************!*\
  !*** ./assets/templates/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notFound": () => /* reexport safe */ _404__WEBPACK_IMPORTED_MODULE_0__.notFound,
/* harmony export */   "login": () => /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_1__.login,
/* harmony export */   "success": () => /* reexport safe */ _success__WEBPACK_IMPORTED_MODULE_2__.success
/* harmony export */ });
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404 */ "./assets/templates/404.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./assets/templates/login.js");
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success */ "./assets/templates/success.js");







/***/ }),

/***/ "./assets/templates/login.js":
/*!***********************************!*\
  !*** ./assets/templates/login.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => /* binding */ login
/* harmony export */ });
const login = `
<div class="container">
  <section class="hero">
    <h1 class="hero__heading"><%= title %></h1>
    <img class="hero__image" src="./assets/images/hero.svg" alt="Hero background image" />
    <a href="https://github.com/erq-programmer/purejs-form" class="hero__button"
      >Get started</a
    >
  </section>

  <main class="login">
    <img class="login__image" src="./assets/images/login.svg" alt="Login background image" />
    <form class="login__form" id="form">
      <label for="username" class="form__label">
        <input
          class="form__input"
          id="username"
          name="username"
          type="text"
          autocorrect="off"
          autocomplete="username"
          placeholder="&nbsp;"
        />
        <span class="label__text">Username</span>
        <span class="label__error">There are no errors!</span>
      </label>

      <label class="form__label" for="password">
        <input
          class="form__input"
          id="password"
          name="password"
          type="password"
          autocorrect="off"
          autocomplete="current-password"
          placeholder="&nbsp;"
        />
        <span class="label__text">Password</span>
        <button class="toggle-password" type="button" aria-label="Show password as plain text">Show</button>
        <span class="label__error">There are no errors!</span>
      </label>
      
      <button class="form__submit" type="submit">Login</button>
    </form>
  </main>
</div>
`;


/***/ }),

/***/ "./assets/templates/success.js":
/*!*************************************!*\
  !*** ./assets/templates/success.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "success": () => /* binding */ success
/* harmony export */ });
const success = `<main class="success">
<h1 class="success__heading"><%= title %></h1>
<img
  class="success__image"
  src="./assets/images/success.svg"
  alt="Success info background image"
/>
<a href="/" class="success__button">Back to login page</a>
</main>`;


/***/ }),

/***/ "./engine.js":
/*!*******************!*\
  !*** ./engine.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "engine": () => /* binding */ engine
/* harmony export */ });
// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
const cache = {};

const engine = (str, data) => {
  // Figure out if we're getting a template, or if we need to
  // load the template - and be sure to cache the result.
  const fn = !/\W/.test(str) ? cache[str] = cache[str] || engine(document.getElementById(str).innerHTML) :
    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
      "var p=[],print=function(){p.push.apply(p,arguments);};" +             
      // Introduce the data as local variables using with(){}
      "with(obj){p.push('" +
      // Convert the template into pure JavaScript
      str
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'")
    + "');}return p.join('');");
   
  // Provide some basic currying to the user
  return data ? fn( data ) : fn;
};


/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => /* binding */ route
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./engine.js");
// JavaScript router in 20 lines
// Joakim Carlstein - https://joakim.beng.se/

let el = null;
let events = [];
const routes = {};

const route = (path, templateId, controller) => {
  const listeners = [];
  controller.prototype.$on = (selector, evt, handler) => events.push([selector, evt, handler]);
  controller.prototype.$refresh = () => listeners.forEach(fn => fn());
  routes[path] = {
    templateId: templateId,
    controller: controller,
    onRefresh: listeners.push.bind(listeners)
  };
};

const forEachEvent = fnName => {
  for (let i = 0; i < events.length; i++) {
    const els = el.querySelectorAll(events[i][0]);
    for (let j = 0; j < els.length; j++) {
      els[j][fnName].apply(els[j], events[i].slice(1));
    }
  }
};

const router = () => {
  // Lazy load view element:
  el = el || document.getElementById('app');
  // Remove current event listeners:
  forEachEvent('removeEventListener');
  // Clear events, to prepare for next render:
  events = [];
  // Current route url (getting rid of '#' in hash as well):
  const url = location.hash.slice(1) || '/';
  // Get route by url or fallback if it does not exist:
  const route = routes[url] || routes['*'];
  if (route && route.controller) {
    const ctrl = new route.controller();
    // Listen on route refreshes:
    route.onRefresh(() => {
      forEachEvent('removeEventListener');
      // Render route template with John Resig's template engine:
      el.innerHTML = (0,_engine__WEBPACK_IMPORTED_MODULE_0__.engine)(route.templateId, ctrl);
      forEachEvent('addEventListener');
    });
    // Trigger the first refresh:
    ctrl.$refresh();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWRhbmllLy4vYXBwLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9hc3NldHMvdGVtcGxhdGVzLzQwNC5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vYXNzZXRzL3RlbXBsYXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vYXNzZXRzL3RlbXBsYXRlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vYXNzZXRzL3RlbXBsYXRlcy9zdWNjZXNzLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3JvdXRlci5qcyIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUM2Qjs7QUFFOUQsOENBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQUs7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELDhDQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFPO0FBQzVCOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCw4Q0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1REFBUTtBQUM3Qjs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RJTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpQztBQUNEO0FBQ0k7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ0o3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDRCQUE0QjtBQUM3RDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLFdBQVcsa0JBQWtCOztBQUU3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNrQztBQUNsQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFNO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm91dGUgfSBmcm9tICcuL3JvdXRlcic7XHJcbmltcG9ydCB7IG5vdEZvdW5kLCBsb2dpbiwgc3VjY2VzcyB9IGZyb20gJy4vYXNzZXRzL3RlbXBsYXRlcyc7XHJcblxyXG5yb3V0ZSgnLycsICdsb2dpbicsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9odG1sJztcclxuICBzY3JpcHQuaWQgPSAnbG9naW4nO1xyXG4gIHNjcmlwdC5pbm5lckhUTUwgPSBsb2dpbjtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gIHRoaXMudGl0bGUgPSAnUHVyZUpTIEZvcm0nO1xyXG5cclxuICBsZXQgaXNTdWJtaXQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3Qgc2V0U3VibWl0ID0gKCkgPT4ge1xyXG4gICAgaXNTdWJtaXQgPSAhaXNTdWJtaXQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XHJcbiAgICBjb25zdCB0b2dnbGVQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtcGFzc3dvcmQnKTtcclxuICAgIGlmIChwYXNzd29yZElucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICB0b2dnbGVQYXNzd29yZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlJztcclxuICAgICAgdG9nZ2xlUGFzc3dvcmRCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0hpZGUgcGFzc3dvcmQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgIHRvZ2dsZVBhc3N3b3JkQnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cnO1xyXG4gICAgICB0b2dnbGVQYXNzd29yZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnU2hvdyBwYXNzd29yZCBhcyBwbGFpbiB0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tJbnB1dCA9IChpbnB1dFN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dFN0cmluZyk7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVycm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBsYWJlbENvbnRyb2wucXVlcnlTZWxlY3RvcignLmxhYmVsX19lcnJvcicpO1xyXG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSAnZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWVycm9yJztcclxuICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnbGFiZWxfX2Vycm9yIGxhYmVsX19lcnJvci0tdmlzaWJsZSc7XHJcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdWNjZXNzKGlucHV0KSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBsYWJlbENvbnRyb2wucXVlcnlTZWxlY3RvcignLmxhYmVsX19lcnJvcicpO1xyXG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSAnZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXN1Y2Nlc3MnO1xyXG4gICAgICBzcGFuLmNsYXNzTmFtZSA9ICdsYWJlbF9fZXJyb3InO1xyXG4gICAgICBzcGFuLmlubmVyVGV4dCA9ICdUaGVyZSBhcmUgbm8gZXJyb3JzISc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHNldEVycm9yKGlucHV0LCBgJHtpbnB1dFN0cmluZ30gY2Fubm90IGJlIGJsYW5rYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdWNjZXNzKGlucHV0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB0aGlzLiRvbignLnRvZ2dsZS1wYXNzd29yZCcsICdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgfSk7XHJcblxyXG4gIHRoaXMuJG9uKCcjcGFzc3dvcmQnLCAnY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgY2hlY2tJbnB1dCgncGFzc3dvcmQnKTtcclxuICB9KTtcclxuXHJcbiAgdGhpcy4kb24oJyN1c2VybmFtZScsICdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBjaGVja0lucHV0KCd1c2VybmFtZScpO1xyXG4gIH0pO1xyXG5cclxuICB0aGlzLiRvbignLmxvZ2luX19mb3JtJywgJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19mb3JtJyk7XHJcbiAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lSW5wdXQudmFsdWUudHJpbSgpLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRJbnB1dC52YWx1ZS50cmltKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChkYXRhLnVzZXJuYW1lID09PSAnJyB8fCBkYXRhLnBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBjaGVja0lucHV0KCdwYXNzd29yZCcpO1xyXG4gICAgICBjaGVja0lucHV0KCd1c2VybmFtZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2goJ2h0dHBzOi8vend6dC16YWRhbmllLm5ldGxpZnkuYXBwL2FwaS9sb2dpbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29udHJvbCA9IHBhc3N3b3JkSW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGxhYmVsQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcubGFiZWxfX2Vycm9yJyk7XHJcblxyXG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdsYWJlbF9fZXJyb3IgbGFiZWxfX2Vycm9yLS12aXNpYmxlJztcclxuICAgICAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1lcnJvcic7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1fX2lucHV0JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvc3VjY2Vzcyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxucm91dGUoJy9zdWNjZXNzJywgJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gIHNjcmlwdC50eXBlID0gJ3RleHQvaHRtbCc7XHJcbiAgc2NyaXB0LmlkID0gJ3N1Y2Nlc3MnO1xyXG4gIHNjcmlwdC5pbm5lckhUTUwgPSBzdWNjZXNzO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgdGhpcy50aXRsZSA9ICdMb2dpbiBzdWNjZXNzISc7XHJcbn0pO1xyXG5cclxucm91dGUoJyonLCAnNDA0JywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2h0bWwnO1xyXG4gIHNjcmlwdC5pZCA9ICc0MDQnO1xyXG4gIHNjcmlwdC5pbm5lckhUTUwgPSBub3RGb3VuZDtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gIHRoaXMudGl0bGUgPSAnUGFnZSBub3QgZm91bmQhJztcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBub3RGb3VuZCA9IGBcclxuICA8bWFpbiBjbGFzcz1cIm5vdC1mb3VuZFwiPlxyXG4gIDxoMSBjbGFzcz1cIm5vdC1mb3VuZF9faGVhZGluZ1wiPjwlPSB0aXRsZSAlPjwvaDE+XHJcbiAgPGltZ1xyXG4gICAgY2xhc3M9XCJub3QtZm91bmRfX2ltYWdlXCJcclxuICAgIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy80MDQuc3ZnXCJcclxuICAgIGFsdD1cIlN1Y2Nlc3MgaW5mbyBiYWNrZ3JvdW5kIGltYWdlXCJcclxuICAvPlxyXG4gIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJub3QtZm91bmRfX2J1dHRvblwiPkJhY2sgdG8gbG9naW4gcGFnZTwvYT5cclxuPC9tYWluPlxyXG5gO1xyXG4iLCJpbXBvcnQgeyBub3RGb3VuZCB9IGZyb20gJy4vNDA0JztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuL2xvZ2luJztcclxuaW1wb3J0IHsgc3VjY2VzcyB9IGZyb20gJy4vc3VjY2Vzcyc7XHJcblxyXG5leHBvcnQgeyBub3RGb3VuZCwgbG9naW4sIHN1Y2Nlc3MgfTtcclxuIiwiZXhwb3J0IGNvbnN0IGxvZ2luID0gYFxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJoZXJvX19oZWFkaW5nXCI+PCU9IHRpdGxlICU+PC9oMT5cclxuICAgIDxpbWcgY2xhc3M9XCJoZXJvX19pbWFnZVwiIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9oZXJvLnN2Z1wiIGFsdD1cIkhlcm8gYmFja2dyb3VuZCBpbWFnZVwiIC8+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VycS1wcm9ncmFtbWVyL3B1cmVqcy1mb3JtXCIgY2xhc3M9XCJoZXJvX19idXR0b25cIlxyXG4gICAgICA+R2V0IHN0YXJ0ZWQ8L2FcclxuICAgID5cclxuICA8L3NlY3Rpb24+XHJcblxyXG4gIDxtYWluIGNsYXNzPVwibG9naW5cIj5cclxuICAgIDxpbWcgY2xhc3M9XCJsb2dpbl9faW1hZ2VcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbG9naW4uc3ZnXCIgYWx0PVwiTG9naW4gYmFja2dyb3VuZCBpbWFnZVwiIC8+XHJcbiAgICA8Zm9ybSBjbGFzcz1cImxvZ2luX19mb3JtXCIgaWQ9XCJmb3JtXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzPVwiZm9ybV9faW5wdXRcIlxyXG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCImbmJzcDtcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbF9fdGV4dFwiPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxfX2Vycm9yXCI+VGhlcmUgYXJlIG5vIGVycm9ycyE8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiIGZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzcz1cImZvcm1fX2lucHV0XCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXHJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJm5ic3A7XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxfX3RleHRcIj5QYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLXBhc3N3b3JkXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJTaG93IHBhc3N3b3JkIGFzIHBsYWluIHRleHRcIj5TaG93PC9idXR0b24+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbF9fZXJyb3JcIj5UaGVyZSBhcmUgbm8gZXJyb3JzITwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJmb3JtX19zdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICA8L21haW4+XHJcbjwvZGl2PlxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3Qgc3VjY2VzcyA9IGA8bWFpbiBjbGFzcz1cInN1Y2Nlc3NcIj5cclxuPGgxIGNsYXNzPVwic3VjY2Vzc19faGVhZGluZ1wiPjwlPSB0aXRsZSAlPjwvaDE+XHJcbjxpbWdcclxuICBjbGFzcz1cInN1Y2Nlc3NfX2ltYWdlXCJcclxuICBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc3VjY2Vzcy5zdmdcIlxyXG4gIGFsdD1cIlN1Y2Nlc3MgaW5mbyBiYWNrZ3JvdW5kIGltYWdlXCJcclxuLz5cclxuPGEgaHJlZj1cIi9cIiBjbGFzcz1cInN1Y2Nlc3NfX2J1dHRvblwiPkJhY2sgdG8gbG9naW4gcGFnZTwvYT5cclxuPC9tYWluPmA7XHJcbiIsIi8vIFNpbXBsZSBKYXZhU2NyaXB0IFRlbXBsYXRpbmdcclxuLy8gSm9obiBSZXNpZyAtIGh0dHBzOi8vam9obnJlc2lnLmNvbS8gLSBNSVQgTGljZW5zZWRcclxuY29uc3QgY2FjaGUgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmdpbmUgPSAoc3RyLCBkYXRhKSA9PiB7XHJcbiAgLy8gRmlndXJlIG91dCBpZiB3ZSdyZSBnZXR0aW5nIGEgdGVtcGxhdGUsIG9yIGlmIHdlIG5lZWQgdG9cclxuICAvLyBsb2FkIHRoZSB0ZW1wbGF0ZSAtIGFuZCBiZSBzdXJlIHRvIGNhY2hlIHRoZSByZXN1bHQuXHJcbiAgY29uc3QgZm4gPSAhL1xcVy8udGVzdChzdHIpID8gY2FjaGVbc3RyXSA9IGNhY2hlW3N0cl0gfHwgZW5naW5lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuaW5uZXJIVE1MKSA6XHJcbiAgICAvLyBHZW5lcmF0ZSBhIHJldXNhYmxlIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHRlbXBsYXRlXHJcbiAgICAvLyBnZW5lcmF0b3IgKGFuZCB3aGljaCB3aWxsIGJlIGNhY2hlZCkuXHJcbiAgICBuZXcgRnVuY3Rpb24oXCJvYmpcIixcclxuICAgICAgXCJ2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTtcIiArICAgICAgICAgICAgIFxyXG4gICAgICAvLyBJbnRyb2R1Y2UgdGhlIGRhdGEgYXMgbG9jYWwgdmFyaWFibGVzIHVzaW5nIHdpdGgoKXt9XHJcbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xyXG4gICAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxyXG4gICAgICBzdHJcclxuICAgICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgXCIgXCIpXHJcbiAgICAgICAgLnNwbGl0KFwiPCVcIikuam9pbihcIlxcdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oKF58JT4pW15cXHRdKiknL2csIFwiJDFcXHJcIilcclxuICAgICAgICAucmVwbGFjZSgvXFx0PSguKj8pJT4vZywgXCInLCQxLCdcIilcclxuICAgICAgICAuc3BsaXQoXCJcXHRcIikuam9pbihcIicpO1wiKVxyXG4gICAgICAgIC5zcGxpdChcIiU+XCIpLmpvaW4oXCJwLnB1c2goJ1wiKVxyXG4gICAgICAgIC5zcGxpdChcIlxcclwiKS5qb2luKFwiXFxcXCdcIilcclxuICAgICsgXCInKTt9cmV0dXJuIHAuam9pbignJyk7XCIpO1xyXG4gICBcclxuICAvLyBQcm92aWRlIHNvbWUgYmFzaWMgY3VycnlpbmcgdG8gdGhlIHVzZXJcclxuICByZXR1cm4gZGF0YSA/IGZuKCBkYXRhICkgOiBmbjtcclxufTtcclxuIiwiLy8gSmF2YVNjcmlwdCByb3V0ZXIgaW4gMjAgbGluZXNcclxuLy8gSm9ha2ltIENhcmxzdGVpbiAtIGh0dHBzOi8vam9ha2ltLmJlbmcuc2UvXHJcbmltcG9ydCB7IGVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcclxubGV0IGVsID0gbnVsbDtcclxubGV0IGV2ZW50cyA9IFtdO1xyXG5jb25zdCByb3V0ZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZSA9IChwYXRoLCB0ZW1wbGF0ZUlkLCBjb250cm9sbGVyKSA9PiB7XHJcbiAgY29uc3QgbGlzdGVuZXJzID0gW107XHJcbiAgY29udHJvbGxlci5wcm90b3R5cGUuJG9uID0gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpID0+IGV2ZW50cy5wdXNoKFtzZWxlY3RvciwgZXZ0LCBoYW5kbGVyXSk7XHJcbiAgY29udHJvbGxlci5wcm90b3R5cGUuJHJlZnJlc2ggPSAoKSA9PiBsaXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcclxuICByb3V0ZXNbcGF0aF0gPSB7XHJcbiAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLFxyXG4gICAgY29udHJvbGxlcjogY29udHJvbGxlcixcclxuICAgIG9uUmVmcmVzaDogbGlzdGVuZXJzLnB1c2guYmluZChsaXN0ZW5lcnMpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGZvckVhY2hFdmVudCA9IGZuTmFtZSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGVscyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoZXZlbnRzW2ldWzBdKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGVsc1tqXVtmbk5hbWVdLmFwcGx5KGVsc1tqXSwgZXZlbnRzW2ldLnNsaWNlKDEpKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByb3V0ZXIgPSAoKSA9PiB7XHJcbiAgLy8gTGF6eSBsb2FkIHZpZXcgZWxlbWVudDpcclxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuICAvLyBSZW1vdmUgY3VycmVudCBldmVudCBsaXN0ZW5lcnM6XHJcbiAgZm9yRWFjaEV2ZW50KCdyZW1vdmVFdmVudExpc3RlbmVyJyk7XHJcbiAgLy8gQ2xlYXIgZXZlbnRzLCB0byBwcmVwYXJlIGZvciBuZXh0IHJlbmRlcjpcclxuICBldmVudHMgPSBbXTtcclxuICAvLyBDdXJyZW50IHJvdXRlIHVybCAoZ2V0dGluZyByaWQgb2YgJyMnIGluIGhhc2ggYXMgd2VsbCk6XHJcbiAgY29uc3QgdXJsID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKSB8fCAnLyc7XHJcbiAgLy8gR2V0IHJvdXRlIGJ5IHVybCBvciBmYWxsYmFjayBpZiBpdCBkb2VzIG5vdCBleGlzdDpcclxuICBjb25zdCByb3V0ZSA9IHJvdXRlc1t1cmxdIHx8IHJvdXRlc1snKiddO1xyXG4gIGlmIChyb3V0ZSAmJiByb3V0ZS5jb250cm9sbGVyKSB7XHJcbiAgICBjb25zdCBjdHJsID0gbmV3IHJvdXRlLmNvbnRyb2xsZXIoKTtcclxuICAgIC8vIExpc3RlbiBvbiByb3V0ZSByZWZyZXNoZXM6XHJcbiAgICByb3V0ZS5vblJlZnJlc2goKCkgPT4ge1xyXG4gICAgICBmb3JFYWNoRXZlbnQoJ3JlbW92ZUV2ZW50TGlzdGVuZXInKTtcclxuICAgICAgLy8gUmVuZGVyIHJvdXRlIHRlbXBsYXRlIHdpdGggSm9obiBSZXNpZydzIHRlbXBsYXRlIGVuZ2luZTpcclxuICAgICAgZWwuaW5uZXJIVE1MID0gZW5naW5lKHJvdXRlLnRlbXBsYXRlSWQsIGN0cmwpO1xyXG4gICAgICBmb3JFYWNoRXZlbnQoJ2FkZEV2ZW50TGlzdGVuZXInKTtcclxuICAgIH0pO1xyXG4gICAgLy8gVHJpZ2dlciB0aGUgZmlyc3QgcmVmcmVzaDpcclxuICAgIGN0cmwuJHJlZnJlc2goKTtcclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHJvdXRlcik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcm91dGVyKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2FwcC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=