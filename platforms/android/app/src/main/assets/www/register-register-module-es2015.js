(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <div class=\"page-wrap minH100\">\n    <div class=\"container\">\n\n      <!-- <div class=\"fullWidth\">\n        <div class=\"top-wrapper\">\n          <div class=\"top-content\">\n            <img class=\"nav-left\" src=\"assets/nav.png\" alt=\"\">\n            <img class=\"message-right\" src=\"assets/profile-edit.png\" alt=\"\">\n          </div>\n        </div>\n      </div> -->\n      \n      <div class=\"body-part\">\n        <div class=\"body-cont\">\n          <button class=\"btn-back\" (click)=\"back()\"><i class=\"zmdi zmdi-arrow-left\"></i></button>\n          <div class=\"logoTop\">\n            <img class=\"img30\" src=\"assets/logo1.png\" alt=\"\">\n          </div>\n          <!-- <div class=\"btnGroup\">\n            <button class=\"btn active\">Login</button>\n            <button class=\"btn\">Sign up</button>\n          </div> -->\n          <div class=\"loginContainer\">\n            <h1>Create <br>an account</h1>\n            <form class=\"formControl\" action=\"\">\n            <div class=\"userInput_box\">\n                <label>name</label>\n                <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon.png\" alt=\"\"></div>\n              </div>\n              <div class=\"userInput_box\">\n                <label>Phone</label>\n                <input type=\"text\" placeholder=\"Phone\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon1.png\" alt=\"\"></div>\n              </div>\n              <div class=\"userInput_box\">\n                <label>email</label>\n                <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon1.png\" alt=\"\"></div>\n              </div>\n              <div class=\"userInput_box\">\n                <label>Password</label>\n                <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"pass\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon2.png\" alt=\"\"></div>\n              </div>\n               <div class=\"userInput_box\">\n                <label>confirm password</label>\n                <input type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon2.png\" alt=\"\"></div>\n              </div>\n              <div class=\"userInput_box\">\n                <label>Address</label>\n                <input type=\"text\" placeholder=\"Address\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon1.png\" alt=\"\"></div>\n              </div>\n             </form>\n            <div class=\"btn-row\">\n              <button class=\"btn signIn\" (click)=\"register()\"> Sign up</button>\n            </div>\n           \n            <p class=\"textletter\">Already have an account? <a href=\"/login\">Login</a></p>\n          </div>\n          \n        </div>\n      </div>\n\n    </div>\n  </div>\n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n/*.page-wrap:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    background-image: url(../../assets/bg2.png);\n    background-repeat: no-repeat;\n    background-size: 100%;\n    width: 100%;\n    height: 110px;\n    z-index:-1;\n}*/\n.page-wrap {\n  max-width: 100%;\n  margin: auto;\n  height: auto;\n  position: relative;\n  z-index: 1;\n  background-image: url('login.jpg');\n  background-position: center;\n  background-size: cover;\n}\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.fullWidth {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.minH100 {\n  min-height: 100vh;\n}\n.top-wrapper {\n  /* padding: 10px 50px; */\n  width: 100%;\n  position: relative;\n}\n.top-content {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.body-part {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.body-cont {\n  padding: 2em 2em 1em 2em;\n  position: relative;\n}\n.body-cont .btn-back {\n  color: #fff;\n  background: transparent;\n  border: none;\n  font-size: 26px;\n}\n.body-cont .btn-back:focus {\n  outline: none;\n}\n.logoTop {\n  text-align: center;\n  margin-bottom: 1em;\n}\n.text-white {\n  color: #ffffff;\n}\n.loginContainer {\n  /* display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center; */\n  /* text-align: center;\n  padding: 2.5em 2em;\n  background: #fff;\n  box-shadow: 0 0 14px #00000024; */\n}\n.loginContainer h1 {\n  font-size: 2em;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 1.3em;\n  line-height: 36px;\n  color: #fff;\n  text-transform: capitalize;\n}\n.imgHalf {\n  width: 50%;\n}\n.img30 {\n  width: 100%;\n  max-width: 160px;\n}\n.imgResponsive {\n  width: 80%;\n}\n.para {\n  color: #000000;\n  text-align: center;\n  margin-top: 1em;\n}\n.btn-row {\n  /* margin: 1.5em 0; */\n  margin-bottom: 1em;\n}\n.btn {\n  border: 1px solid #3333331c;\n  background: transparent;\n  font-size: 1.05em;\n  padding: 0.8em 2.6em;\n  border-radius: 30px;\n}\n.btn.signIn {\n  background: #ff0000;\n  color: #ffffff;\n  width: -webkit-fill-available;\n  outline: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  border-radius: 0;\n  margin-top: 15px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: 1px;\n}\n.btn.signIn:hover {\n  background-color: #000;\n}\n.forgPass {\n  text-align: right;\n  display: block;\n  color: #5d5d5d;\n  text-decoration: none;\n  /* width: 100%; */\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-size: 15px;\n  font-weight: 600;\n  float: right;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.forgPass:hover {\n  color: #F00;\n}\n.social-row {\n  list-style: none;\n  padding: 0;\n  /* margin: 0; */\n  display: flex;\n  justify-content: center;\n}\n.social-row .btn {\n  font-size: 12px;\n  padding: 6px 14px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n}\n.social-row .btn:hover {\n  opacity: 0.7;\n}\n.social-row .btn img {\n  max-width: 18px;\n  width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.social-row .btn.btn-google {\n  background-color: #c63b26;\n  color: #fff;\n  font-weight: 600;\n}\n.social-row .btn.btn-facebook {\n  background-color: #3a63be;\n  color: #fff;\n  font-weight: 600;\n}\n.social-row li:not(:last-child) {\n  margin-right: 6px;\n}\np.textletter {\n  text-align: center;\n  display: block;\n  font-size: 17px;\n  font-weight: 400;\n  color: #fff;\n}\np.textletter button {\n  color: #ff0000;\n  font-size: 17px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-weight: 900;\n  padding: 0;\n  cursor: pointer;\n}\np.textletter button:hover {\n  color: #000;\n}\n.formControl {\n  width: 100%;\n  display: unset;\n  text-align: left;\n}\n.userInput_box {\n  position: relative;\n  margin-bottom: 1em;\n}\n.userInput_box .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.userInput_box .icon img {\n  max-width: 20px;\n  width: 100%;\n  opacity: 0.7;\n}\n.formControl input {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 0.9em;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  padding: 0.1em 3em 0.1em 1em;\n  border-radius: 2.6px;\n  height: 46px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n}\n.formControl label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  text-transform: capitalize;\n  display: block;\n  margin-bottom: 7px;\n  color: #fff;\n}\ninput[type=text]:focus-visible {\n  border-color: #ff5733;\n  border-width: 2px;\n  box-shadow: none;\n}\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #000;\n  text-transform: capitalize;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000;\n  opacity: 1;\n  text-transform: capitalize;\n}\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #000;\n  text-transform: capitalize;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000;\n  opacity: 1;\n  text-transform: capitalize;\n}\n.logoTop {\n  text-align: center;\n  margin-bottom: 1.8em;\n}\n.img30 {\n  width: 100%;\n  max-width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFFUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBOzs7Ozs7Ozs7OztFQUFBO0FBWUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdBO0VBRUksYUFBQTtFQUVBLGVBQUE7QUFBSjtBQUVBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUFDSjtBQUNBO0VBQVUsaUJBQUE7QUFHVjtBQUZBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFNSjtBQUhBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFNSjtBQUpBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUFPSjtBQUxBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBQVFKO0FBTkE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVNKO0FBUEE7RUFDSSxhQUFBO0FBVUo7QUFQQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFVSjtBQVJBO0VBQWEsY0FBQTtBQVliO0FBWEE7RUFDSTs7O3dCQUFBO0VBSUE7OzttQ0FBQTtBQWlCSjtBQVpBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQWVKO0FBYkE7RUFDSSxVQUFBO0FBZ0JKO0FBZEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFpQko7QUFmQTtFQUNJLFVBQUE7QUFrQko7QUFoQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBbUJKO0FBWkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBZUo7QUFiQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFnQko7QUFkQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFpQko7QUFmQTtFQUFtQixzQkFBQTtBQW1CbkI7QUFsQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBcUJKO0FBbkJBO0VBQWlCLFdBQUE7QUF1QmpCO0FBdEJBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXlCSjtBQXZCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUEwQko7QUF4QkE7RUFBd0IsWUFBQTtBQTRCeEI7QUEzQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQThCSjtBQTVCQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBK0JKO0FBN0JBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFnQ0o7QUE5QkE7RUFDSSxpQkFBQTtBQWlDSjtBQTlCQTtFQUFjLGtCQUFBO0VBQW1CLGNBQUE7RUFBZSxlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLFdBQUE7QUFzQ2pGO0FBckNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXdDSjtBQXRDQTtFQUEyQixXQUFBO0FBMEMzQjtBQXRDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF5Q0o7QUF2Q0E7RUFBZ0Isa0JBQUE7RUFBbUIsa0JBQUE7QUE0Q25DO0FBM0NBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQThDSjtBQTVDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQStDSjtBQTdDQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUVBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQStDSjtBQTdDQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWdESjtBQTdDQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWdERjtBQTlDQTtFQUE4Qix3QkFBQTtFQUM1QixXQUFBO0VBQ0EsMEJBQUE7QUFrREY7QUFoREE7RUFBcUIsZ0JBQUE7RUFDbEIsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQW9ESDtBQWxEQTtFQUF5QixXQUFBO0VBQ3RCLFdBQUE7RUFDQSwwQkFBQTtBQXNESDtBQXBEQTtFQUFvQixnQkFBQTtFQUNqQixXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBd0RIO0FBdERBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQXlESjtBQXZEQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQTBESiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4vKi5wYWdlLXdyYXA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JnMi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHotaW5kZXg6LTE7XHJcbn0qL1xyXG4ucGFnZS13cmFwIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbG9naW4uanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZnVsbFdpZHRoIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5taW5IMTAwIHttaW4taGVpZ2h0OiAxMDB2aDt9XHJcbi50b3Atd3JhcHBlciB7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDUwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udG9wLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uYm9keS1wYXJ0IHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib2R5LWNvbnQge1xyXG4gICAgcGFkZGluZzogMmVtIDJlbSAxZW0gMmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ib2R5LWNvbnQgLmJ0bi1iYWNre1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5ib2R5LWNvbnQgLmJ0bi1iYWNrOmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4ubG9nb1RvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOjFlbTtcclxufVxyXG4udGV4dC13aGl0ZSB7Y29sb3I6ICNmZmZmZmZ9XHJcbi5sb2dpbkNvbnRhaW5lciB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNWVtIDJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTRweCAjMDAwMDAwMjQ7ICovXHJcbn1cclxuLmxvZ2luQ29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtOyAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4zZW07XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmltZ0hhbGYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uaW1nMzAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG59XHJcbi5pbWdSZXNwb25zaXZlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLnBhcmEge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYnRuLXJvdyB7XHJcbiAgICAvKiBtYXJnaW46IDEuNWVtIDA7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzMWM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xyXG4gICAgcGFkZGluZzogMC44ZW0gMi42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5idG4uc2lnbkluIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uYnRuLnNpZ25Jbjpob3ZlcnsgYmFja2dyb3VuZC1jb2xvcjojMDAwO31cclxuLmZvcmdQYXNzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uZm9yZ1Bhc3M6aG92ZXJ7IGNvbG9yOiNGMDA7fVxyXG4uc29jaWFsLXJvdyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIG1hcmdpbjogMDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc29jaWFsLXJvdyAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuLnNvY2lhbC1yb3cgLmJ0bjpob3Zlcnsgb3BhY2l0eTowLjc7fVxyXG4uc29jaWFsLXJvdyAuYnRuIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnNvY2lhbC1yb3cgLmJ0bi5idG4tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjNiMjY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNvY2lhbC1yb3cgLmJ0bi5idG4tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhNjNiZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc29jaWFsLXJvdyBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG5wLnRleHRsZXR0ZXJ7IHRleHQtYWxpZ246Y2VudGVyOyBkaXNwbGF5OmJsb2NrOyBmb250LXNpemU6MTdweDsgZm9udC13ZWlnaHQ6NDAwOyBjb2xvcjojZmZmO31cclxucC50ZXh0bGV0dGVyIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnAudGV4dGxldHRlciBidXR0b246aG92ZXJ7IGNvbG9yOiMwMDA7fVxyXG5cclxuXHJcblxyXG4uZm9ybUNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnVzZXJJbnB1dF9ib3h7IHBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW4tYm90dG9tOiAxZW07fVxyXG4udXNlcklucHV0X2JveCAuaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG4udXNlcklucHV0X2JveCAuaWNvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZvcm1Db250cm9sIGlucHV0IHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDNlbSAwLjFlbSAxZW07XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCBoc2woMGRlZyAwJSAwJSAvIDc4JSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMGRlZyAwJSAwJSAvIDAlKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm1Db250cm9sIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMtdmlzaWJsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiNmZjU3MzM7XHJcbiAgYm9yZGVyLXdpZHRoOjJweDtcclxuICBib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbn1cclxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICAgY29sb3I6ICMwMDA7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbiAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbn1cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xyXG4gICBjb2xvcjogIzAwMDtcclxuICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxufVxyXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgIGNvbG9yOiAjMDAwO1xyXG4gICBvcGFjaXR5OiAxO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG59XHJcbi5sb2dvVG9wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuOGVtO1xyXG59XHJcbi5pbWczMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");







