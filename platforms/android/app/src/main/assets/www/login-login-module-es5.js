(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <div class=\"page-wrap minH100\">\n    <div class=\"container\">\n\n      <!-- <div class=\"fullWidth\">\n        <div class=\"top-wrapper\">\n          <div class=\"top-content\">\n            <img class=\"nav-left\" src=\"assets/nav.png\" alt=\"\">\n            <img class=\"message-right\" src=\"assets/profile-edit.png\" alt=\"\">\n          </div>\n        </div>\n      </div> -->\n      \n      <div class=\"body-part\">\n        <div class=\"body-cont\">\n          <button class=\"btn-back\" (click)=\"back()\"><i class=\"zmdi zmdi-arrow-left\"></i></button>\n          <div class=\"logoTop\">\n            <img class=\"img30\" src=\"assets/logo1.png\" alt=\"\">\n          </div>\n          <!-- <div class=\"btnGroup\">\n            <button class=\"btn active\">Login</button>\n            <button class=\"btn\">Sign up</button>\n          </div> -->\n          <div class=\"loginContainer\">\n            <h1>Sign in to <br>your\nAccount </h1>\n            <form class=\"formControl\" action=\"\">\n              <div class=\"userInput_box\">\n                <label>email id</label>\n                <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon1.png\" alt=\"\"></div>\n              </div>\n              <div class=\"userInput_box\">\n                <label>Password</label>\n                <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"icon\"><img src=\"assets/icon2.png\" alt=\"\"></div>\n              </div>\n              <button class=\"forgPass\" href=\"#\">Forgot Password ?</button>\n              \n            </form>\n            <div class=\"btn-row\">\n              <button class=\"btn signIn\" (click)=\"login()\">Login</button>\n            </div>\n            <p class=\"para\">Or sign in with</p>\n            <ul class=\"social-row\">\n              <li><button class=\"btn btn-google\"><img src=\"assets/social-g.png\" alt=\"\">google</button></li>\n              <li><button class=\"btn btn-facebook\"><img src=\"assets/social-f.png\" alt=\"\">facebook</button></li>\n            </ul>\n            <p class=\"textletter\">Not yet a member, <a href=\"/register\">Sign up</a></p>\n          </div>\n          \n        </div>\n      </div>\n\n    </div>\n  </div>\n    \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n.page-wrap:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background-image: url('bg1.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  width: 100%;\n  height: 110px;\n  z-index: -1;\n  opacity: 0.2;\n}\n.page-wrap {\n  max-width: 100%;\n  margin: auto;\n  height: auto;\n  position: relative;\n  z-index: 1;\n  background-image: url('login.jpg');\n  background-position: center;\n  background-size: cover;\n}\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.fullWidth {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.minH100 {\n  min-height: 100vh;\n}\n.top-wrapper {\n  /* padding: 10px 50px; */\n  width: 100%;\n  position: relative;\n}\n.top-content {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.body-part {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.body-cont {\n  padding: 3em 2em;\n  position: relative;\n}\n.body-cont .btn-back {\n  color: #fff;\n  background: transparent;\n  border: none;\n  font-size: 26px;\n}\n.body-cont .btn-back:focus {\n  outline: none;\n}\n.logoTop {\n  text-align: center;\n  margin-bottom: 1.8em;\n}\n.text-white {\n  color: #ffffff;\n}\n.loginContainer {\n  /* display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center; */\n  /* text-align: center;\n  padding: 2.5em 2em;\n  background: #fff;\n  box-shadow: 0 0 14px #00000024; */\n}\n.loginContainer h1 {\n  font-size: 1.6em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  text-transform: capitalize;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 1.3em;\n  line-height: 36px;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.imgHalf {\n  width: 50%;\n}\n.img30 {\n  width: 100%;\n  max-width: 160px;\n}\n.imgResponsive {\n  width: 80%;\n}\n.para {\n  color: #ffffff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 1em;\n}\n.btn-row {\n  /* margin: 1.5em 0; */\n  margin-bottom: 1em;\n}\n.btn {\n  border: 1px solid #3333331c;\n  background: transparent;\n  font-size: 1.05em;\n  padding: 0.8em 2.6em;\n  border-radius: 30px;\n}\n.btn.signIn {\n  background: #ff0000;\n  color: #ffffff;\n  width: -webkit-fill-available;\n  outline: none;\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n.btn.signIn:hover {\n  background-color: #000;\n}\n.forgPass {\n  text-align: right;\n  display: block;\n  color: #d14741;\n  text-decoration: none;\n  /* width: 100%; */\n  font-family: \"Poppins\", sans-serif;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-size: 15px;\n  font-weight: 400;\n  float: right;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.forgPass:hover {\n  color: #F00;\n}\n.social-row {\n  list-style: none;\n  padding: 0;\n  /* margin: 0; */\n  display: flex;\n  justify-content: center;\n}\n.social-row .btn {\n  font-size: 12px;\n  padding: 6px 14px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n}\n.social-row .btn:hover {\n  opacity: 0.7;\n}\n.social-row .btn img {\n  max-width: 18px;\n  width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.social-row .btn.btn-google {\n  background-color: #c63b26;\n  color: #fff;\n  font-weight: 600;\n}\n.social-row .btn.btn-facebook {\n  background-color: #3a63be;\n  color: #fff;\n  font-weight: 600;\n}\n.social-row li:not(:last-child) {\n  margin-right: 6px;\n}\np.textletter {\n  text-align: center;\n  display: block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  color: #fff;\n}\np.textletter button {\n  color: #ff0000;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 17px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-weight: 900;\n  padding: 0;\n  cursor: pointer;\n}\np.textletter button:hover {\n  color: #000;\n}\n.formControl {\n  width: 100%;\n  display: unset;\n  text-align: left;\n}\n.userInput_box {\n  position: relative;\n  margin-bottom: 1em;\n}\n.userInput_box .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.userInput_box .icon img {\n  max-width: 20px;\n  width: 100%;\n  opacity: 0.7;\n}\n.formControl input {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 0.9em;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  padding: 0.1em 3em 0.1em 1em;\n  border-radius: 2.6px;\n  height: 46px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n}\n.formControl label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: capitalize;\n  display: block;\n  margin-bottom: 7px;\n  color: #fff;\n}\ninput[type=text]:focus-visible {\n  border-color: #ff5733;\n  border-width: 2px;\n  box-shadow: none;\n}\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #999;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #999;\n  opacity: 1;\n}\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #999;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #999;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFLUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNDLGtDQUFBO0VBQ0Qsa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFLQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUZKO0FBS0E7RUFFSSxhQUFBO0VBRUEsZUFBQTtBQUZKO0FBSUE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0E7RUFBVSxpQkFBQTtBQUNWO0FBQUE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdKO0FBREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUlKO0FBREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUlKO0FBRkE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBTUo7QUFKQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7QUFRSjtBQU5BO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQVNKO0FBUEE7RUFBYSxjQUFBO0FBV2I7QUFWQTtFQUNJOzs7d0JBQUE7RUFJQTs7O21DQUFBO0FBZ0JKO0FBWEE7RUFDSSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7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cG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuXHJcblxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4ucGFnZS13cmFwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iZzEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG4ucGFnZS13cmFwIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uL2Fzc2V0cy9sb2dpbi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZnVsbFdpZHRoIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5taW5IMTAwIHttaW4taGVpZ2h0OiAxMDB2aDt9XHJcbi50b3Atd3JhcHBlciB7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDUwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udG9wLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uYm9keS1wYXJ0IHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib2R5LWNvbnQge1xyXG4gICAgcGFkZGluZzogM2VtIDJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYm9keS1jb250IC5idG4tYmFja3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4uYm9keS1jb250IC5idG4tYmFjazpmb2N1c3tcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG4ubG9nb1RvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEuOGVtO1xyXG59XHJcbi50ZXh0LXdoaXRlIHtjb2xvcjogI2ZmZmZmZn1cclxuLmxvZ2luQ29udGFpbmVyIHtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMi41ZW0gMmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNHB4ICMwMDAwMDAyNDsgKi9cclxufVxyXG4ubG9naW5Db250YWluZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4zZW07XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uaW1nSGFsZiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5pbWczMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbn1cclxuLmltZ1Jlc3BvbnNpdmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4ucGFyYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmJ0bi1yb3cge1xyXG4gICAgLyogbWFyZ2luOiAxLjVlbSAwOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMzFjO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMDVlbTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDIuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4uYnRuLnNpZ25JbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJ0bi5zaWduSW46aG92ZXJ7IGJhY2tncm91bmQtY29sb3I6IzAwMDt9XHJcbi5mb3JnUGFzcyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNkMTQ3NDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5mb3JnUGFzczpob3ZlcnsgY29sb3I6I0YwMDt9XHJcbi5zb2NpYWwtcm93IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogbWFyZ2luOiAwOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zb2NpYWwtcm93IC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG4uc29jaWFsLXJvdyAuYnRuOmhvdmVyeyBvcGFjaXR5OjAuNzt9XHJcbi5zb2NpYWwtcm93IC5idG4gaW1nIHtcclxuICAgIG1heC13aWR0aDogMThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uc29jaWFsLXJvdyAuYnRuLmJ0bi1nb29nbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2M2IyNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc29jaWFsLXJvdyAuYnRuLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E2M2JlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zb2NpYWwtcm93IGxpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbnAudGV4dGxldHRlcnsgdGV4dC1hbGlnbjpjZW50ZXI7IGRpc3BsYXk6YmxvY2s7IGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxN3B4OyBmb250LXdlaWdodDo0MDA7IGNvbG9yOiNmZmY7fVxyXG5wLnRleHRsZXR0ZXIgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnAudGV4dGxldHRlciBidXR0b246aG92ZXJ7IGNvbG9yOiMwMDA7fVxyXG5cclxuXHJcblxyXG4uZm9ybUNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnVzZXJJbnB1dF9ib3h7IHBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW4tYm90dG9tOiAxZW07fVxyXG4udXNlcklucHV0X2JveCAuaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG4udXNlcklucHV0X2JveCAuaWNvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZvcm1Db250cm9sIGlucHV0IHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDNlbSAwLjFlbSAxZW07XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCBoc2woMGRlZyAwJSAwJSAvIDc4JSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMGRlZyAwJSAwJSAvIDAlKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm1Db250cm9sIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMtdmlzaWJsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiNmZjU3MzM7XHJcbiAgYm9yZGVyLXdpZHRoOjJweDtcclxuICBib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgIGNvbG9yOiAjOTk5O1xyXG4gICBvcGFjaXR5OiAxO1xyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICAgY29sb3I6ICM5OTk7XHJcbn1cclxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICBjb2xvcjogIzk5OTtcclxuICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(http, navCtrl, storage, loadingController, alertController) {
          _classCallCheck(this, LoginPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.appUrl = "https://digiworld.ie/project/zouq/api/login";
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateForward('/');
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading, alert, usernamealrt, passalrt, headers, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Checking...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return this.alertController.create({
                        message: 'Username and Password is wrong',
                        buttons: ['OK']
                      });

                    case 5:
                      alert = _context.sent;
                      _context.next = 8;
                      return this.alertController.create({
                        message: 'Please enter email',
                        buttons: ['OK']
                      });

                    case 8:
                      usernamealrt = _context.sent;
                      _context.next = 11;
                      return this.alertController.create({
                        message: 'Please enter password',
                        buttons: ['OK']
                      });

                    case 11:
                      passalrt = _context.sent;
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();

                      if (!(this.email == '' || this.email == null)) {
                        _context.next = 18;
                        break;
                      }

                      loading.dismiss();
                      usernamealrt.present();
                      _context.next = 27;
                      break;

                    case 18:
                      if (!(this.password == '' || this.password == null)) {
                        _context.next = 23;
                        break;
                      }

                      loading.dismiss();
                      passalrt.present();
                      _context.next = 27;
                      break;

                    case 23:
                      _context.next = 25;
                      return loading.present();

                    case 25:
                      data = {
                        "email": this.email,
                        "password": this.password
                      };
                      this.http.post(this.appUrl, data, {
                        headers: headers
                      }).subscribe(function (res) {
                        //console.log(res.json());
                        _this.res = res.json();

                        if (_this.res.status == 0) {
                          loading.dismiss();

                          _this.alertController.create({
                            message: _this.res.msg,
                            buttons: ['OK']
                          }).then(function (resalert) {
                            resalert.present();
                          });
                        } else if (_this.res.status == 1) {
                          _this.storage.set("userDetails", _this.res);

                          _this.navCtrl.navigateForward('home');

                          loading.dismiss();
                        } else {
                          //alert("Server error");
                          loading.dismiss();
                        }
                      }, function (err) {
                        console.log(err);
                        loading.dismiss();
                      });

                    case 27:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map