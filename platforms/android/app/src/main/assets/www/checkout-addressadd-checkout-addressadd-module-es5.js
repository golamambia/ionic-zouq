(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-addressadd-checkout-addressadd-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressadd/checkout-addressadd.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressadd/checkout-addressadd.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCheckoutAddressaddCheckoutAddressaddPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n          <i class=\"zmdi zmdi-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Add Address</div>\n      </div>\n    </div>\n    \n    <div class=\"delevary_address\">\n      <div class=\"container\">\n      \t<div class=\"form-group\">\n          <label>Full Address</label>\n          <textarea class=\"form-control\" [(ngModel)]=\"usa_address\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Full Address\"></textarea>\n        </div>\n        <!-- <div class=\"form-group\">\n          <label>Pincode.</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Pincode.\">\n          <div class=\"icon\"><i class=\"fas fa-map-marked-alt\"></i></div>\n        </div> -->\n        <div class=\"form-group\">\n          <label>Door / Flat no</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usa_doorno\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Door / Flat no\">\n          <div class=\"icon\"><i class=\"fas fa-street-view\"></i></div>\n        </div>\n        <div class=\"form-group\">\n          <label>Landmark</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usa_landmark\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Landmark\">\n          <div class=\"icon\"><i class=\"fas fa-street-view\"></i></div>\n        </div>\n        \n        \n        <button class=\"btn\" (click)=\"saveAddress()\">Save</button>\n      </div>\n    </div>\n    \n      \n   \n\n    \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/checkout-addressadd/checkout-addressadd-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/checkout-addressadd/checkout-addressadd-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CheckoutAddressaddPageRoutingModule */

    /***/
    function srcAppCheckoutAddressaddCheckoutAddressaddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutAddressaddPageRoutingModule", function () {
        return CheckoutAddressaddPageRoutingModule;
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


      var _checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout-addressadd.page */
      "./src/app/checkout-addressadd/checkout-addressadd.page.ts");

      var routes = [{
        path: '',
        component: _checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutAddressaddPage"]
      }];

      var CheckoutAddressaddPageRoutingModule = function CheckoutAddressaddPageRoutingModule() {
        _classCallCheck(this, CheckoutAddressaddPageRoutingModule);
      };

      CheckoutAddressaddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutAddressaddPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/checkout-addressadd/checkout-addressadd.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/checkout-addressadd/checkout-addressadd.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CheckoutAddressaddPageModule */

    /***/
    function srcAppCheckoutAddressaddCheckoutAddressaddModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutAddressaddPageModule", function () {
        return CheckoutAddressaddPageModule;
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


      var _checkout_addressadd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-addressadd-routing.module */
      "./src/app/checkout-addressadd/checkout-addressadd-routing.module.ts");
      /* harmony import */


      var _checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout-addressadd.page */
      "./src/app/checkout-addressadd/checkout-addressadd.page.ts");

      var CheckoutAddressaddPageModule = function CheckoutAddressaddPageModule() {
        _classCallCheck(this, CheckoutAddressaddPageModule);
      };

      CheckoutAddressaddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_addressadd_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutAddressaddPageRoutingModule"]],
        declarations: [_checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutAddressaddPage"]]
      })], CheckoutAddressaddPageModule);
      /***/
    },

    /***/
    "./src/app/checkout-addressadd/checkout-addressadd.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/checkout-addressadd/checkout-addressadd.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCheckoutAddressaddCheckoutAddressaddPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.delevary_address {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0px;\n}\n.delevary_address h3 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 15px 0 4px;\n  padding: 0 0;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 400;\n}\n.delevary_address p {\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 30px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #868686;\n}\n.form-group {\n  position: relative;\n  margin-bottom: 1em;\n}\n.form-control {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 0.9em;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  padding: 0.1em 3em 0.1em 1em;\n  border-radius: 2.6px;\n  height: 46px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n}\ntextarea.form-control {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 15px;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  border-radius: 2.6px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n  height: 120px;\n  padding: 15px;\n}\n.form-group .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 20px;\n}\n.form-group label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: capitalize;\n  display: block;\n  margin-bottom: 12px;\n  color: #000;\n}\n.delevary_address .btn {\n  width: 100%;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #fff;\n  padding: 10px 10px;\n  text-transform: capitalize;\n  font-size: 17px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQtYWRkcmVzc2FkZC9jaGVja291dC1hZGRyZXNzYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHNCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRko7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMkNBQUE7QUFBSjtBQUlBO0VBQ0ksc0JBQUE7QUFESjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSko7QUFNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBRko7QUFJQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFESjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUVBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC1hZGRyZXNzYWRkL2NoZWNrb3V0LWFkZHJlc3NhZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi50b3AtbmF2IC5idG4tYmFjayB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udG9wLW5hdiAudGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1NjMyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiKDAgMCAwIC8gMjQlKTtcclxufVxyXG5cclxuXHJcbi5mdWxsLXNjcmVlbi5jYXJ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5kZWxldmFyeV9hZGRyZXNze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5kZWxldmFyeV9hZGRyZXNzIGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMTVweCAwIDRweDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmRlbGV2YXJ5X2FkZHJlc3MgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzg2ODY4NjtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDNlbSAwLjFlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggaHNsKDBkZWcgMCUgMCUgLyA3OCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDBkZWcgMCUgMCUgLyAwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCBoc2woMGRlZyAwJSAwJSAvIDc4JSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMGRlZyAwJSAwJSAvIDAlKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uZm9ybS1ncm91cCAuaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5kZWxldmFyeV9hZGRyZXNzIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/checkout-addressadd/checkout-addressadd.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/checkout-addressadd/checkout-addressadd.page.ts ***!
      \*****************************************************************/

    /*! exports provided: CheckoutAddressaddPage */

    /***/
    function srcAppCheckoutAddressaddCheckoutAddressaddPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutAddressaddPage", function () {
        return CheckoutAddressaddPage;
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

      var CheckoutAddressaddPage = /*#__PURE__*/function () {
        function CheckoutAddressaddPage(http, navCtrl, storage, loadingController, alertController) {
          var _this = this;

          _classCallCheck(this, CheckoutAddressaddPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.appUrl = "https://digiworld.ie/project/zouq/api/saveAddress";
          this.storage.get("userDetails").then(function (val) {
            if (val) {
              _this.userDetails = val;
            }
          });
        }

        _createClass(CheckoutAddressaddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "saveAddress",
          value: function saveAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

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
                        message: 'Address successfully saved',
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
                        "usa_user": this.userDetails.user_id
                      };
                      this.http.post(this.appUrl, data, {
                        headers: headers
                      }).subscribe(function (res) {
                        //console.log(res.json());
                        _this2.res = res.json();

                        if (_this2.res.status == 0) {
                          loading.dismiss();

                          _this2.alertController.create({
                            message: _this2.res.msg,
                            buttons: ['OK']
                          }).then(function (resalert) {
                            resalert.present();
                          });
                        } else if (_this2.res.status == 1) {
                          successalrt.present();

                          _this2.navCtrl.navigateForward('checkout');

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
            this.navCtrl.navigateForward('checkout');
          }
        }]);

        return CheckoutAddressaddPage;
      }();

      CheckoutAddressaddPage.ctorParameters = function () {
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

      CheckoutAddressaddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-addressadd',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkout-addressadd.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressadd/checkout-addressadd.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkout-addressadd.page.scss */
        "./src/app/checkout-addressadd/checkout-addressadd.page.scss"))["default"]]
      })], CheckoutAddressaddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkout-addressadd-checkout-addressadd-module-es5.js.map