(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-online-checkout-online-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-online/checkout-online.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-online/checkout-online.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n          <i class=\"zmdi zmdi-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Checkout</div>\n      </div>\n    </div>\n    \n     \n      \n      \n    <div class=\"dtlCheckout\">\n      <div class=\"container\">\n        <h3>Order Summery</h3>\n        <div class=\"billings\">\n          <ul class=\"billDtl\">\n            <li *ngFor=\"let menulist of cartdata ; let i=index;\">\n              <span class=\"itemTitle\">{{menulist.menu_name}}</span>\n              <span class=\"itemTitle\">Qty {{menulist.quantity}}X{{(menulist.menu_price)}}</span>\n              <span class=\"itemRate\">€{{(menulist.menu_price*menulist.quantity).toFixed(2)}}</span>\n            </li>\n            <li>\n              <span class=\"itemTitle\">Delivery charge</span>\n              <span class=\"itemTitle\"></span>\n              <span class=\"itemRate\">€2.50</span>\n            </li>\n            <li class=\"amountTotal\">\n              <span class=\"itemTitle\">To Pay</span>\n              <span class=\"itemRate\">€{{topay_amt.toFixed(2)}}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"delevary_time_area\">\n      <div class=\"container\">\n        <div class=\"delevary_time_body\">\n          <h3>Credit/Debit Cards</h3>\n          <div class=\"delivery_box\">\n            \n            <div class=\"delivery\">\n              \n              <div class=\"form-group\">\n              \t<label class=\"radio-inline\">\n                 Name on Card\n                </label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cardname\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Name\">\n              </div>\n            </div>\n\n            \n            <div class=\"delivery\">\n              \n              <div class=\"form-group\">\n              \t<label class=\"radio-inline\">\n                 Card Number\n                </label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cardNumber\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Number\">\n              </div>\n            </div>\n\n             \n            <div class=\"delivery\">\n              \n              <div class=\"form-group\">\n              \t<label class=\"radio-inline\">\n                Expiration Month\n                </label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"expiryMonth\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"MM\">\n              </div>\n            </div>\n\n\n             \n            <div class=\"delivery\">\n              \n              <div class=\"form-group\">\n              \t<label class=\"radio-inline\">\n                 Expiration Year\n                </label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"expiryYear\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"YYYY\">\n              </div>\n            </div>\n\n             \n            <div class=\"delivery\">\n              \n              <div class=\"form-group\">\n              \t<label class=\"radio-inline\">\n                 CVC\n                </label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cvc\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Ex. 123\">\n              </div>\n            </div>\n\n\n          </div>\n\n\n\n\n          \n        </div>\n      </div>\n    </div>\n    \n      \n      \n<div class=\"bottom-actionWrapper\">\n        <div class=\"btn-action\">\n          <span class=\"total\">Total: €{{topay_amt.toFixed(2)}}</span>\n          <button class=\"btn-default\" (click)=\"book_order()\">PROCEED <i class=\"fas fa-long-arrow-alt-right\"></i></button>\n        </div>\n        \n      </div>\n      \n   \n\n    \n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/checkout-online/checkout-online-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/checkout-online/checkout-online-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CheckoutOnlinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOnlinePageRoutingModule", function() { return CheckoutOnlinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkout_online_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-online.page */ "./src/app/checkout-online/checkout-online.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_online_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutOnlinePage"]
    }
];
let CheckoutOnlinePageRoutingModule = class CheckoutOnlinePageRoutingModule {
};
CheckoutOnlinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutOnlinePageRoutingModule);



/***/ }),

/***/ "./src/app/checkout-online/checkout-online.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/checkout-online/checkout-online.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutOnlinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOnlinePageModule", function() { return CheckoutOnlinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_online_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-online-routing.module */ "./src/app/checkout-online/checkout-online-routing.module.ts");
/* harmony import */ var _checkout_online_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-online.page */ "./src/app/checkout-online/checkout-online.page.ts");







let CheckoutOnlinePageModule = class CheckoutOnlinePageModule {
};
CheckoutOnlinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_online_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutOnlinePageRoutingModule"]
        ],
        declarations: [_checkout_online_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutOnlinePage"]]
    })
], CheckoutOnlinePageModule);



/***/ }),

