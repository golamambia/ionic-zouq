(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gift-voucher-gift-voucher-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/gift-voucher/gift-voucher.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gift-voucher/gift-voucher.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGiftVoucherGiftVoucherPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n   \n    \n  <div class=\"header\">\n    <div class=\"top-nav\">\n      <button class=\"btn-back\" (click)=\"back()\">\n        <i class=\"zmdi zmdi-arrow-left\"></i>\n      </button>\n      <div class=\"title\">Gift Voucher</div>\n    </div>\n  </div>\n      \n  <div class=\"gift_voucher_main_area\">\n    <div class=\"container\">\n      <div class=\"gift_voucher_main_body\">\n        <div class=\"gift_voucher_box\">\n          <h3>Gift Voucher</h3>\n          <div class=\"gift_voucher\">\n            <h4>Vouchers :</h4>\n\n            <div class=\"voucher_box\" *ngFor=\"let voucherlist of voucher_list; let i=index\">\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"voucher_body_box\">\n                  <h5>€{{voucherlist.price}}<span>X</span></h5>\n                </div>\n                <div class=\"voucher_body_box\">\n                  <button class=\"btn btn-minus\" *ngIf=\"voucherlist.qty>0\" (click)=\"decrementQty(i,voucherlist.id,voucherlist)\">-</button>\n                   <button class=\"btn btn-minus\" *ngIf=\"voucherlist.qty==0\">-</button>\n                  <button class=\"btn btn-plus\" (click)=\"incrementQty(i,voucherlist.id,voucherlist)\">+</button>\n                  <input type=\"text\" class=\"form-control\" value=\"{{voucherlist.qty}}\" readonly>\n                </div>\n                <div class=\"voucher_body_box\">\n                  <h5>=<span>€{{voucherlist.qty*voucherlist.price}}</span></h5>\n                </div>\n              </div>\n            </div>\n            \n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"bottom-actionWrapper\" *ngIf=\"btn_check>0\">\n        <div class=\"btn-wrap\" >\n          <button *ngIf=\"userDetails\" class=\"btn-default\" routerLink=\"/voucher-pay\">Proceed to checkout</button>\n          <button *ngIf=\"!userDetails\" class=\"btn-default\" routerLink=\"/login\">Proceed to checkout</button>\n        </div>\n        \n      </div>\n\n\n\n  <div class=\"checkout_area\">\n    <div class=\"container\">\n      <div class=\"d-flex justify-content-between\">\n        <h5><i class=\"zmdi zmdi-shopping-cart\"></i> Checkout (<small [innerHTML]=\"voucherTcount\">0</small>)</h5>\n        <h5 [innerHTML]=\"voucherTprice\">€0</h5>\n      </div>\n    </div>\n  </div>\n\n    \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/gift-voucher/gift-voucher-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/gift-voucher/gift-voucher-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: GiftVoucherPageRoutingModule */

    /***/
    function srcAppGiftVoucherGiftVoucherRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftVoucherPageRoutingModule", function () {
        return GiftVoucherPageRoutingModule;
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


      var _gift_voucher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gift-voucher.page */
      "./src/app/gift-voucher/gift-voucher.page.ts");

      var routes = [{
        path: '',
        component: _gift_voucher_page__WEBPACK_IMPORTED_MODULE_3__["GiftVoucherPage"]
      }];

      var GiftVoucherPageRoutingModule = function GiftVoucherPageRoutingModule() {
        _classCallCheck(this, GiftVoucherPageRoutingModule);
      };

      GiftVoucherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GiftVoucherPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/gift-voucher/gift-voucher.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/gift-voucher/gift-voucher.module.ts ***!
      \*****************************************************/

    /*! exports provided: GiftVoucherPageModule */

    /***/
    function srcAppGiftVoucherGiftVoucherModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftVoucherPageModule", function () {
        return GiftVoucherPageModule;
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


      var _gift_voucher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gift-voucher-routing.module */
      "./src/app/gift-voucher/gift-voucher-routing.module.ts");
      /* harmony import */


      var _gift_voucher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gift-voucher.page */
      "./src/app/gift-voucher/gift-voucher.page.ts");

      var GiftVoucherPageModule = function GiftVoucherPageModule() {
        _classCallCheck(this, GiftVoucherPageModule);
      };

      GiftVoucherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gift_voucher_routing_module__WEBPACK_IMPORTED_MODULE_5__["GiftVoucherPageRoutingModule"]],
        declarations: [_gift_voucher_page__WEBPACK_IMPORTED_MODULE_6__["GiftVoucherPage"]]
      })], GiftVoucherPageModule);
      /***/
    },

    /***/
    "./src/app/gift-voucher/gift-voucher.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/gift-voucher/gift-voucher.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppGiftVoucherGiftVoucherPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n  position: fixed;\n  z-index: 99;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.container {\n  padding: 0 1em;\n}\n.gift_voucher_main_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 70px 0 0;\n  margin: 0 0 15px;\n}\n.gift_voucher_main_area .gift_voucher_main_body {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0;\n  box-shadow: 0 0 10px rgba(153, 153, 153, 0.5);\n  border-radius: 8px;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box h3 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0;\n  padding: 10px 10px;\n  font-size: 16px;\n  border-bottom: 1px solid #000;\n  position: relative;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 10px;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 5px;\n  color: #494949;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #bdbdbd;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box:last-child {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0px;\n  margin-bottom: 0px;\n  border-bottom: 0px;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 8px 0 0;\n  position: relative;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box:last-child {\n  margin: 0 0 0 0;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n  line-height: 38px;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box h5 span {\n  float: right;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box .form-control {\n  box-sizing: border-box;\n  height: 40px;\n  padding: 0 30px;\n  width: 120px;\n  text-align: center;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box .btn {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  height: 40px;\n  padding: 10px 10px;\n  line-height: 17px;\n  background: #ff0000;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  border: 1px solid #ff0000;\n  cursor: pointer;\n  outline: none;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box .btn.btn-minus {\n  left: 0;\n}\n.gift_voucher_main_area .gift_voucher_main_body .gift_voucher_box .gift_voucher .voucher_box .voucher_body_box .btn.btn-plus {\n  right: 0;\n}\n.checkout_area {\n  box-sizing: border-box;\n  padding: 15px 0px;\n  background: #000;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #000;\n  z-index: 99;\n  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.22);\n}\n.checkout_area h5 {\n  margin: 0 0;\n  padding: 0 0;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n}\n.btn-wrap {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 6%;\n  padding: 0 1em;\n}\n.btn-wrap button {\n  background-color: #ff0000;\n  border: none;\n  text-transform: uppercase;\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: #fff;\n  cursor: pointer;\n  padding: 17px;\n  outline: none;\n  font-family: \"Poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lmdC12b3VjaGVyL2dpZnQtdm91Y2hlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSx5RkFBQTtBQUVSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUFEO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRko7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMkNBQUE7QUFBSjtBQUlBO0VBQ0ksc0JBQUE7QUFESjtBQUtBO0VBRUkseUNBQUE7QUFGSjtBQUlBO0VBRUksd0JBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUo7QUFFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUdKO0FBREE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJSjtBQUZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9KO0FBTEE7RUFDSSxlQUFBO0FBUUo7QUFOQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBU0o7QUFQQTtFQUNJLFlBQUE7QUFVSjtBQVJBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVdKO0FBVEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBWUo7QUFWQTtFQUNJLE9BQUE7QUFhSjtBQVhBO0VBQ0ksUUFBQTtBQWNKO0FBWEE7RUFDRyxzQkFBQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFlSjtBQVpBO0VBQ1EsYUFBQTtFQUNKLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZUo7QUFaQTtFQUNLLHlCQUFBO0VBQ0QsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFlSiIsImZpbGUiOiJzcmMvYXBwL2dpZnQtdm91Y2hlci9naWZ0LXZvdWNoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0ei1pbmRleDoxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuLnRvcC1uYXYgLmJ0bi1iYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50b3AtbmF2IC50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTU2MzI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2IoMCAwIDAgLyAyNCUpO1xyXG59XHJcblxyXG5cclxuLmZ1bGwtc2NyZWVuLmNhcnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWEgLmdpZnRfdm91Y2hlcl9tYWluX2JvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDA7XHJcbn1cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWEgLmdpZnRfdm91Y2hlcl9tYWluX2JvZHkgLmdpZnRfdm91Y2hlcl9ib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMTUzIDE1MyAxNTMgLyA1MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5naWZ0X3ZvdWNoZXJfbWFpbl9hcmVhIC5naWZ0X3ZvdWNoZXJfbWFpbl9ib2R5IC5naWZ0X3ZvdWNoZXJfYm94IGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWEgLmdpZnRfdm91Y2hlcl9tYWluX2JvZHkgLmdpZnRfdm91Y2hlcl9ib3ggLmdpZnRfdm91Y2hlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4uZ2lmdF92b3VjaGVyX21haW5fYXJlYSAuZ2lmdF92b3VjaGVyX21haW5fYm9keSAuZ2lmdF92b3VjaGVyX2JveCAuZ2lmdF92b3VjaGVyIGg0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG59XHJcbi5naWZ0X3ZvdWNoZXJfbWFpbl9hcmVhIC5naWZ0X3ZvdWNoZXJfbWFpbl9ib2R5IC5naWZ0X3ZvdWNoZXJfYm94IC5naWZ0X3ZvdWNoZXIgLnZvdWNoZXJfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xyXG59XHJcbi5naWZ0X3ZvdWNoZXJfbWFpbl9hcmVhIC5naWZ0X3ZvdWNoZXJfbWFpbl9ib2R5IC5naWZ0X3ZvdWNoZXJfYm94IC5naWZ0X3ZvdWNoZXIgLnZvdWNoZXJfYm94Omxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG4uZ2lmdF92b3VjaGVyX21haW5fYXJlYSAuZ2lmdF92b3VjaGVyX21haW5fYm9keSAuZ2lmdF92b3VjaGVyX2JveCAuZ2lmdF92b3VjaGVyIC52b3VjaGVyX2JveCAudm91Y2hlcl9ib2R5X2JveHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWEgLmdpZnRfdm91Y2hlcl9tYWluX2JvZHkgLmdpZnRfdm91Y2hlcl9ib3ggLmdpZnRfdm91Y2hlciAudm91Y2hlcl9ib3ggLnZvdWNoZXJfYm9keV9ib3g6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxufVxyXG4uZ2lmdF92b3VjaGVyX21haW5fYXJlYSAuZ2lmdF92b3VjaGVyX21haW5fYm9keSAuZ2lmdF92b3VjaGVyX2JveCAuZ2lmdF92b3VjaGVyIC52b3VjaGVyX2JveCAudm91Y2hlcl9ib2R5X2JveCBoNXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbn1cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWEgLmdpZnRfdm91Y2hlcl9tYWluX2JvZHkgLmdpZnRfdm91Y2hlcl9ib3ggLmdpZnRfdm91Y2hlciAudm91Y2hlcl9ib3ggLnZvdWNoZXJfYm9keV9ib3ggaDUgc3BhbntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uZ2lmdF92b3VjaGVyX21haW5fYXJlYSAuZ2lmdF92b3VjaGVyX21haW5fYm9keSAuZ2lmdF92b3VjaGVyX2JveCAuZ2lmdF92b3VjaGVyIC52b3VjaGVyX2JveCAudm91Y2hlcl9ib2R5X2JveCAuZm9ybS1jb250cm9sIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdpZnRfdm91Y2hlcl9tYWluX2FyZWEgLmdpZnRfdm91Y2hlcl9tYWluX2JvZHkgLmdpZnRfdm91Y2hlcl9ib3ggLmdpZnRfdm91Y2hlciAudm91Y2hlcl9ib3ggLnZvdWNoZXJfYm9keV9ib3ggLmJ0biB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5naWZ0X3ZvdWNoZXJfbWFpbl9hcmVhIC5naWZ0X3ZvdWNoZXJfbWFpbl9ib2R5IC5naWZ0X3ZvdWNoZXJfYm94IC5naWZ0X3ZvdWNoZXIgLnZvdWNoZXJfYm94IC52b3VjaGVyX2JvZHlfYm94IC5idG4uYnRuLW1pbnVze1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uZ2lmdF92b3VjaGVyX21haW5fYXJlYSAuZ2lmdF92b3VjaGVyX21haW5fYm9keSAuZ2lmdF92b3VjaGVyX2JveCAuZ2lmdF92b3VjaGVyIC52b3VjaGVyX2JveCAudm91Y2hlcl9ib2R5X2JveCAuYnRuLmJ0bi1wbHVze1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jaGVja291dF9hcmVhe1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBib3gtc2hhZG93OiAwIC0xcHggMTBweCByZ2IoMCAwIDAgLyAyMiUpO1xyXG59XHJcbi5jaGVja291dF9hcmVhIGg1IHtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuLXdyYXB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4uYnRuLXdyYXAgYnV0dG9ue1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmOyAgIFxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/gift-voucher/gift-voucher.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/gift-voucher/gift-voucher.page.ts ***!
      \***************************************************/

    /*! exports provided: GiftVoucherPage */

    /***/
    function srcAppGiftVoucherGiftVoucherPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftVoucherPage", function () {
        return GiftVoucherPage;
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

      var GiftVoucherPage = /*#__PURE__*/function () {
        function GiftVoucherPage(http, navCtrl, storage, loadingController, alertController, location) {
          var _this = this;

          _classCallCheck(this, GiftVoucherPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.location = location;
          this.appUrl = "https://digiworld.ie/project/zouq/api/voucher_list";
          this.voucher_total = 0;
          this.voucher_total_price = 0;
          this.voucher_data = [];
          this.voucher_data1 = [];
          this.voucherTcount = 0;
          this.voucherTprice = 0;
          this.count = 0;
          this.countP = 0;
          this.btn_check = 0;
          this.storage.get("userDetails").then(function (val) {
            if (val) {
              _this.userDetails = val; //console.log(val);
            }
          });
        }

        _createClass(GiftVoucherPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            //this.storage.remove("voucherCart");
            this.listing(); //this.getCartItemCount();

            this.getProceed();
            this.storage.get("voucherCart").then(function (val) {
              //console.log(val);
              if (val) {
                _this2.userVoucher = val;
                _this2.voucher_data1 = val; // console.log(this.voucher_data1);
              } else {
                _this2.voucher_data1 = [];
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getProceed",
          value: function getProceed() {
            var _this3 = this;

            this.count = 0;
            this.countP = 0;
            this.btn_check = 0;
            this.storage.get("voucherCart").then(function (val) {
              if (val) {
                // console.log(val);
                var _iterator = _createForOfIteratorHelper(val),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var p = _step.value;

                    if (p.qty > 0) {
                      _this3.count += 1;
                      _this3.countP += p.qty * p.price;
                    }
                  } //this.cartTotal=this.count;

                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this3.voucherTcount = _this3.count;
                _this3.voucherTprice = _this3.countP;
                _this3.btn_check = _this3.count;
              } else {
                _this3.voucherTcount = _this3.count;
                _this3.voucherTprice = _this3.countP;
                _this3.btn_check = _this3.count;
              }
            });
          }
        }, {
          key: "listing",
          value: function listing() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var loading, headers;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: ''
                      });

                    case 2:
                      loading = _context.sent;
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                      loading.present();
                      this.http.post(this.appUrl, {
                        data: ''
                      }, {
                        headers: headers
                      }).subscribe(function (res) {
                        _this4.res = res.json(); //console.log(this.res);

                        if (_this4.res.data_list) {
                          //this.voucher_list2 =this.res.data_list;
                          _this4.voucher_list = _this4.res.data_list;

                          var _iterator2 = _createForOfIteratorHelper(_this4.voucher_list),
                              _step2;

                          try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                              var pro = _step2.value;

                              var _iterator3 = _createForOfIteratorHelper(_this4.voucher_data1),
                                  _step3;

                              try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                  var p = _step3.value;

                                  if (p.id == pro.id) {
                                    pro.qty = p.qty; //break;
                                  }
                                }
                              } catch (err) {
                                _iterator3.e(err);
                              } finally {
                                _iterator3.f();
                              }
                            }
                          } catch (err) {
                            _iterator2.e(err);
                          } finally {
                            _iterator2.f();
                          }

                          loading.dismiss();
                        } else {
                          //alert("Server error");
                          loading.dismiss();
                        }
                      }, function (err) {
                        console.log(err);
                        loading.dismiss();
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "incrementQty",
          value: function incrementQty(index, id, menulist) {
            var _this5 = this;

            /*. if item passed then item.qty. */
            if (this.voucher_list[index].qty > 0) {
              this.voucher_list[index].qty += 1; //this.voucherTprice +=parseInt(this.voucher_list[index].price);
              //this.menu_list[index].quantity += 1;

              var _iterator4 = _createForOfIteratorHelper(this.voucher_data1),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var p = _step4.value;

                  if (p.id == menulist.id) {
                    p.qty = this.voucher_list[index].qty;
                    this.storage.set("voucherCart", this.voucher_data1).then(function (val) {
                      _this5.getProceed();
                    }); //this.getProceed();

                    break;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } else {
              this.storage.get("voucherCart").then(function (val) {
                var added = false;

                if (val) {
                  _this5.voucher_data1 = val;

                  var _iterator5 = _createForOfIteratorHelper(_this5.voucher_data1),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _p = _step5.value;

                      if (_p.id == menulist.id) {
                        _this5.voucher_list[index].qty = 1;
                        _p.qty = _this5.voucher_list[index].qty;

                        _this5.storage.set("voucherCart", _this5.voucher_data1).then(function (val) {
                          _this5.getProceed();
                        });

                        added = true;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }

                  if (!added) {
                    _this5.voucher_list[index].qty = 1;

                    _this5.voucher_data1.push(menulist);

                    _this5.storage.set("voucherCart", _this5.voucher_data1).then(function (val) {
                      _this5.getProceed();
                    });

                    ; //this.getProceed();
                  }
                } else {
                  //menulist.qty = 1;
                  _this5.voucher_list[index].qty = 1;

                  _this5.voucher_data1.push(menulist);

                  _this5.storage.set("voucherCart", _this5.voucher_data1).then(function (val) {
                    _this5.getProceed();
                  });

                  ; //this.getProceed();
                }
              }); //this.voucherTcount +=1;
              //this.voucherTprice +=parseInt(this.voucher_list[index].price);
            }
          }
        }, {
          key: "decrementQty",
          value: function decrementQty(index, id, menulist) {
            var _this6 = this;

            /*. if item passed then item.qty. */
            if (this.voucher_list[index].qty - 1 <= 0) {
              //this.voucherTprice -=parseInt(this.voucher_list[index].price);
              //.voucherTcount -=1;
              this.voucher_list[index].qty = 0; //this.menu_list[index].quantity += 1;

              var _iterator6 = _createForOfIteratorHelper(this.voucher_data1),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var p = _step6.value;

                  if (p.id == menulist.id) {
                    p.qty = 0;
                    this.storage.set("voucherCart", this.voucher_data1).then(function (val) {
                      _this6.getProceed();
                    }); //this.getProceed();

                    break;
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            } else {
              var _iterator7 = _createForOfIteratorHelper(this.voucher_data1),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _p2 = _step7.value;

                  if (_p2.id == menulist.id) {
                    _p2.qty = parseInt(_p2.qty) - 1;
                    this.storage.set("voucherCart", this.voucher_data1).then(function (val) {
                      _this6.getProceed();
                    }); //this.getProceed();

                    break;
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              this.voucher_list[index].qty -= 1; //this.voucherTprice -=parseInt(this.voucher_list[index].price);
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateForward('/sidebar');
          }
        }]);

        return GiftVoucherPage;
      }();

      GiftVoucherPage.ctorParameters = function () {
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

      GiftVoucherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gift-voucher',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./gift-voucher.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/gift-voucher/gift-voucher.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./gift-voucher.page.scss */
        "./src/app/gift-voucher/gift-voucher.page.scss"))["default"]]
      })], GiftVoucherPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gift-voucher-gift-voucher-module-es5.js.map