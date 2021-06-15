(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voucher-thank-voucher-thank-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/voucher-thank/voucher-thank.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voucher-thank/voucher-thank.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVoucherThankVoucherThankPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n <div class=\"success_message_area\">\n      <div class=\"container\">\n        <div class=\"success_logo\"><img src=\"assets/check.png\" alt=\"check\" title=\"\"></div>\n        <h1>Payment Successful</h1>\n        <h2>Thank you!</h2>\n        <!-- <p>On my way to your table</p> -->\n        <button class=\"btn-success\" routerLink=\"/\">go to home</button>\n      </div>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/voucher-thank/voucher-thank-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/voucher-thank/voucher-thank-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VoucherThankPageRoutingModule */

    /***/
    function srcAppVoucherThankVoucherThankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherThankPageRoutingModule", function () {
        return VoucherThankPageRoutingModule;
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


      var _voucher_thank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voucher-thank.page */
      "./src/app/voucher-thank/voucher-thank.page.ts");

      var routes = [{
        path: '',
        component: _voucher_thank_page__WEBPACK_IMPORTED_MODULE_3__["VoucherThankPage"]
      }];

      var VoucherThankPageRoutingModule = function VoucherThankPageRoutingModule() {
        _classCallCheck(this, VoucherThankPageRoutingModule);
      };

      VoucherThankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VoucherThankPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/voucher-thank/voucher-thank.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/voucher-thank/voucher-thank.module.ts ***!
      \*******************************************************/

    /*! exports provided: VoucherThankPageModule */

    /***/
    function srcAppVoucherThankVoucherThankModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherThankPageModule", function () {
        return VoucherThankPageModule;
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


      var _voucher_thank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./voucher-thank-routing.module */
      "./src/app/voucher-thank/voucher-thank-routing.module.ts");
      /* harmony import */


      var _voucher_thank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./voucher-thank.page */
      "./src/app/voucher-thank/voucher-thank.page.ts");

      var VoucherThankPageModule = function VoucherThankPageModule() {
        _classCallCheck(this, VoucherThankPageModule);
      };

      VoucherThankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _voucher_thank_routing_module__WEBPACK_IMPORTED_MODULE_5__["VoucherThankPageRoutingModule"]],
        declarations: [_voucher_thank_page__WEBPACK_IMPORTED_MODULE_6__["VoucherThankPage"]]
      })], VoucherThankPageModule);
      /***/
    },

    /***/
    "./src/app/voucher-thank/voucher-thank.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/voucher-thank/voucher-thank.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVoucherThankVoucherThankPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  padding: 0 1em;\n}\n.success_message_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.success_message_area .success_logo {\n  width: 100%;\n  max-width: 100px;\n  margin: 0 auto 5px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.success_message_area .success_logo img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.success_message_area h1 {\n  width: 100%;\n  margin: 0 0 20px;\n  padding: 0 0;\n  font-size: 22px;\n  color: #000;\n}\n.success_message_area h2 {\n  width: 100%;\n  margin: 0 0 5px;\n  padding: 0 0 0;\n  color: #000;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n}\n.success_message_area p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n.success_message_area .btn-success {\n  content: \"\";\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  margin: 0 auto;\n  width: 300px;\n  border: 1px solid #ff0000;\n  background: #ff0000;\n  color: #fff;\n  padding: 13px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm91Y2hlci10aGFuay92b3VjaGVyLXRoYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNILGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUQ7QUFHQTtFQUNJLHNCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7QUFBSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC92b3VjaGVyLXRoYW5rL3ZvdWNoZXItdGhhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0ei1pbmRleDoxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcblxyXG5cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgLnN1Y2Nlc3NfbG9nb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIC5zdWNjZXNzX2xvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgaDEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIGgyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/voucher-thank/voucher-thank.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/voucher-thank/voucher-thank.page.ts ***!
      \*****************************************************/

    /*! exports provided: VoucherThankPage */

    /***/
    function srcAppVoucherThankVoucherThankPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherThankPage", function () {
        return VoucherThankPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VoucherThankPage = /*#__PURE__*/function () {
        function VoucherThankPage() {
          _classCallCheck(this, VoucherThankPage);
        }

        _createClass(VoucherThankPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VoucherThankPage;
      }();

      VoucherThankPage.ctorParameters = function () {
        return [];
      };

      VoucherThankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voucher-thank',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./voucher-thank.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/voucher-thank/voucher-thank.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./voucher-thank.page.scss */
        "./src/app/voucher-thank/voucher-thank.page.scss"))["default"]]
      })], VoucherThankPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=voucher-thank-voucher-thank-module-es5.js.map