/***/ "./src/app/checkout-online/checkout-online.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/checkout-online/checkout-online.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n  position: fixed;\n  z-index: 11;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.delevary_address h3 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 15px 0 15px;\n  padding: 0 0;\n  color: #000000;\n  font-size: 18px;\n}\n.delevary_address .address_area {\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  padding-left: 70px;\n  position: relative;\n}\n.address_area_inner {\n  overflow: scroll;\n  box-sizing: border-box;\n  padding: 10px;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box {\n  background-color: #FFF;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box .add_icon {\n  color: #000000;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box h4 {\n  color: #000000;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box h5 {\n  color: #000000;\n}\n.address_area_inner ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: table;\n  width: 100%;\n}\n.address_area_inner ul li {\n  display: table-cell;\n  vertical-align: top;\n}\n.delevary_address .address_area .add_address {\n  /* display: inline-block; */\n  min-height: 120px;\n  background: #ff0000;\n  padding: 20px 15px;\n  border: 1px solid #ff0000;\n  color: #fff;\n  box-sizing: border-box;\n  font-size: 28px;\n  border-radius: 24px;\n  cursor: pointer;\n  vertical-align: top;\n  position: absolute;\n  left: 16px;\n  box-shadow: 0px 0px 10px #0000003d;\n  margin: 10px 0;\n  cursor: pointer;\n  outline: none;\n}\n.delevary_address .address_area .add_address:hover {\n  background-color: #000;\n  color: #fff;\n}\n.delevary_address .address_area .address_box {\n  width: 240px;\n  height: 120px;\n  box-sizing: border-box;\n  padding: 20px 50px 20px 20px;\n  border-radius: 20px;\n  background: #000;\n  margin-right: 12px;\n  position: relative;\n  box-shadow: 0px 0px 20px #0000002e;\n  border: none;\n  text-align: left;\n  vertical-align: text-top;\n  display: block;\n  margin-right: 24px;\n  outline: none;\n}\n.delevary_address .address_area .address_box .add_icon {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: #ffffff;\n  font-size: 22px;\n}\n.delevary_address .address_area .address_box h4 {\n  width: 100%;\n  margin: 0 0 0;\n  padding: 0 0;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: -44px;\n  line-height: 24px;\n}\n.delevary_address .address_area .address_box h5 {\n  float: right;\n  margin: 0 0;\n  padding: 0 0;\n  color: #ffffff;\n  font-size: 12px;\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n}\n.delevary_address .address_area .address_box h5 i {\n  color: #52ca0f;\n}\n.delevary_address {\n  margin-top: 20px;\n}\n.delevary_address h3 {\n  margin: 0;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n/*------- checkout area css stop --------*/\n.dtlCheckout .billings {\n  background-color: #ece8e8;\n  padding: 1em;\n}\n.dtlCheckout .billings .billDtl {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.dtlCheckout .billings .billDtl li {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n}\n.dtlCheckout .billings .billDtl li span:first-child {\n  max-width: 40%;\n  width: 100%;\n}\n.dtlCheckout .billings .billDtl li:not(.amountTotal) {\n  color: #000;\n}\n.dtlCheckout .billings .billDtl li.amountTotal {\n  border-top: 1px dashed #6e7faa4d;\n  margin-top: 0.5em;\n  padding-top: 1em;\n}\n.dtlCheckout .billings .billDtl li.amountTotal .itemTitle, .dtlCheckout .billings .billDtl li.amountTotal .itemRate {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #000;\n}\n.dtlCheckout {\n  margin-top: 70px;\n}\n.dtlCheckout h3 {\n  margin: 0;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.billHeading {\n  padding-bottom: 65px;\n}\n.billHeading .payOptTop {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding-top: 1.1em;\n  align-items: center;\n}\n.billHeading .payOptTop .payTitle, .billHeading .payOptTop .newAdd {\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.billHeading .payOptTop .newAdd {\n  padding: 3px 7px;\n  font-size: 14px;\n  border: 1px solid #ff0000;\n  text-transform: capitalize;\n  background-color: transparent;\n  color: #ff0000;\n  cursor: pointer;\n  outline: none;\n  font-family: \"Poppins\", sans-serif;\n}\n.billHeading .payOptTop .newAdd:hover {\n  background-color: #fe5632;\n  color: #fff;\n}\n.billHeading .payOpt {\n  list-style: none;\n  padding: 0;\n}\n.billHeading .payOpt li:first-child {\n  padding-top: 0;\n}\n.billHeading .payOpt li {\n  display: flex !important;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  justify-content: center !important;\n  align-items: center;\n}\n.billHeading .payOpt li .dtl {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n.billHeading .payOpt li .price {\n  margin-left: auto;\n}\n.billHeading .payOpt li .dtl .itemImgWra {\n  height: 3em;\n  width: 3em;\n  justify-content: center !important;\n  align-items: center;\n  margin-right: 1em;\n}\n.bottom-actionWrapper {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n}\n.bottom-actionWrapper .btn-action {\n  display: flex !important;\n  background-color: #ffffff;\n  align-items: center;\n  padding: 10px 1em;\n}\n.bottom-actionWrapper .btn-action .total {\n  font-size: 1.4em;\n  font-weight: bold;\n  color: #000;\n}\n.bottom-actionWrapper .btn-action .btn-default {\n  margin-left: auto;\n  background: #ff0000;\n  cursor: pointer;\n  color: #ffffff;\n  padding: 1em 1.5em;\n  font-size: 15px;\n  border-radius: 0;\n  letter-spacing: 1.3px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n}\n/*------- new css start ---------*/\n.delevary_time_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 6px 0px 80px;\n}\n.delevary_time_area .delevary_time_body {\n  width: 100%;\n  box-sizing: border-box;\n}\n.delevary_time_area .delevary_time_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n  color: #000;\n  text-transform: capitalize;\n}\n.delevary_time_area .delevary_time_body .delivery_box {\n  width: 100%;\n  background-color: #ece8e8;\n  padding: 1em;\n}\n.delevary_time_area .delevary_time_body .delivery_box ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n}\n.delevary_time_area .delevary_time_body .delivery_box ul li {\n  display: inline-block;\n  list-style: none;\n  margin-right: 5px;\n}\n.delevary_time_area .delevary_time_body .delivery_box ul li:last-child {\n  margin-right: 0px;\n}\n.delevary_time_area .delevary_time_body .delivery_box label {\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 15px;\n  margin-bottom: 10px !important;\n  padding-bottom: 0;\n  margin-top: 0;\n  display: inline-block;\n}\n.delevary_time_area .delevary_time_body .delivery_box .delivery {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n}\n.delevary_time_area .delevary_time_body .delivery_box .delivery .form-group {\n  display: inline-block;\n  width: 100%;\n}\n.delevary_time_area .delevary_time_body .delivery_box .delivery .form-group .form-control {\n  width: 100%;\n  box-sizing: border-box;\n  height: 38px;\n  padding: 8px 10px;\n  border: 1px solid #adadad;\n}\n/*------- new css stop ---------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQtb25saW5lL2NoZWNrb3V0LW9ubGluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSx5RkFBQTtBQUVSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUFEO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRko7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMkNBQUE7QUFBSjtBQUlBO0VBQ0ksc0JBQUE7QUFESjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBU0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU5KO0FBUUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUxKO0FBT0E7RUFBeUQsc0JBQUE7QUFIekQ7QUFJQTtFQUNHLGNBQUE7QUFESDtBQUdBO0VBQ0UsY0FBQTtBQUFGO0FBRUE7RUFFSSxjQUFBO0FBQUo7QUFHQTtFQUNDLFNBQUE7RUFDRyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Es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QUFBO0VBQ0EsV0FBQTtBQWlCSjtBQWZBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFrQko7QUFmQSxrQ0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFrQko7QUFoQkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUFtQko7QUFqQkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBb0JKO0FBbEJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXFCSjtBQW5CQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXNCSjtBQXBCQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXVCSjtBQXJCQTtFQUNJLGlCQUFBO0FBd0JKO0FBdEJBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBeUJKO0FBdkJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBMEJKO0FBeEJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBMkJKO0FBekJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUE0Qko7QUExQkEsaUNBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC1vbmxpbmUvY2hlY2tvdXQtb25saW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHotaW5kZXg6MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3AtbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcbi50b3AtbmF2IC5idG4tYmFjayB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udG9wLW5hdiAudGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1NjMyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiKDAgMCAwIC8gMjQlKTtcclxufVxyXG5cclxuXHJcbi5mdWxsLXNjcmVlbi5jYXJ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcblxyXG5cclxuLmRlbGV2YXJ5X2FkZHJlc3MgaDN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDE1cHggMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxufVxyXG4uYWRkcmVzc19hcmVhX2lubmVyIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYWRkcmVzc19hcmVhX2lubmVyIHVsIGxpOm50aC1vZi10eXBlKDJuKSAuYWRkcmVzc19ib3ggeyBiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7fSBcclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bCBsaTpudGgtb2YtdHlwZSgybikgLmFkZHJlc3NfYm94IC5hZGRfaWNvbiB7XHJcbiAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5hZGRyZXNzX2FyZWFfaW5uZXIgdWwgbGk6bnRoLW9mLXR5cGUoMm4pIC5hZGRyZXNzX2JveCBoNCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bCBsaTpudGgtb2YtdHlwZSgybikgLmFkZHJlc3NfYm94IGg1IHtcclxuICAgIFxyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgXHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bHtcclxuXHRtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuXHJcbi5kZWxldmFyeV9hZGRyZXNzIC5hZGRyZXNzX2FyZWEgLmFkZF9hZGRyZXNzIHtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0b3V0bGluZTpub25lO1xyXG59XHJcbi5kZWxldmFyeV9hZGRyZXNzIC5hZGRyZXNzX2FyZWEgLmFkZF9hZGRyZXNzOmhvdmVyeyBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7IGNvbG9yOiNmZmY7fVxyXG4uZGVsZXZhcnlfYWRkcmVzcyAuYWRkcmVzc19hcmVhIC5hZGRyZXNzX2JveCB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjMDAwMDAwMmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcblx0b3V0bGluZTpub25lO1xyXG59XHJcbi5kZWxldmFyeV9hZGRyZXNzIC5hZGRyZXNzX2FyZWEgLmFkZHJlc3NfYm94IC5hZGRfaWNvbiB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSAuYWRkcmVzc19ib3ggaDQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAwO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTQ0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzcyAuYWRkcmVzc19hcmVhIC5hZGRyZXNzX2JveCBoNSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSAuYWRkcmVzc19ib3ggaDUgaSB7XHJcbiAgICBjb2xvcjogIzUyY2EwZjtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzc3sgbWFyZ2luLXRvcDoyMHB4fVxyXG4uZGVsZXZhcnlfYWRkcmVzcyBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLyotLS0tLS0tIGNoZWNrb3V0IGFyZWEgY3NzIHN0b3AgLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZHRsQ2hlY2tvdXQgLmJpbGxpbmdzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2U4ZTg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuLmR0bENoZWNrb3V0IC5iaWxsaW5ncyAuYmlsbER0bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uZHRsQ2hlY2tvdXQgLmJpbGxpbmdzIC5iaWxsRHRsIGxpIHtcclxuICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG59XHJcbi5kdGxDaGVja291dCAuYmlsbGluZ3MgLmJpbGxEdGwgbGkgc3BhbjpmaXJzdC1jaGlsZHsgbWF4LXdpZHRoOjQwJTsgd2lkdGg6MTAwJTt9XHJcbi5kdGxDaGVja291dCAuYmlsbGluZ3MgLmJpbGxEdGwgbGk6bm90KC5hbW91bnRUb3RhbCkge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmR0bENoZWNrb3V0IC5iaWxsaW5ncyAuYmlsbER0bCBsaS5hbW91bnRUb3RhbCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM2ZTdmYWE0ZDtcclxuICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcbi5kdGxDaGVja291dCAuYmlsbGluZ3MgLmJpbGxEdGwgbGkuYW1vdW50VG90YWwgLml0ZW1UaXRsZSwgLmR0bENoZWNrb3V0IC5iaWxsaW5ncyAuYmlsbER0bCBsaS5hbW91bnRUb3RhbCAuaXRlbVJhdGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmR0bENoZWNrb3V0eyBtYXJnaW4tdG9wOjcwcHh9XHJcbi5kdGxDaGVja291dCBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYmlsbEhlYWRpbmd7IHBhZGRpbmctYm90dG9tOjY1cHg7fVxyXG4uYmlsbEhlYWRpbmcgLnBheU9wdFRvcCB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxLjFlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJpbGxIZWFkaW5nIC5wYXlPcHRUb3AgLnBheVRpdGxlLCAgLmJpbGxIZWFkaW5nIC5wYXlPcHRUb3AgLm5ld0FkZCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJpbGxIZWFkaW5nIC5wYXlPcHRUb3AgLm5ld0FkZCB7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0VG9wIC5uZXdBZGQ6aG92ZXJ7IGJhY2tncm91bmQtY29sb3I6I2ZlNTYzMjsgY29sb3I6I2ZmZjt9XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0IGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0IGxpIHtcclxuICAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAuMmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4yZW07XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYmlsbEhlYWRpbmcgLnBheU9wdCBsaSAuZHRsIHtcclxuICAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0IGxpIC5wcmljZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uYmlsbEhlYWRpbmcgLnBheU9wdCBsaSAuZHRsIC5pdGVtSW1nV3JhIHtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5ib3R0b20tYWN0aW9uV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4uYm90dG9tLWFjdGlvbldyYXBwZXIgLmJ0bi1hY3Rpb24ge1xyXG4gICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFlbTtcclxufVxyXG4uYm90dG9tLWFjdGlvbldyYXBwZXIgLmJ0bi1hY3Rpb24gLnRvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5ib3R0b20tYWN0aW9uV3JhcHBlciAuYnRuLWFjdGlvbiAuYnRuLWRlZmF1bHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLSBuZXcgY3NzIHN0YXJ0IC0tLS0tLS0tLSovXHJcbi5kZWxldmFyeV90aW1lX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNnB4IDBweCA4MHB4O1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZGVsZXZhcnlfdGltZV9hcmVhIC5kZWxldmFyeV90aW1lX2JvZHkgaDN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSAuZGVsaXZlcnlfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZThlODtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uZGVsZXZhcnlfdGltZV9hcmVhIC5kZWxldmFyeV90aW1lX2JvZHkgLmRlbGl2ZXJ5X2JveCB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSAuZGVsaXZlcnlfYm94IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSAuZGVsaXZlcnlfYm94IHVsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uZGVsZXZhcnlfdGltZV9hcmVhIC5kZWxldmFyeV90aW1lX2JvZHkgLmRlbGl2ZXJ5X2JveCBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5IC5kZWxpdmVyeV9ib3ggLmRlbGl2ZXJ5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG4uZGVsZXZhcnlfdGltZV9hcmVhIC5kZWxldmFyeV90aW1lX2JvZHkgLmRlbGl2ZXJ5X2JveCAuZGVsaXZlcnkgLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGVsZXZhcnlfdGltZV9hcmVhIC5kZWxldmFyeV90aW1lX2JvZHkgLmRlbGl2ZXJ5X2JveCAuZGVsaXZlcnkgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbn1cclxuLyotLS0tLS0tIG5ldyBjc3Mgc3RvcCAtLS0tLS0tLS0qL1xyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/checkout-online/checkout-online.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/checkout-online/checkout-online.page.ts ***!
  \*********************************************************/
