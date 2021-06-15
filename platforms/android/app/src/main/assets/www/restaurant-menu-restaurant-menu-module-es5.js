(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-menu-restaurant-menu-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-menu/restaurant-menu.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-menu/restaurant-menu.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRestaurantMenuRestaurantMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n<ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content style=\"margin-top: 150px;\"></ion-refresher-content>\n  </ion-refresher>\n    <div class=\"full-screen cart\">\n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n          <i class=\"zmdi zmdi-arrow-left\"></i>\n        </button>\n        <div class=\"title\">TAKE AWAY ORDER</div>\n      </div>\n      <div class=\"search_area\">\n          <div class=\"form-group\">            \n            <input (keyup)=\"listing($event)\" [(ngModel)]=\"search_key\" [ngModelOptions]=\"{standalone:true}\" type=\"text\" class=\"form-control\" placeholder=\"Find menu\">\n            <button><i class=\"zmdi zmdi-search\"></i></button>\n          </div>\n        </div>\n    </div>\n    \n    \n    <div class=\"listingarea\">\n      <div class=\"container\" *ngIf=\"dataMenu && loader_val == false\">\n\n         <div class=\"listing_box listCard\" *ngFor=\"let menulist of dataMenu ; let i=index\">\n           <button class=\"thumble\"><img src=\"https://digiworld.ie/project/zouq/uploads/menuImages/{{menulist.menu_image}}\"  alt=\"\"></button>\n           \n<div class=\"price\" *ngIf=\"menulist.quantity>0\" >\n              <div class=\"number\">\n                <input type=\"text\" readonly class=\"form-control\" value=\"{{menulist.quantity}}\">\n                <button class=\"btn-minus\" (click)=\"decrementQty(i,menulist.menu_id,menulist)\"><i class=\"zmdi zmdi-minus\"></i></button>\n                <button class=\"btn-plus\" (click)=\"incrementQty(i,menulist.menu_id,menulist)\"><i class=\"zmdi zmdi-plus\"></i></button>\n              </div>\n              \n            </div>\n            \n           <button class=\"add-to-cart\" (click)=\"addToCart(i,menulist.menu_id,menulist)\" *ngIf=\"menulist.quantity==0\">Add +</button> \n            \n           <div class=\"listing_textbox\">\n             <h3><button>{{menulist.menu_name}}</button></h3>\n             <h6>Price: <i class=\"fas fa-euro-sign\"></i> {{menulist.menu_price}}/-</h6>\n             <div class=\"retingbox\">\n               <p>{{menulist.description}}</p>\n             </div>\n           </div>\n         </div>\n\n         \n\n</div>\n\n<div class=\"container\" *ngIf=\"loader_val\">\n  \n           <div class=\"loader_box\">\n<img src=\"assets/loader.gif\">\n</div>\n\n</div>\n\n<div class=\"container\" *ngIf=\"menu_list && menu_list.length==0 && loader_val == false\">\n <div class=\"empty_menu\">\n           Not available\n         </div>\n  </div>\n\n\n\n\n     </div>\n      \n      \n<div class=\"sticky_footer\">\n       <div class=\"container\">\n         <p><button routerLink=\"/\"><i class=\"zmdi zmdi-home\"></i><span></span></button></p>\n         <p><button class=\"active\"  routerLink=\"/restaurant-menu\"><i class=\"zmdi zmdi-search\"></i><span></span></button></p>\n         <p><button routerLink=\"/cart-page\"><i class=\"zmdi zmdi-shopping-cart\"></i><span></span> <small [innerHTML]=\"cartcount\"></small></button></p>\n         <p><button routerLink=\"/sidebar\"><i class=\"zmdi zmdi-account\"></i><span></span></button></p>\n       </div>\n     </div>\n    \n    </div>\n\n    \n    <ion-infinite-scroll #infiniteScroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/restaurant-menu/restaurant-menu-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/restaurant-menu/restaurant-menu-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RestaurantMenuPageRoutingModule */

    /***/
    function srcAppRestaurantMenuRestaurantMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantMenuPageRoutingModule", function () {
        return RestaurantMenuPageRoutingModule;
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


      var _restaurant_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./restaurant-menu.page */
      "./src/app/restaurant-menu/restaurant-menu.page.ts");

      var routes = [{
        path: '',
        component: _restaurant_menu_page__WEBPACK_IMPORTED_MODULE_3__["RestaurantMenuPage"]
      }];

      var RestaurantMenuPageRoutingModule = function RestaurantMenuPageRoutingModule() {
        _classCallCheck(this, RestaurantMenuPageRoutingModule);
      };

      RestaurantMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RestaurantMenuPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/restaurant-menu/restaurant-menu.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/restaurant-menu/restaurant-menu.module.ts ***!
      \***********************************************************/

    /*! exports provided: RestaurantMenuPageModule */

    /***/
    function srcAppRestaurantMenuRestaurantMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantMenuPageModule", function () {
        return RestaurantMenuPageModule;
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


      var _restaurant_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./restaurant-menu-routing.module */
      "./src/app/restaurant-menu/restaurant-menu-routing.module.ts");
      /* harmony import */


      var _restaurant_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./restaurant-menu.page */
      "./src/app/restaurant-menu/restaurant-menu.page.ts");

      var RestaurantMenuPageModule = function RestaurantMenuPageModule() {
        _classCallCheck(this, RestaurantMenuPageModule);
      };

      RestaurantMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _restaurant_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantMenuPageRoutingModule"]],
        declarations: [_restaurant_menu_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantMenuPage"]]
      })], RestaurantMenuPageModule);
      /***/
    },

    /***/
    "./src/app/restaurant-menu/restaurant-menu.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/restaurant-menu/restaurant-menu.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRestaurantMenuRestaurantMenuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.full-screen {\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n.bottom-actionWrapper .btn-wrap {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 6%;\n  padding: 0 1em;\n}\n.full-screen .top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n}\n.full-screen .top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.full-screen .top-nav .btn-close {\n  font-size: 2em;\n  color: #8a98ba;\n}\n.full-screen .top-nav .title {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.full-screen .topBg-pattern {\n  position: relative;\n  z-index: -1;\n}\n.full-screen .topBg-pattern:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  height: 18em;\n  width: 100%;\n  background-color: #fbaf03;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n/* End --GLOBAL-- */\n.header {\n  background-color: #000;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n}\n.search_area {\n  margin-top: 0;\n  background-color: #000;\n  box-sizing: border-box;\n  padding: 0 1em 1em;\n}\n.form-group {\n  position: relative;\n}\n.form-group i {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  font-size: 25px;\n  color: #ff0000;\n  font-weight: 300;\n}\n.form-control {\n  width: 100%;\n  height: 45px;\n  box-sizing: border-box;\n  padding: 0 34px 0 20px;\n  font-size: 16px;\n  color: #0f0f0f;\n  font-weight: 500;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  background-color: #ffe1e1;\n}\n.form-group button {\n  position: absolute;\n  right: 50px;\n  z-index: 1;\n  top: 2px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  opacity: 1;\n  cursor: pointer;\n  outline: none;\n}\n.form-group button img {\n  max-width: 20px;\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.listingarea {\n  margin-top: 115px;\n  padding-bottom: 10px;\n}\n.listingarea .inline-item h2 {\n  color: #000;\n  font-weight: 600;\n}\n.listingarea .inline-item button {\n  color: rgba(0, 0, 0, 0.58);\n  text-transform: capitalize;\n}\n.listing_box {\n  flex-wrap: nowrap !important;\n  display: flex !important;\n}\n.listing_box {\n  box-sizing: border-box;\n  padding: 6px;\n  box-shadow: 0 0 4px rgba(185, 185, 185, 0.5);\n  background-color: #fdfdfd;\n  margin-top: 10px;\n  position: relative;\n}\n.listing_box button.thumble {\n  max-width: 30%;\n  border: none;\n  padding: 0;\n  overflow: hidden;\n  border-radius: 10px;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  margin-right: 5px;\n}\n.listing_box button.thumble img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 80px;\n  border-radius: 10px;\n}\n.listing_box button.thumble:hover img {\n  opacity: 0.7;\n}\n.listing_box .listing_textbox {\n  width: 60%;\n  box-sizing: border-box;\n  padding: 0 7px;\n}\n.listing_box .listing_textbox h3 {\n  padding: 0;\n  margin: 0;\n  line-height: 0;\n}\n.listing_box .listing_textbox h3 button {\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  font-size: 13px;\n  margin: 0;\n  outline: none;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n  margin-bottom: 4px;\n}\n.listing_box .listing_textbox h6 {\n  padding: 0 0;\n  margin: 0 0 -4px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #ff0000;\n}\n.listing_box .listing_textbox p {\n  margin: 0;\n  padding: 0;\n  font-size: 17px;\n  font-weight: 600;\n  color: #3a3a3a;\n  text-transform: capitalize;\n}\n.listing_box .listing_textbox .retingbox {\n  justify-content: space-between !important;\n  display: flex !important;\n  padding: 5px 0;\n}\n.listing_box .listing_textbox .retingbox p {\n  font-size: 12px;\n  color: #666;\n  font-weight: 400;\n  height: 40px;\n  overflow: hidden;\n}\n.listing_box .add-to-cart {\n  content: \"\";\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #fff;\n  border: 1px solid #ff0000;\n  color: #ff0000;\n  padding: 3px 5px;\n  font-size: 11px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.listing_box .listing_textbox .retingbox span {\n  color: #272727;\n  font-size: 18px;\n  font-weight: 900;\n}\n.listing_box .listing_textbox .retingbox span i {\n  margin-right: 5px;\n  color: #F90;\n}\n.container {\n  padding: 0 1em;\n}\n.sticky_footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #000;\n  z-index: 99;\n  padding: 5px 0;\n  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.22);\n}\n.sticky_footer p {\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n}\n.sticky_footer p button {\n  background-color: transparent;\n  border: none;\n  padding: 3px 0;\n  cursor: pointer;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: 500;\n  position: relative;\n  border: none;\n  outline: none;\n}\n.sticky_footer p button:active {\n  border: none;\n  box-shadow: none;\n}\n.sticky_footer p button.active i {\n  color: #ff0000;\n}\n.sticky_footer p button small {\n  position: absolute;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background-color: #ff0000;\n  top: 0;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 13px;\n}\n.sticky_footer p button i {\n  display: block;\n  font-size: 28px;\n  color: #fff;\n}\n.sticky_footer p button img {\n  max-width: 24px;\n  margin: 0;\n  padding: 0;\n  height: 22px;\n}\n.sticky_footer .container {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding: 6px 1em;\n}\n.sticky_footer img {\n  width: 100%;\n  max-width: 100%;\n}\n.listCard .price {\n  /* margin-left: 1em; */\n  margin-left: auto;\n  font-weight: 600;\n  color: #3e3f68;\n  padding: 22px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.listCard .price .remove {\n  color: #ff0000;\n  font-size: 14px;\n  text-decoration: none;\n  float: right;\n  margin-top: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n.listCard .price .number {\n  width: 65px;\n  box-sizing: border-box;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  border-radius: 30px;\n}\n.listCard .price .number .form-control {\n  width: 40px;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 0px;\n  border: 1px solid #c7c7c7;\n  background: transparent;\n  color: #4e4e4e;\n  padding: 6px 0px;\n  margin: auto;\n  font-size: 18px;\n  height: 30px;\n}\n.listCard .price .number .btn-minus {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #ffffff;\n  height: 100%;\n  cursor: pointer;\n  width: 20px;\n  font-size: 12px;\n  font-weight: 900;\n  outline: none;\n}\n.listCard .price .number .btn-minus:hover {\n  opacity: 0.7;\n}\n.listCard .price .number .btn-plus {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #ffffff;\n  height: 100%;\n  cursor: pointer;\n  width: 20px;\n  font-size: 12px;\n  font-weight: 900;\n  outline: none;\n}\n.listCard .price .number .btn-plus:hover {\n  opacity: 0.7;\n}\n.listCard .dtl .desc .itaemName {\n  font-size: 15px;\n  font-weight: 600;\n  color: #313131;\n}\n.loader_box {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loader_box img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.empty_menu {\n  width: 100%;\n  padding-top: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: #c31313;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC1tZW51L3Jlc3RhdXJhbnQtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSx5RkFBQTtBQUVSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUFEO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBS0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFHQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUlKO0FBRkEsbUJBQUE7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFJSjtBQUZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSEE7RUFDSSxrQkFBQTtBQU1K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QUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQTZDSjtBQTNDQTtFQUEwQyxZQUFBO0FBK0MxQztBQTlDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpREo7QUE5Q0E7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFnREE7QUE5Q0E7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBaURBO0FBL0NBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBa0RBIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudC1tZW51L3Jlc3RhdXJhbnQtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR6LWluZGV4OjE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4uZnVsbC1zY3JlZW4ge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ib3R0b20tYWN0aW9uV3JhcHBlciAuYnRuLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4uZnVsbC1zY3JlZW4gLnRvcC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5mdWxsLXNjcmVlbiAudG9wLW5hdiAuYnRuLWJhY2sge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uZnVsbC1zY3JlZW4gLnRvcC1uYXYgLmJ0bi1jbG9zZSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjOGE5OGJhO1xyXG59XHJcbi5mdWxsLXNjcmVlbiAudG9wLW5hdiAudGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG4uZnVsbC1zY3JlZW4gLnRvcEJnLXBhdHRlcm4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLmZ1bGwtc2NyZWVuIC50b3BCZy1wYXR0ZXJuOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxOGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJhZjAzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi8qIEVuZCAtLUdMT0JBTC0tICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2IoMCAwIDAgLyAyNCUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWFyY2hfYXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDFlbSAxZW07XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWdyb3VwIGkge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDM0cHggMCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwZjBmMGY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWUxO1xyXG59XHJcbi5mb3JtLWdyb3VwIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb3JtLWdyb3VwIGJ1dHRvbiBpbWd7IG1heC13aWR0aDoyMHB4O31cclxuLmZ1bGwtc2NyZWVuLmNhcnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmxpc3RpbmdhcmVheyBtYXJnaW4tdG9wOjExNXB4OyBwYWRkaW5nLWJvdHRvbToxMHB4O31cclxuLmxpc3RpbmdhcmVhIC5pbmxpbmUtaXRlbSBoMnsgY29sb3I6IzAwMDsgZm9udC13ZWlnaHQ6NjAwO31cclxuXHJcbi5saXN0aW5nYXJlYSAuaW5saW5lLWl0ZW0gYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZ2IoMCAwIDAgLyA1OCUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcblxyXG4ubGlzdGluZ19ib3h7XHJcblx0LW1zLWZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5saXN0aW5nX2JveCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2IoMTg1IDE4NSAxODUgLyA1MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxpc3RpbmdfYm94IGJ1dHRvbi50aHVtYmxlIHtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmxpc3RpbmdfYm94IGJ1dHRvbi50aHVtYmxlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubGlzdGluZ19ib3ggYnV0dG9uLnRodW1ibGU6aG92ZXIgaW1neyBvcGFjaXR5OjAuNzt9XHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbn1cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3ggaDN7IHBhZGRpbmc6MDsgbWFyZ2luOjA7bGluZS1oZWlnaHQ6IDA7fVxyXG4ubGlzdGluZ19ib3ggLmxpc3RpbmdfdGV4dGJveCBoMyBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbn1cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3ggaDYge1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgLTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG4ubGlzdGluZ19ib3ggLmxpc3RpbmdfdGV4dGJveCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzYTNhM2E7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ubGlzdGluZ19ib3ggLmxpc3RpbmdfdGV4dGJveCAucmV0aW5nYm94IHtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3ggLnJldGluZ2JveCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxpc3RpbmdfYm94IC5hZGQtdG8tY2FydCB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3ggLnJldGluZ2JveCBzcGFuIHtcclxuICAgIGNvbG9yOiAjMjcyNzI3O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuXHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IC5yZXRpbmdib3ggc3BhbiBpeyBtYXJnaW4tcmlnaHQ6NXB4OyBjb2xvcjojRjkwO31cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcblxyXG4uc3RpY2t5X2Zvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggcmdiKDAgMCAwIC8gMjIlKTtcclxufVxyXG5cclxuLnN0aWNreV9mb290ZXIgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuLnN0aWNreV9mb290ZXIgcCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbjphY3RpdmV7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbi5hY3RpdmUgaSB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBzbWFsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnN0aWNreV9mb290ZXIgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50Oy1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDZweCAxZW07XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIGltZ3sgd2lkdGg6MTAwJTsgbWF4LXdpZHRoOjEwMCU7IFxyXG4gICAgfVxyXG5cclxuLmxpc3RDYXJkIC5wcmljZSB7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMWVtOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzZTNmNjg7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5yZW1vdmUge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxpc3RDYXJkIC5wcmljZSAubnVtYmVyIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5saXN0Q2FyZCAucHJpY2UgLm51bWJlciAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1taW51cyB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1taW51czpob3Zlcnsgb3BhY2l0eTowLjc7fVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1wbHVzIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1wbHVzOmhvdmVyeyBvcGFjaXR5OjAuNzt9XHJcbi5saXN0Q2FyZCAuZHRsIC5kZXNjIC5pdGFlbU5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzEzMTMxO1xyXG59XHJcblxyXG4ubG9hZGVyX2JveHtcclxud2lkdGg6IDEwMCU7XHJcblxyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubG9hZGVyX2JveCBpbWd7XHJcbm9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5lbXB0eV9tZW51e1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZy10b3A6IDYwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmNvbG9yOiAjYzMxMzEzO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/restaurant-menu/restaurant-menu.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/restaurant-menu/restaurant-menu.page.ts ***!
      \*********************************************************/

    /*! exports provided: RestaurantMenuPage */

    /***/
    function srcAppRestaurantMenuRestaurantMenuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantMenuPage", function () {
        return RestaurantMenuPage;
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

      var RestaurantMenuPage = /*#__PURE__*/function () {
        function RestaurantMenuPage(http, navCtrl, storage, loadingController, alertController, toastController, route, location) {
          _classCallCheck(this, RestaurantMenuPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.toastController = toastController;
          this.route = route;
          this.location = location;
          this.appUrl = "https://digiworld.ie/project/zouq/api/item_list";
          this.cart_data = [];
          this.cartcount = 0;
          this.cart = [];
          this.loader_val = true;
          this.pageNo = 1;
          this.dataMenu = [];
          this.limit = 9;
          this.count = 0;
        }

        _createClass(RestaurantMenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (params) {
                //let queryParams = params;
                _this.mainMenuId = params.main_menu; //console.log(this.mainMenuId);
              }
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            setTimeout(function () {
              //this.listing_menu();
              var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();

              if (!_this2.mainMenuId) {
                _this2.mainMenuId = 0;
              }

              if (!_this2.search_key) {
                _this2.search_key = '';
              }

              var dataPar = {
                "mainMenuId": _this2.mainMenuId,
                "search": _this2.search_key
              };

              _this2.http.post(_this2.appUrl, dataPar, {
                headers: headers
              }).subscribe(function (res) {
                _this2.res = res.json(); //console.log(this.res);

                if (_this2.res && _this2.res.menu_list) {
                  // loading.dismiss();
                  event.target.complete();
                  _this2.loader_val = false;
                  _this2.menu_list = _this2.res.menu_list;

                  if (_this2.menu_list && _this2.menu_list.length > 0) {
                    _this2.dataMenu = [];

                    for (var i = 0; i < _this2.limit; i++) {
                      if (_this2.menu_list[i]) {
                        _this2.dataMenu.push(_this2.menu_list[i]);
                      }
                    }
                  } else {
                    _this2.dataMenu = [];
                  }

                  var _iterator = _createForOfIteratorHelper(_this2.menu_list),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var pro = _step.value;

                      var _iterator2 = _createForOfIteratorHelper(_this2.cart_data),
                          _step2;

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          var p = _step2.value;

                          if (p.menu_id == pro.menu_id) {
                            pro.quantity = p.quantity; //break;
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                } else {
                  //alert("Server error");
                  // loading.dismiss();
                  _this2.loader_val = false;
                  event.target.complete();
                }
              }, function (err) {
                //console.log(err);
                // loading.dismiss();
                _this2.loader_val = false;
                event.target.complete();
              });
            }, 1500);
          }
        }, {
          key: "back",
          value: function back() {
            //this.navCtrl.navigateForward('/');
            this.location.back();
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            //console.log(event);
            this.getScrollData(true, event);
          }
        }, {
          key: "getScrollData",
          value: function getScrollData(isFirstLoad, event) {
            var _this3 = this;

            setTimeout(function () {
              _this3.dataMenu = [];
              _this3.limit = _this3.limit + 9;

              for (var i = 0; i < _this3.limit; i++) {
                if (_this3.menu_list[i]) {
                  _this3.dataMenu.push(_this3.menu_list[i]);
                }
              }

              _this3.pageNo++;
              if (isFirstLoad) event.target.complete();
            }, 1000);
          }
        }, {
          key: "listing",
          value: function listing() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var loading, headers, dataPar;
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
                      //await loading.present();
                      this.loader_val = true;
                      this.storage.get("userDetails").then(function (val) {
                        if (val) {
                          _this4.userDetails = val;
                          var data = {
                            "userId": _this4.userDetails.user_id
                          };
                        }
                      });
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](); //console.log(this.userDetails.user_id);

                      if (!this.mainMenuId) {
                        this.mainMenuId = 0;
                      }

                      if (!this.search_key) {
                        this.search_key = '';
                      }

                      dataPar = {
                        "mainMenuId": this.mainMenuId,
                        "search": this.search_key
                      };
                      this.http.post(this.appUrl, dataPar, {
                        headers: headers
                      }).subscribe(function (res) {
                        _this4.res = res.json(); //console.log(this.res);

                        if (_this4.res && _this4.res.menu_list) {
                          // loading.dismiss();
                          _this4.loader_val = false;
                          _this4.menu_list = _this4.res.menu_list;

                          if (_this4.menu_list && _this4.menu_list.length > 0) {
                            _this4.dataMenu = [];

                            for (var i = 0; i < _this4.limit; i++) {
                              if (_this4.menu_list[i]) {
                                _this4.dataMenu.push(_this4.menu_list[i]);
                              }
                            }
                          } else {
                            _this4.dataMenu = [];
                          }

                          var _iterator3 = _createForOfIteratorHelper(_this4.menu_list),
                              _step3;

                          try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                              var pro = _step3.value;

                              var _iterator4 = _createForOfIteratorHelper(_this4.cart_data),
                                  _step4;

                              try {
                                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                  var p = _step4.value;

                                  if (p.menu_id == pro.menu_id) {
                                    pro.quantity = p.quantity; //break;
                                  }
                                }
                              } catch (err) {
                                _iterator4.e(err);
                              } finally {
                                _iterator4.f();
                              }
                            }
                          } catch (err) {
                            _iterator3.e(err);
                          } finally {
                            _iterator3.f();
                          }
                        } else {
                          //alert("Server error");
                          // loading.dismiss();
                          _this4.loader_val = false;
                        }
                      }, function (err) {
                        //console.log(err);
                        // loading.dismiss();
                        _this4.loader_val = false;
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this5 = this;

            // this.storage.remove("userCart");
            this.listing();
            this.storage.get("userCart").then(function (val) {
              if (val) {
                _this5.userCart = val;
                _this5.cart_data = val; //console.log(val);
              }
            });
            this.getCartItemCount();
          }
        }, {
          key: "getProducts",
          value: function getProducts() {//return this.data;
          }
        }, {
          key: "getCart",
          value: function getCart() {
            return this.cart_data;
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            var _this6 = this;

            this.count = 0;
            this.storage.get("userCart").then(function (val) {
              if (val) {
                var _iterator5 = _createForOfIteratorHelper(_this6.cart_data),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var p = _step5.value;

                    if (p.quantity > 0) {
                      _this6.count += 1;
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                _this6.cartTotal = _this6.count;
                _this6.cartcount = _this6.count;
              } else {
                _this6.cartTotal = _this6.count;
              }
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(index, menu_id, menulist) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var toast, added;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'Added',
                        duration: 1000,
                        animated: true,
                        //color:'success',
                        position: 'middle',
                        cssClass: 'my-toast-class'
                      });

                    case 2:
                      toast = _context2.sent;
                      added = false; // var data ={
                      //   "id": menu_id,
                      //    "name":menu_name,
                      //    "price":menu_price,
                      //    "quantity":1,
                      //    "image":menu_image
                      // }

                      this.storage.get("userCart").then(function (val) {
                        _this7.abc = [];
                        var added = false;

                        if (val) {
                          _this7.cart_data = val;

                          var _iterator6 = _createForOfIteratorHelper(_this7.cart_data),
                              _step6;

                          try {
                            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                              var p = _step6.value;

                              if (p.menu_id == menulist.menu_id) {
                                _this7.dataMenu[index].quantity += 1; //this.menu_list[index].quantity += 1;

                                p.quantity = parseInt(p.quantity) + 1;
                                added = true; //this.cart_data.push(menulist);

                                _this7.storage.set("userCart", _this7.cart_data).then(function (val) {
                                  _this7.getCartItemCount();
                                }); //this.getCartItemCount();


                                toast.present();
                                break;
                              }
                            }
                          } catch (err) {
                            _iterator6.e(err);
                          } finally {
                            _iterator6.f();
                          }

                          if (!added) {
                            menulist.quantity = 1;

                            _this7.cart_data.push(menulist);

                            _this7.storage.set("userCart", _this7.cart_data).then(function (val) {
                              _this7.getCartItemCount();
                            }); //this.getCartItemCount();


                            toast.present();
                          } //else{
                          //   this.getCartItemCount();
                          //   this.storage.set("userCart", this.cart_data);
                          // }

                        } else {
                          menulist.quantity = 1;

                          _this7.cart_data.push(menulist); //this.getCartItemCount();


                          _this7.storage.set("userCart", _this7.cart_data).then(function (val) {
                            _this7.getCartItemCount();
                          });

                          toast.present();
                        }
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "decrementQty",
          value: function decrementQty(index, menu_id, menulist) {
            /*. if item passed then item.qty. */
            if (this.dataMenu[index].quantity - 1 <= 0) {
              this.dataMenu[index].quantity = 0; //this.menu_list[index].quantity = 0;

              var _iterator7 = _createForOfIteratorHelper(this.cart_data),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var p = _step7.value;

                  if (p.menu_id == menulist.menu_id) {
                    p.quantity = 0; //console.log(this.cart_data);

                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            } else {
              this.dataMenu[index].quantity -= 1; //this.menu_list[index].quantity -= 1;

              var _iterator8 = _createForOfIteratorHelper(this.cart_data),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _p = _step8.value;

                  if (_p.menu_id == menulist.menu_id) {
                    _p.quantity = parseInt(this.dataMenu[index].quantity); //console.log(this.cart_data);

                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                  }
                } //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);

              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          }
        }, {
          key: "incrementQty",
          value: function incrementQty(index, menu_id, menulist) {
            /*. if item passed then item.qty. */
            if (this.dataMenu[index].quantity > 0) {
              this.dataMenu[index].quantity += 1; //this.menu_list[index].quantity += 1;

              var _iterator9 = _createForOfIteratorHelper(this.cart_data),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var p = _step9.value;

                  if (p.menu_id == menulist.menu_id) {
                    p.quantity = parseInt(this.dataMenu[index].quantity); //console.log(this.cart_data);

                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            } // else{
            //   this.menu_list[index].quantity = 1;
            // }

          }
        }]);

        return RestaurantMenuPage;
      }();

      RestaurantMenuPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }];
      };

      RestaurantMenuPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]]
        }]
      };
      RestaurantMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurant-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./restaurant-menu.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-menu/restaurant-menu.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./restaurant-menu.page.scss */
        "./src/app/restaurant-menu/restaurant-menu.page.scss"))["default"]]
      })], RestaurantMenuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=restaurant-menu-restaurant-menu-module-es5.js.map