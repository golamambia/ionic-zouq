(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n  \t<button class=\"btn-back\"> <i class=\"zmdi zmdi-arrow-left\"></i> </button>\n    <ion-title>profile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"loginarea\">\n       <div class=\"login_top\">\n         <div class=\"container\">\n          <!-- <button class=\"edit\"><img src=\"assets/edit.png\" alt=\"\"></button> -->\n           <button class=\"btn-back\" (click)=\"back()\"> <i class=\"zmdi zmdi-arrow-left\"></i> </button>\n         </div>\n       </div>\n       <div class=\"login_formbox\">\n         <div class=\"container\">\n           <div class=\"loginform\">\n                <div class=\"edit_imgarea\">\n                   <div class=\"editimg\">\n                     <img src=\"assets/img-4.jpg\" alt=\"\"> \n                     <!--  <img *ngIf=\"userData?.profile_pic\" src=\"{{userData?.pic_url}}{{userData?.profile_pic}}\"> -->\n                     <button><i class=\"fas fa-camera\"></i></button>\n                   </div>\n                   <h2 *ngIf=\"htmlYouWantToAdd\" [innerHTML]=\"htmlYouWantToAdd\">{{userData?.name}}</h2>\n                   <h2 *ngIf=\"!htmlYouWantToAdd\" >{{userData?.name}}</h2>\n                </div>\n                <form>\n                    <div class=\"form-group\">\n                      <div class=\"icon\"><img src=\"assets/editprofileicon1.png\"  alt=\"\"></div>\n                      <input type=\"text\" class=\"form-control\"  placeholder=\"Name\"  [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone:true}\" value=\"{{userData?.name}}\">\n                    </div>\n                    \n                    <div class=\"form-group\">\n                      <div class=\"icon\"><img src=\"assets/editprofileicon3.png\"  alt=\"\"></div>\n                      <input type=\"text\" class=\"form-control\"  placeholder=\"Phone\"  [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone:true}\" value=\"{{userData?.phone}}\" >\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"icon\"><img src=\"assets/editprofileicon4.png\"  alt=\"\"></div>\n                      <input type=\"text\" class=\"form-control\"  placeholder=\"Email\" value=\"{{userData?.email}}\" readonly=\"\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <div class=\"icon\"><img src=\"assets/editprofileicon5.png\"  alt=\"\"></div>\n                      <input type=\"password\" class=\"form-control\" placeholder=\".......\" >\n                     \n                    </div> -->\n                   \n                   \n                   <button class=\"signin\" (click)=\"updateProfile()\">save changes</button>\n                   \n                </form>\n           </div>\n         </div>\n       </div>\n     </div>\n     <!-- <div class=\"sticky_footer\">\n       <div class=\"container\">\n         <p><button class=\"active\" routerLink=\"/\"><i class=\"zmdi zmdi-home\"></i><span></span></button></p>\n         <p><button routerLink=\"/\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i><span></span></button></p>\n         <p><button routerLink=\"/cart-page\"><i class=\"zmdi zmdi-shopping-cart\"></i><span></span> <small [innerHTML]=\"cartcount\"></small></button></p>\n         <p><button routerLink=\"/sidebar\"><i class=\"zmdi zmdi-account\"></i><span></span></button></p>\n       </div>\n     </div> -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  background-color: #fff;\n  font-family: \"Poppins\", sans-serif;\n}\n.wrapper {\n  max-width: 480px;\n  margin: auto;\n  width: 100%;\n  position: relative;\n  height: auto;\n  margin: auto;\n  overflow: hidden;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  z-index: 99;\n  position: relative;\n}\n.login_top {\n  background: #000;\n  min-height: 180px;\n}\n.login_top button.edit {\n  background: none;\n  border: none;\n  padding: 0;\n  float: right;\n  margin-top: 30px;\n  cursor: pointer;\n  outline: none;\n}\nbutton.btn-back {\n  font-size: 24px;\n  color: #ffffffeb;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  position: absolute;\n  left: -10px;\n  padding: 0;\n  top: 20px;\n  cursor: pointer;\n}\nbutton.btn-back:hover {\n  opacity: 0.7;\n}\n.login_top button.edit:hover {\n  opacity: 0.7;\n}\n.login_formbox {\n  /* min-height: 200px; */\n  width: 106%;\n  left: -3%;\n  background-color: #ffffff;\n  border-radius: 50px 50px 0 0;\n  position: relative;\n  margin-top: -50px;\n  padding-bottom: 24px;\n}\n.loginform {\n  max-width: 100%;\n  width: 100%;\n  background: transparent;\n  box-sizing: border-box;\n  padding-top: 24px;\n}\n.loginform .form-group {\n  position: relative;\n  margin-top: 15px;\n}\n.loginform .form-group .icon {\n  width: 16px;\n  position: absolute;\n  left: 10px;\n  top: 12px;\n  height: auto;\n}\n.loginform .form-group .icon img {\n  width: 100%;\n}\n.loginform .form-control {\n  width: 100%;\n  height: 46px;\n  background: none;\n  border: 1px solid #6969696e;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  color: #000;\n  padding-left: 35px;\n  box-sizing: border-box;\n  outline: none;\n}\n::-moz-placeholder {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  color: #000;\n  opacity: 1;\n}\n::placeholder {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  color: #000;\n  opacity: 1;\n}\n.edit_imgarea {\n  position: relative;\n  text-align: center;\n  margin-top: -70px;\n  padding-bottom: 24px;\n}\n.edit_imgarea h2 {\n  font-family: \"Poppins\", sans-serif;\n  margin: 0;\n  font-size: 18px;\n  color: #000;\n}\n.edit_imgarea .editimg {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  display: flex;\n  box-sizing: border-box;\n  border: 2px solid #FFF;\n  margin: auto;\n  position: relative;\n  margin-bottom: 15px;\n}\n.edit_imgarea .editimg img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.edit_imgarea .editimg button {\n  position: absolute;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  right: -10px;\n  bottom: 0;\n  width: 32px;\n  cursor: pointer;\n  background: #ff0000;\n  border-radius: 50%;\n  color: #ffffff;\n  height: 32px;\n}\n.edit_imgarea .editimg button:hover {\n  opacity: 0.7;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.signin {\n  width: 100%;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  border: 2px solid #ff0000;\n  background-color: #ff0000;\n  color: #fff;\n  padding: 10px 14px;\n  cursor: pointer;\n  margin-top: 30px;\n  text-transform: uppercase;\n  outline: none;\n}\n.signin:hover {\n  background-color: #000;\n  border-color: #000;\n}\n.container {\n  padding: 0 1em;\n}\n.sticky_footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #000;\n  z-index: 99;\n  padding: 5px 0;\n  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.22);\n}\n.sticky_footer p {\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n}\n.sticky_footer p button {\n  background-color: transparent;\n  border: none;\n  padding: 3px 0;\n  cursor: pointer;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: 500;\n  position: relative;\n}\n.sticky_footer p button.active i {\n  color: #ff0000;\n}\n.sticky_footer p button small {\n  position: absolute;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background-color: #ff0000;\n  top: 0;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 13px;\n}\n.sticky_footer p button i {\n  display: block;\n  font-size: 34px;\n  color: #fff;\n}\n.sticky_footer p button img {\n  max-width: 24px;\n  margin: 0;\n  padding: 0;\n  height: 22px;\n}\n.sticky_footer .container {\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.sticky_footer img {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0E7RUFBdUIsWUFBQTtBQUd2QjtBQUZBO0VBQThCLFlBQUE7QUFNOUI7QUFIQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLGlCQUFBO0FBS0o7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBT0o7QUFMQTtFQUFrQyxXQUFBO0FBU2xDO0FBUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFXSjtBQUtBO0VBRUUsa0NBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFXSjtBQWhCQTtFQUVFLGtDQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBV0o7QUFMQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBUUo7QUFOQTtFQUFpQixrQ0FBQTtFQUFvQyxTQUFBO0VBQVUsZUFBQTtFQUFnQixXQUFBO0FBYS9FO0FBWkE7RUFBd0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUk3QyxhQUFBO0VBQWUsc0JBQUE7RUFBdUIsc0JBQUE7RUFBd0IsWUFBQTtFQUFhLGtCQUFBO0VBQW1CLG1CQUFBO0FBd0JsRztBQXZCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUEwQko7QUF4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBMkJKO0FBekJBO0VBQXFDLFlBQUE7QUE2QnJDO0FBbkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFzQko7QUFsQkE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQXFCSjtBQW5CQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFzQko7QUFqQkE7RUFDSSxjQUFBO0FBb0JKO0FBaEJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FBbUJKO0FBaEJBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBbUJKO0FBakJBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0JKO0FBbEJBO0VBQ0ksY0FBQTtBQXFCSjtBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFzQko7QUFwQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF1Qko7QUFyQkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBd0JKO0FBckJBO0VBRUksd0JBQUE7RUFDQSx5Q0FBQTtBQXlCSjtBQXRCQTtFQUFvQixXQUFBO0VBQVksZUFBQTtBQTJCaEMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuXHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ubG9naW5fdG9wIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxufVxyXG4ubG9naW5fdG9wIGJ1dHRvbi5lZGl0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbmJ1dHRvbi5idG4tYmFjayB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZmViO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbi5idG4tYmFjazpob3Zlcnsgb3BhY2l0eTowLjc7fVxyXG4ubG9naW5fdG9wIGJ1dHRvbi5lZGl0OmhvdmVyeyBvcGFjaXR5OjAuNzt9XHJcblxyXG5cclxuLmxvZ2luX2Zvcm1ib3gge1xyXG4gICAgLyogbWluLWhlaWdodDogMjAwcHg7ICovXHJcbiAgICB3aWR0aDogMTA2JTtcclxuICAgIGxlZnQ6IC0zJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmxvZ2luZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuLmxvZ2luZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5sb2dpbmZvcm0gLmZvcm0tZ3JvdXAgLmljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5sb2dpbmZvcm0gLmZvcm0tZ3JvdXAgLmljb24gaW1neyB3aWR0aDoxMDAlO31cclxuLmxvZ2luZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OTY5Njk2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIFxyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgXHJcbiBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuOjpwbGFjZWhvbGRlciB7XHJcbiBcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5lZGl0X2ltZ2FyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTcwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG4uZWRpdF9pbWdhcmVhIGgye2ZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7IG1hcmdpbjowOyBmb250LXNpemU6MThweDsgY29sb3I6IzAwMDt9XHJcbi5lZGl0X2ltZ2FyZWEgLmVkaXRpbWd7IHdpZHRoOjkwcHg7IGhlaWdodDo5MHB4OyBib3JkZXItcmFkaXVzOjUwJTsgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MnB4IHNvbGlkICNGRkY7ICBtYXJnaW46YXV0bzsgcG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbi1ib3R0b206MTVweDt9XHJcbi5lZGl0X2ltZ2FyZWEgLmVkaXRpbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxufVxyXG4uZWRpdF9pbWdhcmVhIC5lZGl0aW1nIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG4uZWRpdF9pbWdhcmVhIC5lZGl0aW1nIGJ1dHRvbjpob3Zlcnsgb3BhY2l0eTowLjc7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmYwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zaWduaW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG5cclxuLnN0aWNreV9mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IHJnYigwIDAgMCAvIDIyJSk7XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uLmFjdGl2ZSBpIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIHNtYWxsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnN0aWNreV9mb290ZXIgcCBidXR0b24gaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uc3RpY2t5X2Zvb3RlciAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7LW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RpY2t5X2Zvb3RlciBpbWd7IHdpZHRoOjEwMCU7IG1heC13aWR0aDoxMDAlOyBcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let ProfilePage = class ProfilePage {
    constructor(http, navCtrl, storage, loadingController, alertController, location) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.location = location;
        this.appUrl = "https://digiworld.ie/project/zouq/api/user";
        this.appUpdate = "https://digiworld.ie/project/zouq/api/updateUserProfile";
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                //console.log(this.userDetails.user_id);
                this.http.post(this.appUrl + '/' + this.userDetails.user_id, { data: '' }, { headers: headers })
                    .subscribe(res => {
                    this.res = res.json();
                    if (this.res.email != '') {
                        this.userData = this.res;
                        this.phone = this.userData.phone;
                        this.name = this.userData.name;
                    }
                    else {
                        alert("Server error");
                        //loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    //loading.dismiss();
                });
            }
        });
    }
    ngOnInit() {
    }
    updateProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Updating...'
            });
            const namealrt = yield this.alertController.create({
                message: 'Please enter name',
                buttons: ['OK']
            });
            const phonealrt = yield this.alertController.create({
                message: 'Please enter phone',
                buttons: ['OK']
            });
            const erroralrt = yield this.alertController.create({
                message: 'Sorry,something went wrong',
                buttons: ['OK']
            });
            const successalrt = yield this.alertController.create({
                message: 'Profile update successful',
                buttons: ['OK']
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            //headers.append("Accept", 'application/json');
            if (this.name == '' || this.name == null) {
                loading.dismiss();
                namealrt.present();
            }
            else if (this.phone == '' || this.phone == null) {
                loading.dismiss();
                phonealrt.present();
            }
            else {
                yield loading.present();
                var data = {
                    "name": this.name,
                    "userId": this.userDetails.user_id,
                    "phone": this.phone,
                    "action": 'updateProfile'
                    //"photo": this.photo
                };
                //let data = new FormData();
                //data.append('photo', this.photo);
                //data.append('name', this.name);
                //data.append('userId', this.userDetails.user_id);
                //data.append('phone', this.phone);
                //data.append('action', 'updateProfile');
                this.http.post(this.appUpdate, JSON.stringify(data), { headers: headers })
                    .subscribe(res => {
                    //console.log(res.json());
                    this.res = res.json();
                    if (this.res.status == 0) {
                        loading.dismiss();
                        erroralrt.present();
                    }
                    else if (this.res.status == 1) {
                        this.htmlYouWantToAdd = this.name;
                        //this.navCtrl.navigateForward('login');
                        successalrt.present();
                        loading.dismiss();
                    }
                    else {
                        //alert("Server error");
                        loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    loading.dismiss();
                });
            }
        });
    }
    fileLoad(event) {
        //console.log(event);
        this.photo = event.target.files[0];
    }
    back() {
        this.location.back();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map