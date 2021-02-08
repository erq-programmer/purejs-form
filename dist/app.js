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


(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/', 'login', function () {
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

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/success', 'success', function () {
  this.title = 'Success Info';
});

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('*', '404', function () {
  this.title = 'Page not found!';
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWRhbmllLy4vYXBwLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3JvdXRlci5qcyIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDOztBQUVqQyw4Q0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCw4Q0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRCw4Q0FBSztBQUNMO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0QkFBNEI7QUFDN0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjs7QUFFN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBTTtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG5yb3V0ZSgnLycsICdsb2dpbicsIGZ1bmN0aW9uICgpIHtcbiAgdGhpcy50aXRsZSA9ICdQdXJlSlMgRm9ybSc7XG4gIHRoaXMuJG9uKCcubG9naW5fX2Zvcm0nLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC52YWx1ZSxcbiAgICB9O1xuXG4gICAgZGF0YSAmJlxuICAgICAgZmV0Y2goJ2h0dHBzOi8vend6dC16YWRhbmllLm5ldGxpZnkuYXBwL2FwaS9sb2dpbicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgZGF0YS5lcnJvciA/IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZGF0YSkgOiBjb25zb2xlLmxvZygnU3VjY2VzczogJywgZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKTtcbiAgICBsb2dpbkZvcm0ucmVzZXQoKTtcbiAgfSk7XG59KTtcblxucm91dGUoJy9zdWNjZXNzJywgJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudGl0bGUgPSAnU3VjY2VzcyBJbmZvJztcbn0pO1xuXG5yb3V0ZSgnKicsICc0MDQnLCBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudGl0bGUgPSAnUGFnZSBub3QgZm91bmQhJztcbn0pO1xuIiwiLy8gU2ltcGxlIEphdmFTY3JpcHQgVGVtcGxhdGluZ1xuLy8gSm9obiBSZXNpZyAtIGh0dHBzOi8vam9obnJlc2lnLmNvbS8gLSBNSVQgTGljZW5zZWRcbmNvbnN0IGNhY2hlID0ge307XG5cbmV4cG9ydCBjb25zdCBlbmdpbmUgPSAoc3RyLCBkYXRhKSA9PiB7XG4gIC8vIEZpZ3VyZSBvdXQgaWYgd2UncmUgZ2V0dGluZyBhIHRlbXBsYXRlLCBvciBpZiB3ZSBuZWVkIHRvXG4gIC8vIGxvYWQgdGhlIHRlbXBsYXRlIC0gYW5kIGJlIHN1cmUgdG8gY2FjaGUgdGhlIHJlc3VsdC5cbiAgY29uc3QgZm4gPSAhL1xcVy8udGVzdChzdHIpID8gY2FjaGVbc3RyXSA9IGNhY2hlW3N0cl0gfHwgZW5naW5lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuaW5uZXJIVE1MKSA6XG4gICAgLy8gR2VuZXJhdGUgYSByZXVzYWJsZSBmdW5jdGlvbiB0aGF0IHdpbGwgc2VydmUgYXMgYSB0ZW1wbGF0ZVxuICAgIC8vIGdlbmVyYXRvciAoYW5kIHdoaWNoIHdpbGwgYmUgY2FjaGVkKS5cbiAgICBuZXcgRnVuY3Rpb24oXCJvYmpcIixcbiAgICAgIFwidmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307XCIgKyAgICAgICAgICAgICBcbiAgICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xuICAgICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICAgIHN0clxuICAgICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgXCIgXCIpXG4gICAgICAgIC5zcGxpdChcIjwlXCIpLmpvaW4oXCJcXHRcIilcbiAgICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgXCIkMVxcclwiKVxuICAgICAgICAucmVwbGFjZSgvXFx0PSguKj8pJT4vZywgXCInLCQxLCdcIilcbiAgICAgICAgLnNwbGl0KFwiXFx0XCIpLmpvaW4oXCInKTtcIilcbiAgICAgICAgLnNwbGl0KFwiJT5cIikuam9pbihcInAucHVzaCgnXCIpXG4gICAgICAgIC5zcGxpdChcIlxcclwiKS5qb2luKFwiXFxcXCdcIilcbiAgICArIFwiJyk7fXJldHVybiBwLmpvaW4oJycpO1wiKTtcbiAgIFxuICAvLyBQcm92aWRlIHNvbWUgYmFzaWMgY3VycnlpbmcgdG8gdGhlIHVzZXJcbiAgcmV0dXJuIGRhdGEgPyBmbiggZGF0YSApIDogZm47XG59O1xuIiwiLy8gSmF2YVNjcmlwdCByb3V0ZXIgaW4gMjAgbGluZXNcbi8vIEpvYWtpbSBDYXJsc3RlaW4gLSBodHRwczovL2pvYWtpbS5iZW5nLnNlL1xuaW1wb3J0IHsgZW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xubGV0IGVsID0gbnVsbDtcbmxldCBldmVudHMgPSBbXTtcbmNvbnN0IHJvdXRlcyA9IHt9O1xuXG5leHBvcnQgY29uc3Qgcm91dGUgPSAocGF0aCwgdGVtcGxhdGVJZCwgY29udHJvbGxlcikgPT4ge1xuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgY29udHJvbGxlci5wcm90b3R5cGUuJG9uID0gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpID0+IGV2ZW50cy5wdXNoKFtzZWxlY3RvciwgZXZ0LCBoYW5kbGVyXSk7XG4gIGNvbnRyb2xsZXIucHJvdG90eXBlLiRyZWZyZXNoID0gKCkgPT4gbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIHJvdXRlc1twYXRoXSA9IHtcbiAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLFxuICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgb25SZWZyZXNoOiBsaXN0ZW5lcnMucHVzaC5iaW5kKGxpc3RlbmVycylcbiAgfTtcbn07XG5cbmNvbnN0IGZvckVhY2hFdmVudCA9IGZuTmFtZSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxzID0gZWwucXVlcnlTZWxlY3RvckFsbChldmVudHNbaV1bMF0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICBlbHNbal1bZm5OYW1lXS5hcHBseShlbHNbal0sIGV2ZW50c1tpXS5zbGljZSgxKSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCByb3V0ZXIgPSAoKSA9PiB7XG4gIC8vIExhenkgbG9hZCB2aWV3IGVsZW1lbnQ6XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAvLyBSZW1vdmUgY3VycmVudCBldmVudCBsaXN0ZW5lcnM6XG4gIGZvckVhY2hFdmVudCgncmVtb3ZlRXZlbnRMaXN0ZW5lcicpO1xuICAvLyBDbGVhciBldmVudHMsIHRvIHByZXBhcmUgZm9yIG5leHQgcmVuZGVyOlxuICBldmVudHMgPSBbXTtcbiAgLy8gQ3VycmVudCByb3V0ZSB1cmwgKGdldHRpbmcgcmlkIG9mICcjJyBpbiBoYXNoIGFzIHdlbGwpOlxuICBjb25zdCB1cmwgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpIHx8ICcvJztcbiAgLy8gR2V0IHJvdXRlIGJ5IHVybCBvciBmYWxsYmFjayBpZiBpdCBkb2VzIG5vdCBleGlzdDpcbiAgY29uc3Qgcm91dGUgPSByb3V0ZXNbdXJsXSB8fCByb3V0ZXNbJyonXTtcbiAgaWYgKHJvdXRlICYmIHJvdXRlLmNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBjdHJsID0gbmV3IHJvdXRlLmNvbnRyb2xsZXIoKTtcbiAgICAvLyBMaXN0ZW4gb24gcm91dGUgcmVmcmVzaGVzOlxuICAgIHJvdXRlLm9uUmVmcmVzaCgoKSA9PiB7XG4gICAgICBmb3JFYWNoRXZlbnQoJ3JlbW92ZUV2ZW50TGlzdGVuZXInKTtcbiAgICAgIC8vIFJlbmRlciByb3V0ZSB0ZW1wbGF0ZSB3aXRoIEpvaG4gUmVzaWcncyB0ZW1wbGF0ZSBlbmdpbmU6XG4gICAgICBlbC5pbm5lckhUTUwgPSBlbmdpbmUocm91dGUudGVtcGxhdGVJZCwgY3RybCk7XG4gICAgICBmb3JFYWNoRXZlbnQoJ2FkZEV2ZW50TGlzdGVuZXInKTtcbiAgICB9KTtcbiAgICAvLyBUcmlnZ2VyIHRoZSBmaXJzdCByZWZyZXNoOlxuICAgIGN0cmwuJHJlZnJlc2goKTtcbiAgfVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCByb3V0ZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByb3V0ZXIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXBwLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==