let RegisterPage = class RegisterPage {
    constructor(http, navCtrl, storage, loadingController, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.appUrl = "https://digiworld.ie/project/zouq/api/registration";
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.navigateForward('/');
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Checking...'
            });
            const alert = yield this.alertController.create({
                message: 'Username and Password is wrong',
                buttons: ['OK']
            });
            const namealrt = yield this.alertController.create({
                message: 'Please enter name',
                buttons: ['OK']
            });
            const passalrt = yield this.alertController.create({
                message: 'Please enter password',
                buttons: ['OK']
            });
            const emailalrt = yield this.alertController.create({
                message: 'Please enter email',
                buttons: ['OK']
            });
            const conpassalrt = yield this.alertController.create({
                message: 'Please enter confirm password',
                buttons: ['OK']
            });
            const phonealrt = yield this.alertController.create({
                message: 'Please enter phone no',
                buttons: ['OK']
            });
            const addressalrt = yield this.alertController.create({
                message: 'Please enter address',
                buttons: ['OK']
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (this.name == '' || this.name == null) {
                loading.dismiss();
                namealrt.present();
            }
            else if (this.phone == '' || this.phone == null) {
                loading.dismiss();
                phonealrt.present();
            }
            else if (this.email == '' || this.email == null) {
                loading.dismiss();
                emailalrt.present();
            }
            else if (this.pass == '' || this.pass == null) {
                loading.dismiss();
                passalrt.present();
            }
            else if (this.confirmPassword == '' || this.confirmPassword == null) {
                loading.dismiss();
                conpassalrt.present();
            }
            else if (this.address == '' || this.address == null) {
                loading.dismiss();
                addressalrt.present();
            }
            else {
                yield loading.present();
                var data = {
                    "name": this.name,
                    "email": this.email,
                    "phone": this.phone,
                    "address": this.address,
                    "pass": this.pass,
                    "confirmPassword": this.confirmPassword,
                };
                this.http.post(this.appUrl, data, { headers: headers })
                    .subscribe(res => {
                    //console.log(res.json());
                    this.res = res.json();
                    if (this.res.status == 0) {
                        loading.dismiss();
                        this.alertController.create({
                            message: this.res.msg,
                            buttons: ['OK']
                        }).then(resalert => {
                            resalert.present();
                        });
                    }
                    else if (this.res.status == 1) {
                        this.navCtrl.navigateForward('login');
                        loading.dismiss();
                    }
                    else {
                        //alert("Server error");
                        loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    loading.dismiss();
                });
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map