(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["term-condition-term-condition-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/term-condition/term-condition.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/term-condition/term-condition.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTermConditionTermConditionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n   \n    \n  <div class=\"header\">\n    <div class=\"top-nav\">\n      <button class=\"btn-back\" (click)=\"back()\">\n        <i class=\"zmdi zmdi-arrow-left\"></i>\n      </button>\n      <div class=\"title\">Terms & Conditions</div>\n    </div>\n  </div>\n      \n  \n  <div class=\"about_us_area\">\n    <div class=\"container\">\n      <div class=\"about_us_body\">\n        <h1>Terms and Conditions</h1>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n      \n      </div>\n    </div>\n  </div>\n\n    \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/term-condition/term-condition-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/term-condition/term-condition-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TermConditionPageRoutingModule */

    /***/
    function srcAppTermConditionTermConditionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermConditionPageRoutingModule", function () {
        return TermConditionPageRoutingModule;
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


      var _term_condition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./term-condition.page */
      "./src/app/term-condition/term-condition.page.ts");

      var routes = [{
        path: '',
        component: _term_condition_page__WEBPACK_IMPORTED_MODULE_3__["TermConditionPage"]
      }];

      var TermConditionPageRoutingModule = function TermConditionPageRoutingModule() {
        _classCallCheck(this, TermConditionPageRoutingModule);
      };

      TermConditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermConditionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/term-condition/term-condition.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/term-condition/term-condition.module.ts ***!
      \*********************************************************/

    /*! exports provided: TermConditionPageModule */

    /***/
    function srcAppTermConditionTermConditionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermConditionPageModule", function () {
        return TermConditionPageModule;
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


      var _term_condition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./term-condition-routing.module */
      "./src/app/term-condition/term-condition-routing.module.ts");
      /* harmony import */


      var _term_condition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./term-condition.page */
      "./src/app/term-condition/term-condition.page.ts");

      var TermConditionPageModule = function TermConditionPageModule() {
        _classCallCheck(this, TermConditionPageModule);
      };

      TermConditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _term_condition_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermConditionPageRoutingModule"]],
        declarations: [_term_condition_page__WEBPACK_IMPORTED_MODULE_6__["TermConditionPage"]]
      })], TermConditionPageModule);
      /***/
    },

    /***/
    "./src/app/term-condition/term-condition.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/term-condition/term-condition.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTermConditionTermConditionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.about_us_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0px;\n}\n.about_us_area .about_us_body {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n}\n.about_us_area .about_us_body h1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 5px;\n  color: #000;\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.about_us_area .about_us_body h2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 5px;\n  color: #000;\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.about_us_area .about_us_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 5px;\n  color: #000;\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.about_us_area .about_us_body p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  color: #000;\n  font-size: 15px;\n  margin: 0 0 20px;\n  line-height: 24px;\n}\n.about_us_area .about_us_body p:last-child {\n  margin: 0 0 0;\n}\n.about_us_area .about_us_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n}\n.about_us_area .about_us_body ul li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 5px;\n  list-style-position: inside;\n  font-size: 15px;\n}\n.about_us_area .about_us_body ul li:last-child {\n  margin: 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybS1jb25kaXRpb24vdGVybS1jb25kaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFFUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0gsa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBRDtBQUdBO0VBQ0ksc0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtBQUFKO0FBSUE7RUFDSSxzQkFBQTtBQURKO0FBT0E7RUFDSSxjQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFNQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFISjtBQUtBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGSjtBQUlBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUdBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0E7RUFDSSxhQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBSUo7QUFGQTtFQUNJLGFBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3Rlcm0tY29uZGl0aW9uL3Rlcm0tY29uZGl0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHotaW5kZXg6MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3AtbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4udG9wLW5hdiAuYnRuLWJhY2sge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1uYXYgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNTYzMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYigwIDAgMCAvIDI0JSk7XHJcbn1cclxuXHJcblxyXG4uZnVsbC1zY3JlZW4uY2FydCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4uYWJvdXRfdXNfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6MjBweCAwcHg7XHJcbn1cclxuLmFib3V0X3VzX2FyZWEgLmFib3V0X3VzX2JvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbn1cclxuLmFib3V0X3VzX2FyZWEgLmFib3V0X3VzX2JvZHkgaDF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5hYm91dF91c19hcmVhIC5hYm91dF91c19ib2R5IGgye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYWJvdXRfdXNfYXJlYSAuYWJvdXRfdXNfYm9keSBoM3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmFib3V0X3VzX2FyZWEgLmFib3V0X3VzX2JvZHkgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5hYm91dF91c19hcmVhIC5hYm91dF91c19ib2R5IHA6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMCAwIDA7XHJcbn1cclxuLmFib3V0X3VzX2FyZWEgLmFib3V0X3VzX2JvZHkgdWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxufVxyXG4uYWJvdXRfdXNfYXJlYSAuYWJvdXRfdXNfYm9keSB1bCBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYWJvdXRfdXNfYXJlYSAuYWJvdXRfdXNfYm9keSB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luOiAwIDAgMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/term-condition/term-condition.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/term-condition/term-condition.page.ts ***!
      \*******************************************************/

    /*! exports provided: TermConditionPage */

    /***/
    function srcAppTermConditionTermConditionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermConditionPage", function () {
        return TermConditionPage;
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

      var TermConditionPage = /*#__PURE__*/function () {
        function TermConditionPage(http, navCtrl, storage, loadingController, alertController, location) {
          _classCallCheck(this, TermConditionPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.location = location;
        }

        _createClass(TermConditionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateForward('/sidebar');
          }
        }]);

        return TermConditionPage;
      }();

      TermConditionPage.ctorParameters = function () {
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

      TermConditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-term-condition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./term-condition.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/term-condition/term-condition.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./term-condition.page.scss */
        "./src/app/term-condition/term-condition.page.scss"))["default"]]
      })], TermConditionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=term-condition-term-condition-module-es5.js.map