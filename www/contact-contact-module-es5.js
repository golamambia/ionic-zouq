(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content>\n\n   \n    \n  <div class=\"header\">\n    <div class=\"top-nav\">\n      <button class=\"btn-back\" (click)=\"back()\">\n        <i class=\"zmdi zmdi-arrow-left\"></i>\n      </button>\n      <div class=\"title\">Contact Us</div>\n    </div>\n  </div>\n      \n  <div class=\"contact_us_area\">\n    <div class=\"container\">\n      \n      <div class=\"contact_us_body\">\n        <h1>Our Address</h1>\n        <div class=\"contact_address_box\">\n          <div class=\"icon_box\"><i class=\"zmdi zmdi-pin\"></i></div>\n          <h3>address</h3>\n          <p>817 N California Ave, Chicago, IL 60622</p>\n        </div>\n        <div class=\"contact_address_box\">\n          <div class=\"icon_box\"><i class=\"zmdi zmdi-phone\"></i></div>\n          <h3>call</h3>\n          <p>+1 (234) 555 - 67 - 89</p>\n        </div>\n        <div class=\"contact_address_box\">\n          <div class=\"icon_box\"><i class=\"zmdi zmdi-email\"></i></div>\n          <h3>email</h3>\n          <p>info@zouq.com</p>\n        </div>\n      </div>\n\n      <div class=\"contact_us_body\">\n        <h2>Please Contact Us</h2>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name *\" [(ngModel)]=\"ct_name\" [ngModelOptions]=\"{standalone:true}\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email *\" [(ngModel)]=\"ct_email\" [ngModelOptions]=\"{standalone:true}\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Phone No. *\" [(ngModel)]=\"ct_phone\" [ngModelOptions]=\"{standalone:true}\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" placeholder=\"Messages *\" [(ngModel)]=\"ct_subject\" [ngModelOptions]=\"{standalone:true}\"></textarea>\n        </div>\n        <button class=\"btn\" (click)=\"save()\">submit</button>\n      </div>\n\n    </div>\n  </div>\n\n    \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/contact/contact-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/contact/contact-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ContactPageRoutingModule */

    /***/
    function srcAppContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
        return ContactPageRoutingModule;
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


      var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact.page */
      "./src/app/contact/contact.page.ts");

      var routes = [{
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
      }];

      var ContactPageRoutingModule = function ContactPageRoutingModule() {
        _classCallCheck(this, ContactPageRoutingModule);
      };

      ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/contact/contact.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/contact/contact.module.ts ***!
      \*******************************************/

    /*! exports provided: ContactPageModule */

    /***/
    function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
        return ContactPageModule;
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


      var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact-routing.module */
      "./src/app/contact/contact-routing.module.ts");
      /* harmony import */


      var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact.page */
      "./src/app/contact/contact.page.ts");

      var ContactPageModule = function ContactPageModule() {
        _classCallCheck(this, ContactPageModule);
      };

      ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
      })], ContactPageModule);
      /***/
    },

    /***/
    "./src/app/contact/contact.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/contact/contact.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n  position: fixed;\n  z-index: 1;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.contact_us_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 70px 0 0;\n  margin: 0 0 0;\n}\n.contact_us_area .contact_us_body {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 15px;\n}\n.contact_us_area .contact_us_body h1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 12px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #000;\n}\n.contact_us_area .contact_us_body h2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 12px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #000;\n}\n.contact_us_area .contact_us_body .contact_address_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 10px;\n  margin: 0 0 15px;\n  box-shadow: 0 0 5px rgba(198, 198, 198, 0.6);\n}\n.contact_us_area .contact_us_body .contact_address_box:last-child {\n  margin: 0 0 0;\n}\n.contact_us_area .contact_us_body .contact_address_box h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  text-transform: capitalize;\n}\n.contact_us_area .contact_us_body .contact_address_box p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 14px;\n  color: #000;\n  text-decoration: none;\n}\n.contact_us_area .contact_us_body .contact_address_box .icon_box {\n  font-size: 25px;\n  font-weight: 900;\n}\n.contact_us_area .contact_us_body .form-group {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 10px;\n}\n.contact_us_area .contact_us_body .form-group .form-control {\n  width: 100%;\n  padding: 10px 10px;\n  border: 1px solid #8d8d8d;\n}\n.contact_us_area .contact_us_body .form-group textarea.form-control {\n  height: 120px;\n}\n.contact_us_area .contact_us_body .btn {\n  background: #000;\n  border: 1px solid #000;\n  color: #fff;\n  font-size: 13px;\n  text-transform: uppercase;\n  padding: 9px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNILGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUQ7QUFHQTtFQUNJLHNCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFGSjtBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtBQUFKO0FBSUE7RUFDSSxzQkFBQTtBQURKO0FBT0E7RUFDSSxjQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUpKO0FBTUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBSUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREo7QUFHQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBQUFKO0FBRUE7RUFDSSxhQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUdKO0FBREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQUZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTUo7QUFKQTtFQUNJLGFBQUE7QUFPSjtBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHotaW5kZXg6MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3AtbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnRvcC1uYXYgLmJ0bi1iYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50b3AtbmF2IC50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTU2MzI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2IoMCAwIDAgLyAyNCUpO1xyXG59XHJcblxyXG5cclxuLmZ1bGwtc2NyZWVuLmNhcnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuLmNvbnRhY3RfdXNfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDcwcHggMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMDtcclxufVxyXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X3VzX2JvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF91c19ib2R5IGgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jb250YWN0X3VzX2FyZWEgLmNvbnRhY3RfdXNfYm9keSBoMntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X3VzX2JvZHkgLmNvbnRhY3RfYWRkcmVzc19ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDE5OCAxOTggMTk4IC8gNjAlKTtcclxufVxyXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X3VzX2JvZHkgLmNvbnRhY3RfYWRkcmVzc19ib3g6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMCAwIDA7XHJcbn1cclxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF91c19ib2R5IC5jb250YWN0X2FkZHJlc3NfYm94IGgze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF91c19ib2R5IC5jb250YWN0X2FkZHJlc3NfYm94IHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X3VzX2JvZHkgLmNvbnRhY3RfYWRkcmVzc19ib3ggLmljb25fYm94IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF91c19ib2R5IC5mb3JtLWdyb3VwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X3VzX2JvZHkgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZDhkOGQ7XHJcbn1cclxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF91c19ib2R5IC5mb3JtLWdyb3VwIHRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF91c19ib2R5IC5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/contact/contact.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/contact/contact.page.ts ***!
      \*****************************************/

    /*! exports provided: ContactPage */

    /***/
    function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
        return ContactPage;
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ContactPage = /*#__PURE__*/function () {
        function ContactPage(http, navCtrl, storage, loadingController, alertController, location) {
          _classCallCheck(this, ContactPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.location = location;
          this.appUrl = "https://digiworld.ie/project/zouq/api/contact_post";
        }

        _createClass(ContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateForward('/sidebar');
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading, alert, successalrt, ct_namealert, ct_emailalert, ct_phonealert, ct_subjectalert, headers, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Saving...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return this.alertController.create({
                        message: 'Something is wrong',
                        buttons: ['OK']
                      });

                    case 5:
                      alert = _context.sent;
                      _context.next = 8;
                      return this.alertController.create({
                        message: 'Thankyou for contacting us',
                        buttons: ['OK']
                      });

                    case 8:
                      successalrt = _context.sent;
                      _context.next = 11;
                      return this.alertController.create({
                        message: 'Please enter name',
                        buttons: ['OK']
                      });

                    case 11:
                      ct_namealert = _context.sent;
                      _context.next = 14;
                      return this.alertController.create({
                        message: 'Please enter email',
                        buttons: ['OK']
                      });

                    case 14:
                      ct_emailalert = _context.sent;
                      _context.next = 17;
                      return this.alertController.create({
                        message: 'Please enter phone',
                        buttons: ['OK']
                      });

                    case 17:
                      ct_phonealert = _context.sent;
                      _context.next = 20;
                      return this.alertController.create({
                        message: 'Please enter subject',
                        buttons: ['OK']
                      });

                    case 20:
                      ct_subjectalert = _context.sent;
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();

                      if (!(this.ct_name == '' || this.ct_name == null)) {
                        _context.next = 27;
                        break;
                      }

                      loading.dismiss();
                      ct_namealert.present();
                      _context.next = 46;
                      break;

                    case 27:
                      if (!(this.ct_email == '' || this.ct_email == null)) {
                        _context.next = 32;
                        break;
                      }

                      loading.dismiss();
                      ct_emailalert.present();
                      _context.next = 46;
                      break;

                    case 32:
                      if (!(this.ct_phone == '' || this.ct_phone == null)) {
                        _context.next = 37;
                        break;
                      }

                      loading.dismiss();
                      ct_phonealert.present();
                      _context.next = 46;
                      break;

                    case 37:
                      if (!(this.ct_subject == '' || this.ct_subject == null)) {
                        _context.next = 42;
                        break;
                      }

                      loading.dismiss();
                      ct_subjectalert.present();
                      _context.next = 46;
                      break;

                    case 42:
                      _context.next = 44;
                      return loading.present();

                    case 44:
                      data = {
                        "ct_name": this.ct_name,
                        "ct_email": this.ct_email,
                        "ct_phone": this.ct_phone,
                        "ct_subject": this.ct_subject
                      };
                      this.http.post(this.appUrl, data, {
                        headers: headers
                      }).subscribe(function (res) {
                        //console.log(res.json());
                        _this.res = res.json();

                        if (_this.res.status == 0) {
                          loading.dismiss();
                          alert.present();
                        } else if (_this.res.status == 1) {
                          successalrt.present();
                          _this.ct_name = '';
                          _this.ct_email = '';
                          _this.ct_phone = '';
                          _this.ct_subject = '';
                          loading.dismiss();
                        } else {
                          //alert("Server error");
                          alert.present();
                          loading.dismiss();
                        }
                      }, function (err) {
                        alert.present(); //console.log(err);

                        loading.dismiss();
                      });

                    case 46:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ContactPage;
      }();

      ContactPage.ctorParameters = function () {
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
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contact.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contact.page.scss */
        "./src/app/contact/contact.page.scss"))["default"]]
      })], ContactPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contact-contact-module-es5.js.map