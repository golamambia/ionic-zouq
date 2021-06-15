(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n<ion-toolbar>\n<ion-title>sidebar</ion-title>\n</ion-toolbar>\n</ion-header> -->\n<ion-content>\n\n\n<div class=\"menubox\" (ionWillOpen)=\"menuOpened1()\">\n  <div class=\"menu_head\">\n    \n    <button class=\"btn-back\" (click)=\"back()\"> <i class=\"zmdi zmdi-arrow-left\"></i> </button>\n    <h1>settings</h1>\n  </div>\n  <div class=\"menu_body\">\n    <ul>\n      <li><button routerLink=\"/\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Home<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/book-table\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Book Table<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/gift-voucher\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Gift Voucher<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/gallery\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Gallery<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/order-list\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> My Order<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/voucher-orderlist\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> My Voucher<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/address-list\"><span><img src=\"assets/menuicon2.png\"  alt=\"\"></span> Address<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/profile\"><span><img src=\"assets/menuicon2.png\"  alt=\"\"></span> profile<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      \n      <li *ngIf=\"!userDetails\"><button routerLink=\"/login\"><span><img src=\"assets/menuicon2.png\"  alt=\"\"></span> Login<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"!userDetails\"><button routerLink=\"/register\"><span><img src=\"assets/menuicon2.png\"  alt=\"\"></span> Registration<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/change-password\"><span><img src=\"assets/menuicon2.png\"  alt=\"\"></span> Change Password<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n\n      <li><button routerLink=\"/contact\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Contact us<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/about\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> About<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/privacy-policy\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Privacy Policy<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/term-condition\"><span><img src=\"assets/menuicon1.png\"  alt=\"\"></span> Terms & Conditions<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\" (click)=\"logout()\"><button><span><img src=\"assets/menuicon7.png\"  alt=\"\"></span>Logout<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n    </ul>\n  </div>\n</div>\n\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/sidebar/sidebar-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sidebar/sidebar-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SidebarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageRoutingModule", function() { return SidebarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.page */ "./src/app/sidebar/sidebar.page.ts");




const routes = [
    {
        path: '',
        component: _sidebar_page__WEBPACK_IMPORTED_MODULE_3__["SidebarPage"]
    }
];
let SidebarPageRoutingModule = class SidebarPageRoutingModule {
};
SidebarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SidebarPageRoutingModule);



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageModule", function() { return SidebarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-routing.module */ "./src/app/sidebar/sidebar-routing.module.ts");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.page */ "./src/app/sidebar/sidebar.page.ts");







let SidebarPageModule = class SidebarPageModule {
};
SidebarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SidebarPageRoutingModule"]
        ],
        declarations: [_sidebar_page__WEBPACK_IMPORTED_MODULE_6__["SidebarPage"]]
    })
], SidebarPageModule);



/***/ }),