/*! exports provided: CheckoutOnlinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOnlinePage", function() { return CheckoutOnlinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CheckoutOnlinePage = class CheckoutOnlinePage {
    constructor(http, navCtrl, storage, loadingController, alertController, toastController, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.route = route;
        this.appUrl = "https://digiworld.ie/project/zouq/api/getAddress";
        this.bookUrl = "https://digiworld.ie/project/zouq/api/place_order";
        this.cart_data = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.cart = [];
        this.cartdata = [];
        this.currentSelected = null;
        this.datap = {
            paytyp: 'cod'
        };
        this.use_voucher = '';
        this.use_voucher_check = 0;
        this.voucher_amt = 0;
        this.topay_amt = 0;
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                //console.log(this.userDetails);
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userCart").then(val => {
            if (val) {
                this.userCart = val;
                //this.cart_data = val;
                //console.log(val);
            }
        });
        this.getCartItemCount();
        //this.listing();
        this.route.queryParams.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.addressid = params.address;
                //console.log(this.edit_id);
                if (params.use_voucher == 'true') {
                    this.use_voucher = 'true';
                    this.storage.get("userDetails").then(val => {
                        if (val) {
                            this.userDetails = val;
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                            this.http.post(this.appUrl + '/' + this.userDetails.user_id, { data: '' }, { headers: headers })
                                .subscribe(res => {
                                this.res = res.json();
                                this.voucher_amt = this.res.voucher_amount;
                                this.topay_amt = (this.cartTotalAmount - this.voucher_amt) + 2.50;
                                //console.log(this.topay_amt);
                            }, (err) => {
                                console.log(err);
                                //loading.dismiss();
                            });
                        }
                    });
                    // console.log(this.voucher_amt);
                }
            }
        });
    }
    listing() {
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                var data = {
                    "userId": this.userDetails.user_id,
                };
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                //console.log(this.userDetails.user_id);
                this.http.post(this.appUrl + '/' + this.userDetails.user_id, { data: '' }, { headers: headers })
                    .subscribe(res => {
                    this.res = res.json();
                    //console.log(this.res.voucher_amount);
                    //this.voucher_amt=this.res.voucher_amount;
                    if (this.res.addresses) {
                        this.address_list = this.res.addresses;
                    }
                    else {
                        //alert("Server error");
                        //loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    //loading.dismiss();
                });
            }
        });
    }
    getCartItemCount() {
        //let count=0;
        this.cartdata = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.storage.get("userCart").then(val => {
            if (val) {
                for (let p of this.userCart) {
                    if (p.quantity > 0) {
                        this.count += 1;
                        this.cartTotalAmount += p.menu_price * p.quantity;
                        this.cartdata.push(p);
                    }
                }
                this.cart_data = this.cartdata;
                this.cartTotal = this.count;
                this.cartcount = this.count;
                this.menu_list = this.cartdata;
                //console.log(this.cartdata);
            }
            else {
                this.cartTotal = this.count;
                this.menu_list = this.cartdata;
            }
        });
    }
    book_order() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Checking...'
            });
            const alert = yield this.alertController.create({
                message: 'Something is wrong',
                buttons: ['OK']
            });
            const successalrt = yield this.alertController.create({
                message: 'Thank you ',
                buttons: ['OK']
            });
            const namealert = yield this.alertController.create({
                message: 'Please enter name',
                buttons: ['OK']
            });
            const cardNumberalert = yield this.alertController.create({
                message: 'Please enter card number',
                buttons: ['OK']
            });
            const expiryMonthalert = yield this.alertController.create({
                message: 'Please enter expiry month',
                buttons: ['OK']
            });
            const expiryYearalert = yield this.alertController.create({
                message: 'Please enter expiry year',
                buttons: ['OK']
            });
            const cvcalert = yield this.alertController.create({
                message: 'Please enter cvc no',
                buttons: ['OK']
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (this.cardname == '' || this.cardname == null) {
                loading.dismiss();
                namealert.present();
            }
            else if (this.cardNumber == '' || this.cardNumber == null) {
                loading.dismiss();
                cardNumberalert.present();
            }
            else if (this.expiryMonth == '' || this.expiryMonth == null) {
                loading.dismiss();
                expiryMonthalert.present();
            }
            else if (this.expiryYear == '' || this.expiryYear == null) {
                loading.dismiss();
                expiryYearalert.present();
            }
            else if (this.cvc == '' || this.cvc == null) {
                loading.dismiss();
                cvcalert.present();
            }
            else {
                yield loading.present();
                var data = {
                    "cartTotalAmount": this.cartTotalAmount,
                    "userid": this.userDetails.user_id,
                    "name": this.userDetails.user.name,
                    "order_method": 'delivery',
                    "paymod": 'online',
                    "deliver_address": this.addressid,
                    "phone": this.userDetails.user.phone,
                    "pickup_delivery": 'soon',
                    "cart_data": this.cart_data,
                    "cardname": this.cardname,
                    "cardNumber": this.cardNumber,
                    "expiryMonth": this.expiryMonth,
                    "expiryYear": this.expiryYear,
                    "cvc": this.cvc,
                    "use_voucher": this.use_voucher,
                };
                this.http.post(this.bookUrl, data, { headers: headers })
                    .subscribe(res => {
                    this.cardname = '';
                    this.cardNumber = '';
                    this.expiryMonth = '';
                    this.expiryYear = '';
                    this.cvc = '';
                    //console.log(res.json());
                    this.res = res.json();
                    if (this.res.status == 0) {
                        loading.dismiss();
                        this.navCtrl.navigateForward('order-failed');
                    }
                    else if (this.res.status == 1) {
                        this.storage.remove("userCart");
                        this.navCtrl.navigateForward('order-success');
                        loading.dismiss();
                    }
                    else {
                        alert.present();
                        //alert("Server error");
                        loading.dismiss();
                    }
                }, (err) => {
                    //console.log(err);
                    alert.present();
                    loading.dismiss();
                });
            }
        });
    }
    back() {
        this.navCtrl.navigateForward('checkout');
    }
};
CheckoutOnlinePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
CheckoutOnlinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-online',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout-online.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-online/checkout-online.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout-online.page.scss */ "./src/app/checkout-online/checkout-online.page.scss")).default]
    })
], CheckoutOnlinePage);



/***/ })

}]);
//# sourceMappingURL=checkout-online-checkout-online-module-es2015.js.map