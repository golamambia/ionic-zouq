(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-failed-order-failed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-failed/order-failed.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-failed/order-failed.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n<div class=\"success_message_area\">\n      <div class=\"container\">\n        <div class=\"success_logo\"><img src=\"assets/remove.png\" alt=\"remove\" title=\"\"></div>\n        <h1>Order Failed</h1>\n        <h2>Oops !</h2>\n        <p>Something went wrong, try again</p>\n        <button class=\"btn-success\" routerLink=\"/\">go to home</button>\n      </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/order-failed/order-failed-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/order-failed/order-failed-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderFailedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailedPageRoutingModule", function() { return OrderFailedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_failed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-failed.page */ "./src/app/order-failed/order-failed.page.ts");




const routes = [
    {
        path: '',
        component: _order_failed_page__WEBPACK_IMPORTED_MODULE_3__["OrderFailedPage"]
    }
];
let OrderFailedPageRoutingModule = class OrderFailedPageRoutingModule {
};
OrderFailedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderFailedPageRoutingModule);



/***/ }),

/***/ "./src/app/order-failed/order-failed.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-failed/order-failed.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderFailedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailedPageModule", function() { return OrderFailedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_failed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-failed-routing.module */ "./src/app/order-failed/order-failed-routing.module.ts");
/* harmony import */ var _order_failed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-failed.page */ "./src/app/order-failed/order-failed.page.ts");







let OrderFailedPageModule = class OrderFailedPageModule {
};
OrderFailedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_failed_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderFailedPageRoutingModule"]
        ],
        declarations: [_order_failed_page__WEBPACK_IMPORTED_MODULE_6__["OrderFailedPage"]]
    })
], OrderFailedPageModule);



/***/ }),

/***/ "./src/app/order-failed/order-failed.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-failed/order-failed.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  padding: 0 1em;\n}\n.success_message_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.success_message_area .success_logo {\n  width: 100%;\n  max-width: 100px;\n  margin: 0 auto 5px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.success_message_area .success_logo img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.success_message_area h1 {\n  width: 100%;\n  margin: 0 0 20px;\n  padding: 0 0;\n  font-size: 22px;\n  color: #000;\n  text-align: center;\n}\n.success_message_area h2 {\n  width: 100%;\n  margin: 0 0 5px;\n  padding: 0 0 0;\n  color: #000;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n}\n.success_message_area p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n.success_message_area .btn-success {\n  content: \"\";\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  margin: 0 auto;\n  width: 300px;\n  border: 1px solid #ff0000;\n  background: #ff0000;\n  color: #fff;\n  padding: 13px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZmFpbGVkL29yZGVyLWZhaWxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSx5RkFBQTtBQUVSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUFEO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1mYWlsZWQvb3JkZXItZmFpbGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHotaW5kZXg6MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIC5zdWNjZXNzX2xvZ297XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSAuc3VjY2Vzc19sb2dvIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIGgxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSBoMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgLmJ0bi1zdWNjZXNzIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICByaWdodDogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/order-failed/order-failed.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-failed/order-failed.page.ts ***!
  \***************************************************/
/*! exports provided: OrderFailedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailedPage", function() { return OrderFailedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderFailedPage = class OrderFailedPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderFailedPage.ctorParameters = () => [];
OrderFailedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-failed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-failed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-failed/order-failed.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-failed.page.scss */ "./src/app/order-failed/order-failed.page.scss")).default]
    })
], OrderFailedPage);



/***/ })

}]);
//# sourceMappingURL=order-failed-order-failed-module-es2015.js.map