/***/ "./src/app/sidebar/sidebar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  background-color: #ffffff;\n  font-family: \"Poppins\", sans-serif;\n}\n.menubox {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  box-shadow: none;\n  box-sizing: border-box;\n  z-index: 9999;\n  background-color: #000;\n}\n.menu_head:after, .menu_head:before {\n  content: \"\";\n  display: table;\n}\n.menu_head:after {\n  clear: both;\n}\n.menu_head {\n  position: relative;\n  padding: 15px 30px;\n  box-sizing: border-box;\n}\n.menu_head button.btn-back {\n  font-size: 30px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  line-height: 30px;\n  color: #fff;\n}\n.menu_head h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: capitalize;\n  margin-top: 10px;\n  color: #fff;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding-left: 15px;\n}\n.menu_body {\n  padding: 15px 15px 15px 30px;\n  overflow-y: auto;\n  height: 100vh;\n  padding-bottom: 80px;\n}\n.menu_body ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.menu_body ul li {\n  display: block;\n  margin-bottom: 8px;\n}\n.menu_body ul li button {\n  width: 90%;\n  text-align: left;\n  border: none;\n  background-color: transparent;\n  padding: 4px 0;\n  text-transform: capitalize;\n  font-size: 18px;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\n.menu_body ul li button:hover {\n  color: #fe5632;\n}\n.menu_body ul li button i {\n  /* margin-right: 6px; */\n  opacity: 0.9;\n  font-size: 30px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -ms-transition: translate(0%, -50%);\n  -o-transition: translate(0%, -50%);\n  -moz-transition: translate(0%, -50%);\n  transform: translate(0%, -50%);\n}\n.menu_body ul li button span {\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  vertical-align: middle;\n  background-color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 45px;\n  margin-right: 10px;\n  position: relative;\n}\n.menu_body ul li button img {\n  width: 100%;\n  max-width: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transition: translate(-50%, -50%);\n  -o-transition: translate(-50%, -50%);\n  -moz-transition: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  /* display: inline-block; */\n  /* vertical-align: 0; */\n}\n.recomendedvideo_area {\n  width: 100%;\n}\n.recomendedvideo_area ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: table;\n  width: 100%;\n}\n.recomendedvideo_area ul li {\n  display: table-cell;\n  vertical-align: top;\n}\n.recomendedvideo_area ul li button {\n  width: 106px;\n  margin-right: 4px;\n  height: auto;\n  background-color: transparent;\n  border: 1px solid #000;\n  border: none;\n  border-radius: 0;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  display: block;\n  padding: 3px 5px;\n  cursor: pointer;\n  text-align: left;\n  color: rgba(255, 255, 255, 0.66);\n  font-size: 10px;\n}\n.recomendedvideo_area ul li button:hover {\n  opacity: 0.8;\n}\n.recomendedvideo_area ul li button img {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 6px;\n  display: flex;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 10px;\n}\n.recomendedvideo_area ul li button strong {\n  display: block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  margin-bottom: 5px;\n  color: #fff;\n}\nbutton.popupicon {\n  position: fixed;\n  bottom: 30px;\n  right: 15px;\n  background-color: #ffc930;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 40px;\n  border: none;\n  cursor: pointer;\n}\n.menu_body ul li button a {\n  text-decoration: none;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBQ1I7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBQ0E7QUFDQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVBO0FBQUE7RUFBcUMsV0FBQTtFQUFZLGNBQUE7QUFLakQ7QUFKQTtFQUFrQixXQUFBO0FBUWxCO0FBUEE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFVQTtBQVBBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVVBO0FBUkE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDSSxrQkFBQTtBQVdKO0FBVEE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBWUE7QUFWQTtFQUFlLFNBQUE7RUFBVSxVQUFBO0VBQVcsZ0JBQUE7QUFnQnBDO0FBZkE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFrQkE7QUFoQkE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQW1CQTtBQWpCQTtFQUErQixjQUFBO0FBcUIvQjtBQXBCQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBRUEsOEJBQUE7QUF1QkE7QUFyQkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF3QkE7QUF0QkE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFFQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUF3QkE7QUF0QkE7RUFBdUIsV0FBQTtBQTBCdkI7QUF6QkE7RUFBMEIsU0FBQTtFQUFVLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixjQUFBO0VBQWUsV0FBQTtBQWlDL0U7QUFoQ0E7RUFBNEIsbUJBQUE7RUFBcUIsbUJBQUE7QUFxQ2pEO0FBcENBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBdUNBO0FBckNBO0VBQTBDLFlBQUE7QUF5QzFDO0FBeENBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFLQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQTJDQTtBQXpDQTtFQUEyQyxjQUFBO0VBQWUsa0NBQUE7RUFBb0MsZUFBQTtFQUFnQixtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixXQUFBO0FBa0RySjtBQWpEQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQW9EQTtBQWxEQTtFQUNBLHFCQUFBO0VBQ0ksV0FBQTtBQXFESiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbmh0bWwsIGJvZHkge1xyXG5kaXNwbGF5OiBibG9jaztcclxuaGVpZ2h0OiAxMDAlO1xyXG5tYXJnaW46IDA7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbmZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1lbnVib3gge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbmxlZnQ6IDA7XHJcbnRvcDogMDtcclxuYm94LXNoYWRvdzogbm9uZTtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuei1pbmRleDogOTk5OTtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4ubWVudV9oZWFkOmFmdGVyLCAubWVudV9oZWFkOmJlZm9yZXsgY29udGVudDpcIlwiOyBkaXNwbGF5OnRhYmxlO31cclxuLm1lbnVfaGVhZDphZnRlcnsgY2xlYXI6Ym90aDt9XHJcbi5tZW51X2hlYWQge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnBhZGRpbmc6IDE1cHggMzBweDtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm1lbnVfaGVhZCBidXR0b24uYnRuLWJhY2sge1xyXG5mb250LXNpemU6IDMwcHg7XHJcbnBhZGRpbmc6IDA7XHJcbmJvcmRlcjogbm9uZTtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxub3V0bGluZTogbm9uZTtcclxubGluZS1oZWlnaHQ6IDMwcHg7XHJcbmNvbG9yOiAjZmZmO1xyXG59XHJcbi5tZW51X2hlYWQgaDEge1xyXG5tYXJnaW46IDA7XHJcbnBhZGRpbmc6IDA7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbmNvbG9yOiAjZmZmO1xyXG5sZXR0ZXItc3BhY2luZzogMXB4O1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLm1lbnVfYm9keSB7XHJcbnBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDMwcHg7XHJcbm92ZXJmbG93LXk6IGF1dG87XHJcbmhlaWdodDogMTAwdmg7XHJcbnBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcbi5tZW51X2JvZHkgdWx7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGxpc3Qtc3R5bGU6bm9uZTt9XHJcbi5tZW51X2JvZHkgdWwgbGkge1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWJvdHRvbTo4cHg7XHJcbn1cclxuLm1lbnVfYm9keSB1bCBsaSBidXR0b24ge1xyXG53aWR0aDogOTAlO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5ib3JkZXI6IG5vbmU7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5wYWRkaW5nOiA0cHggMDtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuY29sb3I6ICNmZmY7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxub3V0bGluZTpub25lO1xyXG5mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ubWVudV9ib2R5IHVsIGxpIGJ1dHRvbjpob3ZlcnsgY29sb3I6I2ZlNTYzMjt9XHJcbi5tZW51X2JvZHkgdWwgbGkgYnV0dG9uIGkge1xyXG4vKiBtYXJnaW4tcmlnaHQ6IDZweDsgKi9cclxub3BhY2l0eTogMC45O1xyXG5mb250LXNpemU6IDMwcHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxucmlnaHQ6IDA7XHJcbnRvcDogNTAlO1xyXG4tbXMtdHJhbnNpdGlvbjogdHJhbnNsYXRlKC0wJSwgLTUwJSk7XHJcbi1vLXRyYW5zaXRpb246IHRyYW5zbGF0ZSgtMCUsIC01MCUpO1xyXG4tbW96LXRyYW5zaXRpb246IHRyYW5zbGF0ZSgtMCUsIC01MCUpO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTUwJSk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTUwJSk7XHJcbn1cclxuLm1lbnVfYm9keSB1bCBsaSBidXR0b24gc3BhbiB7XHJcbndpZHRoOiA0NXB4O1xyXG5oZWlnaHQ6IDQ1cHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWVudV9ib2R5IHVsIGxpIGJ1dHRvbiBpbWcge1xyXG5cclxud2lkdGg6IDEwMCU7XHJcbm1heC13aWR0aDogMjBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo1MCU7XHJcbmxlZnQ6NTAlO1xyXG4tbXMtdHJhbnNpdGlvbjogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4tby10cmFuc2l0aW9uOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbi1tb3otdHJhbnNpdGlvbjogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4vKiB2ZXJ0aWNhbC1hbGlnbjogMDsgKi9cclxufVxyXG4ucmVjb21lbmRlZHZpZGVvX2FyZWF7IHdpZHRoOjEwMCU7fVxyXG4ucmVjb21lbmRlZHZpZGVvX2FyZWEgdWx7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGxpc3Qtc3R5bGU6bm9uZTsgZGlzcGxheTp0YWJsZTsgd2lkdGg6MTAwJTt9XHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYSB1bCBsaXtkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogdG9wO31cclxuLnJlY29tZW5kZWR2aWRlb19hcmVhIHVsIGxpIGJ1dHRvbiB7XHJcbndpZHRoOiAxMDZweDtcclxubWFyZ2luLXJpZ2h0OiA0cHg7XHJcbmhlaWdodDogYXV0bztcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbmJvcmRlcjogbm9uZTtcclxuYm9yZGVyLXJhZGl1czogMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5kaXNwbGF5OiBibG9jaztcclxucGFkZGluZzogM3B4IDVweDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpO1xyXG5mb250LXNpemU6MTBweDtcclxufVxyXG4ucmVjb21lbmRlZHZpZGVvX2FyZWEgdWwgbGkgYnV0dG9uOmhvdmVyeyBvcGFjaXR5OjAuODt9XHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYSB1bCBsaSBidXR0b24gaW1nIHtcclxud2lkdGg6IDEwMCU7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlci1yYWRpdXM6IDZweDtcclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbmRpc3BsYXk6IC1tb3otYm94O1xyXG5kaXNwbGF5OiAtbXMtZmxleGJveDtcclxuZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5oZWlnaHQ6IDEzMHB4O1xyXG5vYmplY3QtZml0OiBjb3ZlcjtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYSB1bCBsaSBidXR0b24gc3Ryb25neyBkaXNwbGF5OmJsb2NrOyBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmb250LXNpemU6MTJweDsgZm9udC13ZWlnaHQ6bm9ybWFsOyBtYXJnaW4tYm90dG9tOjVweDsgY29sb3I6I2ZmZjt9XHJcbmJ1dHRvbi5wb3B1cGljb24ge1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbmJvdHRvbTogMzBweDtcclxucmlnaHQ6IDE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmM5MzA7XHJcbndpZHRoOiA0MHB4O1xyXG5oZWlnaHQ6IDQwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5saW5lLWhlaWdodDogNDBweDtcclxuYm9yZGVyOiBub25lO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnVfYm9keSB1bCBsaSBidXR0b24gYSB7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sidebar/sidebar.page.ts ***!
  \*****************************************/
/*! exports provided: SidebarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPage", function() { return SidebarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









let SidebarPage = class SidebarPage {
    constructor(platform, splashScreen, statusBar, menu, navCtrl, storage, location) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.location = location;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
            }
        });
    }
    logout() {
        this.storage.remove("userDetails");
        this.userDetails = null;
        this.navCtrl.navigateForward('home');
        //this.menu.close();
    }
    back() {
        this.navCtrl.navigateForward('/');
        //this.location.back();
    }
};
SidebarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
SidebarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-sidebar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.page.scss */ "./src/app/sidebar/sidebar.page.scss")).default]
    })
], SidebarPage);



/***/ })

}]);
//# sourceMappingURL=sidebar-sidebar-module-es2015.js.map