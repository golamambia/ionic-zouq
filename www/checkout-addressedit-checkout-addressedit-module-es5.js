(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-addressedit-checkout-addressedit-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressedit/checkout-addressedit.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressedit/checkout-addressedit.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCheckoutAddresseditCheckoutAddresseditPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n          <i class=\"zmdi zmdi-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Update Address</div>\n      </div>\n    </div>\n    \n    <div class=\"delevary_address\">\n      <div class=\"container\">\n        <div class=\"form-group\">\n          <label>Full Address</label>\n          <textarea class=\"form-control\" [(ngModel)]=\"usa_address\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Full Address\"></textarea>\n        </div>\n        <!-- <div class=\"form-group\">\n          <label>Pincode.</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Pincode.\">\n          <div class=\"icon\"><i class=\"fas fa-map-marked-alt\"></i></div>\n        </div> -->\n        <div class=\"form-group\">\n          <label>Door / Flat no</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usa_doorno\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Door / Flat no\">\n          <div class=\"icon\"><i class=\"fas fa-street-view\"></i></div>\n        </div>\n        <div class=\"form-group\">\n          <label>Landmark</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usa_landmark\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Landmark\">\n          <div class=\"icon\"><i class=\"fas fa-street-view\"></i></div>\n        </div>\n        \n        \n        <button class=\"btn\" (click)=\"saveAddress()\">Save</button>\n      </div>\n    </div>\n    \n      \n   \n\n    \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/checkout-addressedit/checkout-addressedit-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/checkout-addressedit/checkout-addressedit-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: CheckoutAddresseditPageRoutingModule */

    /***/
    function srcAppCheckoutAddresseditCheckoutAddresseditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutAddresseditPageRoutingModule", function () {
        return CheckoutAddresseditPageRoutingModule;
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


      var _checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout-addressedit.page */
      "./src/app/checkout-addressedit/checkout-addressedit.page.ts");

      var routes = [{
        path: '',
        component: _checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutAddresseditPage"]
      }];

      var CheckoutAddresseditPageRoutingModule = function CheckoutAddresseditPageRoutingModule() {
        _classCallCheck(this, CheckoutAddresseditPageRoutingModule);
      };

      CheckoutAddresseditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutAddresseditPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/checkout-addressedit/checkout-addressedit.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/checkout-addressedit/checkout-addressedit.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CheckoutAddresseditPageModule */

    /***/
    function srcAppCheckoutAddresseditCheckoutAddresseditModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutAddresseditPageModule", function () {
        return CheckoutAddresseditPageModule;
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


      var _checkout_addressedit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-addressedit-routing.module */
      "./src/app/checkout-addressedit/checkout-addressedit-routing.module.ts");
      /* harmony import */


      var _checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout-addressedit.page */
      "./src/app/checkout-addressedit/checkout-addressedit.page.ts");

      var CheckoutAddresseditPageModule = function CheckoutAddresseditPageModule() {
        _classCallCheck(this, CheckoutAddresseditPageModule);
      };

      CheckoutAddresseditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_addressedit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutAddresseditPageRoutingModule"]],
        declarations: [_checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutAddresseditPage"]]
      })], CheckoutAddresseditPageModule);
      /***/
    },

    /***/
    "./src/app/checkout-addressedit/checkout-addressedit.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/checkout-addressedit/checkout-addressedit.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCheckoutAddresseditCheckoutAddresseditPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.delevary_address {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0px;\n}\n.delevary_address h3 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 15px 0 4px;\n  padding: 0 0;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 400;\n}\n.delevary_address p {\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 30px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #868686;\n}\n.form-group {\n  position: relative;\n  margin-bottom: 1em;\n}\n.form-control {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 0.9em;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  padding: 0.1em 3em 0.1em 1em;\n  border-radius: 2.6px;\n  height: 46px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n}\ntextarea.form-control {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 15px;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  border-radius: 2.6px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n  height: 120px;\n  padding: 15px;\n}\n.form-group .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 20px;\n}\n.form-group label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: capitalize;\n  display: block;\n  margin-bottom: 12px;\n  color: #000;\n}\n.delevary_address .btn {\n  width: 100%;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #fff;\n  padding: 10px 10px;\n  text-transform: capitalize;\n  font-size: 17px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQtYWRkcmVzc2VkaXQvY2hlY2tvdXQtYWRkcmVzc2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFFUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBO0VBQ0ksc0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtBQUFKO0FBSUE7RUFDSSxzQkFBQTtBQURKO0FBT0E7RUFDSSxjQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKSjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0LWFkZHJlc3NlZGl0L2NoZWNrb3V0LWFkZHJlc3NlZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3AtbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4udG9wLW5hdiAuYnRuLWJhY2sge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1uYXYgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNTYzMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYigwIDAgMCAvIDI0JSk7XHJcbn1cclxuXHJcblxyXG4uZnVsbC1zY3JlZW4uY2FydCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4uZGVsZXZhcnlfYWRkcmVzc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcblxyXG4uZGVsZXZhcnlfYWRkcmVzcyBoMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDE1cHggMCA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5kZWxldmFyeV9hZGRyZXNzIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICBwYWRkaW5nOiAwLjFlbSAzZW0gMC4xZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi42cHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtNXB4IGhzbCgwZGVnIDAlIDAlIC8gNzglKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwZGVnIDAlIDAlIC8gMCUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggaHNsKDBkZWcgMCUgMCUgLyA3OCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDBkZWcgMCUgMCUgLyAwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZm9ybS1ncm91cCBsYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzcyAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/checkout-addressedit/checkout-addressedit.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/checkout-addressedit/checkout-addressedit.page.ts ***!
      \*******************************************************************/

    /*! exports provided: CheckoutAddresseditPage */

    /***/
    function srcAppCheckoutAddresseditCheckoutAddresseditPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutAddresseditPage", function () {
        return CheckoutAddresseditPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CheckoutAddresseditPage = /*#__PURE__*/function () {
        function CheckoutAddresseditPage(http, navCtrl, storage, loadingController, alertController, route, location) {
          var _this = this;

          _classCallCheck(this, CheckoutAddresseditPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.route = route;
          this.location = location;
          this.appUrl = "https://digiworld.ie/project/zouq/api/getAddressUser";
          this.updateUrl = "https://digiworld.ie/project/zouq/api/updateAddress";
          this.storage.get("userDetails").then(function (val) {
            if (val) {
              _this.userDetails = val;
              var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](); //console.log(this.userDetails.user_id);

              _this.http.post(_this.appUrl + '/' + _this.edit_id, {
                data: ''
              }, {
                headers: headers
              }).subscribe(function (res) {
                _this.res = res.json(); //console.log(this.res);

                if (_this.res.usa_address != '') {
                  _this.address_list = _this.res;
                  _this.usa_address = _this.address_list.usa_address;
                  _this.usa_doorno = _this.address_list.usa_doorno;
                  _this.usa_landmark = _this.address_list.usa_landmark;
                } else {
                  alert("Server error"); //loading.dismiss();
                }
              }, function (err) {
                console.log(err); //loading.dismiss();
              });
            }
          });
        }

        _createClass(CheckoutAddresseditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (params) {
              if (params) {
                //let queryParams = params;
                _this2.edit_id = params.edit;
                ; //console.log(this.edit_id);
              }
            });
          }
        }, {
          key: "saveAddress",
          value: function saveAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var loading, alert, addrsalert, dooralert, landalert, successalrt, headers, data;
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
                        message: 'Please enter address',
                        buttons: ['OK']
                      });

                    case 8:
                      addrsalert = _context.sent;
                      _context.next = 11;
                      return this.alertController.create({
                        message: 'Please enter door/flat no',
                        buttons: ['OK']
                      });

                    case 11:
                      dooralert = _context.sent;
                      _context.next = 14;
                      return this.alertController.create({
                        message: 'Please enter landmark',
                        buttons: ['OK']
                      });

                    case 14:
                      landalert = _context.sent;
                      _context.next = 17;
                      return this.alertController.create({
                        message: 'Address successfully updated',
                        buttons: ['OK']
                      });

                    case 17:
                      successalrt = _context.sent;
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();

                      if (!(this.usa_address == '' || this.usa_address == null)) {
                        _context.next = 24;
                        break;
                      }

                      loading.dismiss();
                      addrsalert.present();
                      _context.next = 38;
                      break;

                    case 24:
                      if (!(this.usa_doorno == '' || this.usa_doorno == null)) {
                        _context.next = 29;
                        break;
                      }

                      loading.dismiss();
                      dooralert.present();
                      _context.next = 38;
                      break;

                    case 29:
                      if (!(this.usa_landmark == '' || this.usa_landmark == null)) {
                        _context.next = 34;
                        break;
                      }

                      loading.dismiss();
                      landalert.present();
                      _context.next = 38;
                      break;

                    case 34:
                      _context.next = 36;
                      return loading.present();

                    case 36:
                      data = {
                        "usa_address": this.usa_address,
                        "usa_doorno": this.usa_doorno,
                        "usa_landmark": this.usa_landmark,
                        //"usa_user":this.userDetails.user_id,
                        "edit_id": this.edit_id
                      };
                      this.http.post(this.updateUrl, data, {
                        headers: headers
                      }).subscribe(function (res) {
                        //console.log(res.json());
                        _this3.res = res.json();

                        if (_this3.res.status == 0) {
                          loading.dismiss();

                          _this3.alertController.create({
                            message: _this3.res.msg,
                            buttons: ['OK']
                          }).then(function (resalert) {
                            resalert.present();
                          });
                        } else if (_this3.res.status == 1) {
                          //successalrt.present();
                          _this3.navCtrl.navigateForward('checkout');

                          loading.dismiss();
                        } else {
                          //alert("Server error");
                          loading.dismiss();
                        }
                      }, function (err) {
                        console.log(err);
                        loading.dismiss();
                      });

                    case 38:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return CheckoutAddresseditPage;
      }();

      CheckoutAddresseditPage.ctorParameters = function () {
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }];
      };

      CheckoutAddresseditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-addressedit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkout-addressedit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressedit/checkout-addressedit.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkout-addressedit.page.scss */
        "./src/app/checkout-addressedit/checkout-addressedit.page.scss"))["default"]]
      })], CheckoutAddresseditPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkout-addressedit-checkout-addressedit-module-es5.js.map