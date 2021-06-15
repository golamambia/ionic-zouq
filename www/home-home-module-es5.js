(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"200\">\n    <ion-refresher-content style=\"margin-top: 150px;\"></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"page-wrap\">\n  \n  \n   \n     <div class=\"section-top\">\n      <div class=\"container\">\n         <div class=\"inline-item\">\n            <div class=\"items\">\n              <img class=\"location\" src=\"assets/iconlocation.png\" alt=\"\">\n              <span [innerHTML]=\"CountryStateHtml\"></span>\n            </div>\n            <div class=\"items\">\n              <!-- <img src=\"assets/user-small.png\" alt=\"\"> -->\n            </div>\n          </div>\n          <div class=\"search_area\">\n          <div class=\"form-group\">            \n            <input (click)=\"gotoList()\" type=\"text\" class=\"form-control\" placeholder=\"Find menu\">\n            <button (click)=\"gotoList()\"><i class=\"zmdi zmdi-search\"></i></button>\n          </div>\n        </div>\n       </div>\n     </div>\n     \n     \n     \n      <div class=\"categories_area categories_top\">\n      <div class=\"container\">\n         <div class=\"inline-item\">\n          <h2>top categories</h2>\n          <button routerLink=\"/restaurant-menu\">see all</button>\n         </div>\n         </div>\n         <div class=\"categories_list\">\n            <ul>\n                <li *ngFor=\"let menu_list of menu_slide_list\">\n                  <button (click)=\"gotoMenu(menu_list.rescatid)\" >\n                   <img src=\"{{menu_list.menu_image}}\" alt=\"{{menu_list.menu_name}}\">\n                   <strong>{{menu_list.menu_name}}</strong>\n                  </button>\n               </li>\n               \n              </ul>\n         </div>\n       </div>\n       <div class=\"categories_area\">\n      <div class=\"container\">\n         <div class=\"inline-item\">\n          <h2>Our Food</h2>\n          <button routerLink=\"/restaurant-menu\">see all</button>\n         </div>\n         </div>\n         <div class=\"categories_list\">\n            <ul>\n                <li *ngFor=\"let menuCat of main_menu_list\">\n                  <button (click)=\"gotoMenu(menuCat.category_id)\">\n                   <img src=\"{{menuCat.cat_image}}\" alt=\"\">\n                  <div class=\"contain\"><h6>{{menuCat.name}}</h6> <!-- <span class=\"price\"><i class=\"fas fa-euro-sign\"></i> 15.5</span> --></div>\n                  </button>\n               </li>\n               \n              </ul>\n         </div>\n       </div>\n       \n     <div class=\"listingarea listCard\">\n       <div class=\"container\">\n         <div class=\"inline-item\">\n          <h2>new menu</h2>\n          <button routerLink=\"/restaurant-menu\">see all</button>\n         </div>\n         \n         \n         <div class=\"listing_box\" *ngFor=\"let menulist of dataMenu ; let i=index\">\n           <button class=\"thumble\"><img src=\"https://digiworld.ie/project/zouq/uploads/menuImages/{{menulist.menu_image}}\"  alt=\"\"></button>\n           <div class=\"price\" *ngIf=\"menulist.quantity>0\" >\n              <div class=\"number\">\n                <input type=\"text\" readonly class=\"form-control\" value=\"{{menulist.quantity}}\">\n                <button class=\"btn-minus\" (click)=\"decrementQty(i,menulist.menu_id,menulist)\"><i class=\"zmdi zmdi-minus\"></i></button>\n                <button class=\"btn-plus\" (click)=\"incrementQty(i,menulist.menu_id,menulist)\"><i class=\"zmdi zmdi-plus\"></i></button>\n              </div>\n              \n            </div>\n            \n           <button class=\"add-to-cart\" (click)=\"addToCart(i,menulist.menu_id,menulist)\" *ngIf=\"menulist.quantity==0\">Add +</button> \n           <div class=\"listing_textbox\">\n             <h3><button>{{menulist.menu_name}}</button></h3>\n             <h6>Price: <i class=\"fas fa-euro-sign\"></i>  {{menulist.menu_price}}/-</h6>\n             <div class=\"retingbox\">\n               <p>{{menulist.description}}</p>\n             </div>\n           </div>\n         </div>\n         \n       </div>\n     </div>\n       \n      \n     \n     \n     \n     <div class=\"sticky_footer\">\n       <div class=\"container\">\n         <p><button class=\"active\" routerLink=\"/\"><i class=\"zmdi zmdi-home\"></i><span></span></button></p>\n         <p><button routerLink=\"/restaurant-menu\"><i class=\"zmdi zmdi-search\"></i><span></span></button></p>\n         <p><button routerLink=\"/cart-page\"><i class=\"zmdi zmdi-shopping-cart\"></i><span></span> <small [innerHTML]=\"cartcount\"></small></button></p>\n         <p><button routerLink=\"/sidebar\"><i class=\"zmdi zmdi-account\"></i><span></span></button></p>\n       </div>\n     </div>\n  </div>\n  <ion-infinite-scroll #infiniteScroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n    \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #000;\n  position: relative;\n}\n.page-wrap {\n  max-width: 100%;\n  margin: auto;\n  height: auto;\n  position: relative;\n  z-index: 1;\n  padding-top: 30px;\n  padding-bottom: 80px;\n}\n.page-wrap:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 260px;\n  background-color: #000;\n  z-index: -1;\n}\n.container {\n  padding: 0 1em;\n}\n.inline-item {\n  /* margin: 0.5em 1em;\n  padding: 1.5em 1em;\n  background: #fff;\n  box-shadow: 0 5px 17px -1px #0000004a; */\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.inline-item .items {\n  display: flex;\n  color: #fff;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n  font-size: 19px;\n}\n.inline-item .items img.location {\n  max-width: 20px;\n  margin-right: 5px;\n}\n.categories_area {\n  overflow: hidden;\n}\n.categories_area .categories_list {\n  overflow: scroll;\n  padding-bottom: 14px;\n  margin-left: 1em;\n  box-sizing: border-box;\n}\n.categories_area .inline-item {\n  margin-top: 18px;\n  margin-bottom: 10px;\n}\n.categories_area.categories_top {\n  margin-top: 10px;\n}\n.categories_area.categories_top .inline-item {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.categories_area.categories_top .inline-item h2 {\n  color: #fff;\n  font-weight: 600;\n}\n.inline-item h2 {\n  display: flex;\n  color: #000;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: capitalize;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.inline-item button {\n  font-size: 14px;\n  text-transform: capitalize;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  font-family: \"Poppins\", sans-serif;\n  color: #000;\n  font-weight: 600;\n  cursor: pointer;\n  outline: none;\n}\n.search_area {\n  margin-top: 24px;\n}\n.form-group {\n  position: relative;\n}\n.form-group i {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  font-size: 34px;\n  color: #ff0000;\n  font-weight: 300;\n}\n.form-control {\n  width: 100%;\n  height: 54px;\n  box-sizing: border-box;\n  padding: 0 34px 0 20px;\n  font-size: 16px;\n  color: #0f0f0f;\n  font-weight: 500;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  background-color: #ffe1e1;\n}\n.form-group button {\n  position: absolute;\n  right: 50px;\n  z-index: 1;\n  top: 2px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  opacity: 1;\n  cursor: pointer;\n  outline: none;\n}\n.form-group button img {\n  max-width: 20px;\n}\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #454545;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #454545;\n  opacity: 1;\n}\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #454545;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #454545;\n  opacity: 1;\n}\n.categories_area ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: table;\n  width: 100%;\n}\n.categories_area ul li {\n  display: table-cell;\n  vertical-align: top;\n}\n.categories_area ul li button {\n  width: 230px;\n  margin-right: 0;\n  height: auto;\n  background-color: transparent;\n  border: none;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  display: block;\n  padding: 0px;\n  cursor: pointer;\n  text-align: left;\n  color: rgba(255, 255, 255, 0.66);\n  font-size: 14px;\n  margin-right: 1em;\n  position: relative;\n  overflow: hidden;\n  outline: none;\n  z-index: 1;\n}\n.categories_area ul li button:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 70%;\n  width: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, rgba(0, 68, 4, 0) 100%);\n}\n.categories_area ul li button:hover:after {\n  opacity: 0.7;\n}\n.categories_area ul li button .contain {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 2;\n  width: 100%;\n  font-weight: 300;\n  color: #fff;\n  box-sizing: border-box;\n  padding: 15px;\n  font-size: 16px;\n  text-transform: capitalize;\n}\n.categories_area ul li button .contain h6 {\n  width: 100%;\n  font-weight: 600;\n  color: #fff;\n  font-size: 16px;\n  margin: 0 0 5px;\n  letter-spacing: 1px;\n}\n.categories_area ul li button .contain .price {\n  background: #ff0000;\n  font-size: 12px;\n  padding: 5px 6px;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.categories_area ul li button img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 140px;\n  display: flex;\n}\n.categories_area.categories_top ul li button {\n  width: 90px;\n  background-color: #f00;\n  border-radius: 7px;\n  min-height: 110px;\n}\n.categories_area.categories_top .inline-item button {\n  color: #fff;\n  text-transform: capitalize;\n}\n.categories_area.categories_top .inline-item button:hover {\n  color: #000;\n}\n.categories_area.categories_top ul li button:after {\n  opacity: 0;\n}\n.categories_area.categories_top ul li button img {\n  height: 55px;\n  border-radius: 50%;\n  margin: auto;\n  width: 55px;\n  box-sizing: border-box;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.categories_area.categories_top ul li button strong {\n  padding: 5px;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: normal;\n  position: relative;\n  width: 100%;\n  display: block;\n  line-height: 18px;\n  opacity: 1;\n  box-sizing: border-box;\n  color: #fff;\n}\n.addbox {\n  margin: 10px 0;\n}\n.addbox img {\n  width: 100%;\n}\n.listingarea {\n  margin-top: 10px;\n}\n.listingarea .inline-item h2 {\n  color: #000;\n  font-weight: 600;\n}\n.listingarea .inline-item button {\n  color: rgba(0, 0, 0, 0.58);\n  text-transform: capitalize;\n}\n.listing_box {\n  flex-wrap: nowrap !important;\n  display: flex !important;\n}\n.listing_box {\n  box-sizing: border-box;\n  padding: 6px;\n  box-shadow: 0 0 4px rgba(185, 185, 185, 0.5);\n  background-color: #fdfdfd;\n  margin-top: 10px;\n  position: relative;\n}\n.listing_box .add-to-cart {\n  content: \"\";\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #fff;\n  border: 1px solid #ff0000;\n  color: #ff0000;\n  padding: 3px 5px;\n  font-size: 11px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.listing_box button.thumble {\n  max-width: 26%;\n  border: none;\n  padding: 0;\n  overflow: hidden;\n  border-radius: 10px;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n}\n.listing_box button.thumble img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 70px;\n}\n.listing_box button.thumble:hover img {\n  opacity: 0.7;\n}\n.listing_box .listing_textbox {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 54px 0 15px;\n}\n.listing_box .listing_textbox h3 {\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n.listing_box .listing_textbox h3 button {\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  font-size: 17px;\n  margin: 0;\n  outline: none;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n}\n.listing_box .listing_textbox h6 {\n  padding: 0 0;\n  margin: 0 0 1px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #ff0000;\n}\n.listing_box .listing_textbox p {\n  margin: 0;\n  padding: 0;\n  font-size: 17px;\n  font-weight: 600;\n  color: #3a3a3a;\n  text-transform: capitalize;\n}\n.listing_box .listing_textbox .retingbox {\n  justify-content: space-between !important;\n  display: flex !important;\n  padding: 0px 0;\n}\n.listing_box .listing_textbox .retingbox p {\n  font-size: 12px;\n  color: #666;\n  font-weight: 400;\n}\n.listing_box .listing_textbox .retingbox span {\n  color: #272727;\n  font-size: 18px;\n  font-weight: 900;\n}\n.listing_box .listing_textbox .retingbox span i {\n  margin-right: 5px;\n  color: #F90;\n}\n.sticky_footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #000;\n  z-index: 99;\n  padding: 5px 0;\n  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.22);\n}\n.sticky_footer p {\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n}\n.sticky_footer p button {\n  background-color: transparent;\n  border: none;\n  padding: 3px 0;\n  cursor: pointer;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: 500;\n  position: relative;\n  border: none;\n  outline: none;\n}\n.sticky_footer p button.active i {\n  color: #ff0000;\n}\n.sticky_footer p button small {\n  position: absolute;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background-color: #ff0000;\n  top: 0;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 13px;\n}\n.sticky_footer p button i {\n  display: block;\n  font-size: 28px;\n  color: #fff;\n}\n.sticky_footer p button img {\n  max-width: 24px;\n  margin: 0;\n  padding: 0;\n  height: 22px;\n}\n.sticky_footer .container {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding: 6px 1em;\n}\n.sticky_footer img {\n  width: 100%;\n  max-width: 100%;\n}\n.listCard .price {\n  /* margin-left: 1em; */\n  margin-left: auto;\n  font-weight: 600;\n  color: #3e3f68;\n  padding: 22px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.listCard .price .remove {\n  color: #ff0000;\n  font-size: 14px;\n  text-decoration: none;\n  float: right;\n  margin-top: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n.listCard .price .number {\n  width: 65px;\n  box-sizing: border-box;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  border-radius: 30px;\n}\n.listCard .price .number .form-control {\n  width: 40px;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 0px;\n  border: 1px solid #c7c7c7;\n  background: transparent;\n  color: #4e4e4e;\n  padding: 6px 0px;\n  margin: auto;\n  font-size: 18px;\n  height: 30px;\n}\n.listCard .price .number .btn-minus {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #ffffff;\n  height: 100%;\n  cursor: pointer;\n  width: 20px;\n  font-size: 12px;\n  font-weight: 900;\n  outline: none;\n}\n.listCard .price .number .btn-minus:hover {\n  opacity: 0.7;\n}\n.listCard .price .number .btn-plus {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #ffffff;\n  height: 100%;\n  cursor: pointer;\n  width: 20px;\n  font-size: 12px;\n  font-weight: 900;\n  outline: none;\n}\n.listCard .price .number .btn-plus:hover {\n  opacity: 0.7;\n}\n.listCard .dtl .desc .itaemName {\n  font-size: 15px;\n  font-weight: 600;\n  color: #313131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUhKO0FBTUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSEo7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0k7OzswQ0FBQTtFQUlBLGtCQUFBO0VBS0YsYUFBQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlBO0VBS0UsYUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBREo7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUE7RUFBa0IsZ0JBQUE7QUFFbEI7QUFEQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBSUo7QUFGQTtFQUErQixnQkFBQTtFQUFpQixtQkFBQTtBQU9oRDtBQU5BO0VBQWlDLGdCQUFBO0FBVWpDO0FBVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFZSjtBQVZBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBYUY7QUFYQTtFQUtFLGFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQWNKO0FBWEE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNB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QUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcURKO0FBbkRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFzREo7QUFwREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQXVESjtBQXJEQTtFQUEyQyxZQUFBO0FBeUQzQztBQXhEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBMkRKO0FBekRBO0VBQTBDLFlBQUE7QUE2RDFDO0FBNURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQStESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ucGFnZS13cmFwIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5pbmxpbmUtaXRlbSB7XHJcbiAgICAvKiBtYXJnaW46IDAuNWVtIDFlbTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxN3B4IC0xcHggIzAwMDAwMDRhOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICBcclxuICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgIFxyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW5saW5lLWl0ZW0gLml0ZW1zIHtcclxuICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgXHJcbiAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgIFxyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICBcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgIFxyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG4uaW5saW5lLWl0ZW0gLml0ZW1zIGltZy5sb2NhdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcbi5jYXRlZ29yaWVzX2FyZWF7IG92ZXJmbG93OmhpZGRlbjt9XHJcbi5jYXRlZ29yaWVzX2FyZWEgLmNhdGVnb3JpZXNfbGlzdCB7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2F0ZWdvcmllc19hcmVhIC5pbmxpbmUtaXRlbXsgbWFyZ2luLXRvcDoxOHB4OyBtYXJnaW4tYm90dG9tOjEwcHg7fVxyXG4uY2F0ZWdvcmllc19hcmVhLmNhdGVnb3JpZXNfdG9weyBtYXJnaW4tdG9wOjEwcHg7fVxyXG4uY2F0ZWdvcmllc19hcmVhLmNhdGVnb3JpZXNfdG9wIC5pbmxpbmUtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2F0ZWdvcmllc19hcmVhLmNhdGVnb3JpZXNfdG9wIC5pbmxpbmUtaXRlbSBoMiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5pbmxpbmUtaXRlbSBoMiB7XHJcbiAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgIFxyXG4gIGRpc3BsYXk6IC1tb3otYm94OyAgICAgICBcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgICAgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICBcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgXHJcbn1cclxuLmlubGluZS1pdGVtIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoX2FyZWF7IG1hcmdpbi10b3A6MjRweDt9XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybS1ncm91cCBpIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAzNHB4IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMGYwZjBmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTFlMTtcclxufVxyXG4uZm9ybS1ncm91cCBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZm9ybS1ncm91cCBidXR0b24gaW1neyBtYXgtd2lkdGg6MjBweDt9XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICBjb2xvcjogIzQ1NDU0NTtcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICBjb2xvcjogIzQ1NDU0NTtcclxuICAgb3BhY2l0eTogMTtcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgIGNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICAgY29sb3I6ICM0NTQ1NDU7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNhdGVnb3JpZXNfYXJlYSB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhdGVnb3JpZXNfYXJlYSB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIFxyXG59XHJcbi5jYXRlZ29yaWVzX2FyZWEgdWwgbGkgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nik7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICAxZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgei1pbmRleDoxO1xyXG59XHJcbi5jYXRlZ29yaWVzX2FyZWEgdWwgbGkgYnV0dG9uOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgaHNsKDBkZWcgMCUgMCUgLyA5MCUpIDEwJSxyZ2JhKDAsNjgsNCwwKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgaHNsKDBkZWcgMCUgMCUgLyA5MCUpIDEwJSxyZ2JhKDAsNjgsNCwwKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGhzbCgwZGVnIDAlIDAlIC8gOTAlKSAxMCUscmdiYSgwLDY4LDQsMCkgMTAwJSk7XHJcbn1cclxuLmNhdGVnb3JpZXNfYXJlYSB1bCBsaSBidXR0b246aG92ZXI6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllc19hcmVhIHVsIGxpIGJ1dHRvbiAuY29udGFpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uY2F0ZWdvcmllc19hcmVhIHVsIGxpIGJ1dHRvbiAuY29udGFpbiBoNiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmNhdGVnb3JpZXNfYXJlYSB1bCBsaSBidXR0b24gLmNvbnRhaW4gLnByaWNlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNhdGVnb3JpZXNfYXJlYSB1bCBsaSBidXR0b24gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jYXRlZ29yaWVzX2FyZWEuY2F0ZWdvcmllc190b3AgdWwgbGkgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5jYXRlZ29yaWVzX2FyZWEuY2F0ZWdvcmllc190b3AgLmlubGluZS1pdGVtIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5jYXRlZ29yaWVzX2FyZWEuY2F0ZWdvcmllc190b3AgLmlubGluZS1pdGVtIGJ1dHRvbjpob3ZlcnsgY29sb3I6IzAwMDt9XHJcbi5jYXRlZ29yaWVzX2FyZWEuY2F0ZWdvcmllc190b3AgdWwgbGkgYnV0dG9uOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmNhdGVnb3JpZXNfYXJlYS5jYXRlZ29yaWVzX3RvcCB1bCBsaSBidXR0b24gaW1nIHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5jYXRlZ29yaWVzX2FyZWEuY2F0ZWdvcmllc190b3AgdWwgbGkgYnV0dG9uIHN0cm9uZyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYWRkYm94eyBtYXJnaW46MTBweCAwO31cclxuLmFkZGJveCBpbWd7IHdpZHRoOjEwMCU7fVxyXG5cclxuXHJcblxyXG4ubGlzdGluZ2FyZWF7IG1hcmdpbi10b3A6MTBweDt9XHJcbi5saXN0aW5nYXJlYSAuaW5saW5lLWl0ZW0gaDJ7IGNvbG9yOiMwMDA7IGZvbnQtd2VpZ2h0OjYwMDt9XHJcblxyXG4ubGlzdGluZ2FyZWEgLmlubGluZS1pdGVtIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiKDAgMCAwIC8gNTglKTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5cclxuLmxpc3RpbmdfYm94e1xyXG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmxpc3RpbmdfYm94IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYigxODUgMTg1IDE4NSAvIDUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGlzdGluZ19ib3ggLmFkZC10by1jYXJ0IHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGlzdGluZ19ib3ggYnV0dG9uLnRodW1ibGUge1xyXG4gICAgbWF4LXdpZHRoOiAyNiU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmxpc3RpbmdfYm94IGJ1dHRvbi50aHVtYmxlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5saXN0aW5nX2JveCBidXR0b24udGh1bWJsZTpob3ZlciBpbWd7IG9wYWNpdHk6MC43O31cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3h7IHdpZHRoOjEwMCU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgcGFkZGluZzogMCA1NHB4IDAgMTVweDt9XHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IGgzeyBwYWRkaW5nOjA7IG1hcmdpbjowO3RleHQtYWxpZ246bGVmdDt9XHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IGgzIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgIFxyXG59XHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IGg2e1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiNmZjAwMDA7XHJcbn1cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3ggcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjM2EzYTNhO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmxpc3RpbmdfYm94IC5saXN0aW5nX3RleHRib3ggLnJldGluZ2JveCB7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG59XHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IC5yZXRpbmdib3ggcHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM2NjY7IGZvbnQtd2VpZ2h0OjQwMDt9XHJcbi5saXN0aW5nX2JveCAubGlzdGluZ190ZXh0Ym94IC5yZXRpbmdib3ggc3BhbiB7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcblxyXG4ubGlzdGluZ19ib3ggLmxpc3RpbmdfdGV4dGJveCAucmV0aW5nYm94IHNwYW4gaXsgbWFyZ2luLXJpZ2h0OjVweDsgY29sb3I6I0Y5MDt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnN0aWNreV9mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IHJnYigwIDAgMCAvIDIyJSk7XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbi5hY3RpdmUgaSB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBzbWFsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnN0aWNreV9mb290ZXIgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50Oy1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDZweCAxZW07XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIGltZ3sgd2lkdGg6MTAwJTsgbWF4LXdpZHRoOjEwMCU7IFxyXG4gICAgfVxyXG5cclxuLmxpc3RDYXJkIC5wcmljZSB7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMWVtOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzZTNmNjg7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5yZW1vdmUge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxpc3RDYXJkIC5wcmljZSAubnVtYmVyIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5saXN0Q2FyZCAucHJpY2UgLm51bWJlciAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1taW51cyB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1taW51czpob3Zlcnsgb3BhY2l0eTowLjc7fVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1wbHVzIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubGlzdENhcmQgLnByaWNlIC5udW1iZXIgLmJ0bi1wbHVzOmhvdmVyeyBvcGFjaXR5OjAuNzt9XHJcbi5saXN0Q2FyZCAuZHRsIC5kZXNjIC5pdGFlbU5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzEzMTMxO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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

      var HomePage = /*#__PURE__*/function () {
        function HomePage(http, navCtrl, storage, loadingController, alertController, toastController, route) {
          _classCallCheck(this, HomePage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.toastController = toastController;
          this.route = route;
          this.main_menu = "https://digiworld.ie/project/zouq/api/main_menu";
          this.restu_item = "https://digiworld.ie/project/zouq/api/home_item_list";
          this.main_menu_slide = "https://digiworld.ie/project/zouq/api/main_menu_slide";
          this.cart_data = [];
          this.cartTotalAmount = 0;
          this.cartcount = 0;
          this.count = 0;
          this.cart = [];
          this.cartdata = [];
          this.loader_val = true;
          this.pageNo = 1;
          this.dataMenu = [];
          this.limit = 5;
          this.img_url = 'https://digiworld.ie/project/zouq/uploads/category/';
          this.menuimg_url = 'https://digiworld.ie/project/zouq/uploads/menuImages/';
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("CountryState").then(function (val) {
              if (val) {
                _this.CountryStateHtml = val;
              } else {
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](); //console.log(this.userDetails.user_id);

                _this.http.get('https://api.ipdata.co?api-key=test', {
                  headers: headers
                }).subscribe(function (res) {
                  _this.res = res.json(); //console.log(this.res);

                  _this.storage.set("CountryState", _this.res.region + ',' + _this.res.country_name);

                  _this.CountryStateHtml = _this.res.region + ',' + _this.res.country_name;
                }, function (err) {
                  console.log(err);
                });
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            // this.storage.remove("userCart");
            this.storage.get("CountryState").then(function (val) {
              if (val) {
                _this2.CountryStateHtml = val;
              }
            });
            this.listing_menu();
            this.listing();
            this.storage.get("userCart").then(function (val) {
              if (val) {
                _this2.userCart = val;
                _this2.cart_data = val; //console.log(val);
              }
            });
            this.getCartItemCount();
            this.getOurFood();
          }
        }, {
          key: "getOurFood",
          value: function getOurFood() {
            var _this3 = this;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](); //console.log(this.userDetails.user_id);

            this.http.post(this.main_menu, {
              data: ''
            }, {
              headers: headers
            }).subscribe(function (res) {
              _this3.res = res.json(); //console.log(this.res.main_category);

              if (_this3.res.main_category) {
                _this3.main_menu_list = _this3.res.main_category;

                var _iterator = _createForOfIteratorHelper(_this3.main_menu_list),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var pro = _step.value;

                    if (pro.cat_image) {
                      pro.cat_image = _this3.img_url.concat(pro.cat_image);
                    }
                  } //loading.dismiss();

                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _this3.main_menu_list = ''; //alert("Server error");
                //loading.dismiss();
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            var _this4 = this;

            //let count=0;
            this.cartdata = [];
            this.cartTotalAmount = 0;
            this.count = 0;
            this.storage.get("userCart").then(function (val) {
              if (val) {
                _this4.userCart = val;
                _this4.cart_data = val;

                var _iterator2 = _createForOfIteratorHelper(_this4.userCart),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var p = _step2.value;

                    if (p.quantity > 0) {
                      _this4.count += 1;
                      _this4.cartTotalAmount += p.menu_price * p.quantity;

                      _this4.cartdata.push(p);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                _this4.cart_data = _this4.cartdata; //console.log(this.count);

                _this4.cartTotal = _this4.count;
                _this4.cartcount = _this4.count; //this.menu_list =this.cartdata;
                //console.log(this.cartdata);
              } else {
                _this4.cartTotal = _this4.count; //this.menu_list =this.cartdata;

                _this4.cartcount = _this4.count;
              }
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this5 = this;

            //this.navCtrl.navigateForward('/');
            setTimeout(function () {
              _this5.listing(); //this.listing_menu();


              var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();

              _this5.http.post(_this5.main_menu_slide, {
                data: ''
              }, {
                headers: headers
              }).subscribe(function (res) {
                _this5.res = res.json(); //console.log(this.res);

                if (_this5.res.main_menu) {
                  _this5.menu_slide_list = _this5.res.main_menu;

                  var _iterator3 = _createForOfIteratorHelper(_this5.res.main_menu),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var pro = _step3.value;
                      pro.menu_image = _this5.menuimg_url.concat(pro.menu_image);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }

                  event.target.complete();
                } else {
                  event.target.complete();
                }
              }, function (err) {
                event.target.complete();
              });
            }, 1500);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            //console.log(this.menu_list);
            this.getScrollData(true, event);
          }
        }, {
          key: "getScrollData",
          value: function getScrollData(isFirstLoad, event) {
            var _this6 = this;

            setTimeout(function () {
              _this6.dataMenu = [];
              _this6.limit = _this6.limit + 5;

              for (var i = 0; i < _this6.limit; i++) {
                if (_this6.menu_list[i]) {
                  _this6.dataMenu.push(_this6.menu_list[i]);
                }
              }

              _this6.pageNo++;
              if (isFirstLoad) event.target.complete();
            }, 1000);
          }
        }, {
          key: "listing",
          value: function listing() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

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
                      //await loading.present();
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](); //console.log(this.userDetails.user_id);

                      this.http.post(this.restu_item, {
                        data: ''
                      }, {
                        headers: headers
                      }).subscribe(function (res) {
                        _this7.res = res.json(); //console.log(this.res);

                        if (_this7.res) {
                          //loading.dismiss();
                          _this7.menu_list = _this7.res.menu_list;

                          if (_this7.menu_list && _this7.menu_list.length > 0) {
                            _this7.dataMenu = [];

                            for (var i = 0; i < _this7.limit; i++) {
                              if (_this7.menu_list[i]) {
                                _this7.dataMenu.push(_this7.menu_list[i]);
                              }
                            }
                          } else {
                            _this7.dataMenu = [];
                          }

                          var _iterator4 = _createForOfIteratorHelper(_this7.menu_list),
                              _step4;

                          try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                              var pro = _step4.value;

                              var _iterator5 = _createForOfIteratorHelper(_this7.cart_data),
                                  _step5;

                              try {
                                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                                  var p = _step5.value;

                                  if (p.menu_id == pro.menu_id) {
                                    pro.quantity = p.quantity; //break;
                                  }
                                }
                              } catch (err) {
                                _iterator5.e(err);
                              } finally {
                                _iterator5.f();
                              }
                            }
                          } catch (err) {
                            _iterator4.e(err);
                          } finally {
                            _iterator4.f();
                          }
                        } else {//alert("Server error");
                            //loading.dismiss();
                          }
                      }, function (err) {//console.log(err);
                        //loading.dismiss();
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "listing_menu",
          value: function listing_menu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var loading, headers;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: ''
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                      this.http.post(this.main_menu_slide, {
                        data: ''
                      }, {
                        headers: headers
                      }).subscribe(function (res) {
                        _this8.res = res.json(); //console.log(this.res);

                        if (_this8.res.main_menu) {
                          _this8.menu_slide_list = _this8.res.main_menu;

                          var _iterator6 = _createForOfIteratorHelper(_this8.res.main_menu),
                              _step6;

                          try {
                            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                              var pro = _step6.value;
                              pro.menu_image = _this8.menuimg_url.concat(pro.menu_image);
                            }
                          } catch (err) {
                            _iterator6.e(err);
                          } finally {
                            _iterator6.f();
                          }

                          loading.dismiss();
                        } else {
                          //alert("Server error");
                          loading.dismiss();
                        }
                      }, function (err) {
                        //console.log(err);
                        loading.dismiss();
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addToCart",
          value: function addToCart(index, menu_id, menulist) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var toast, added;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'Added',
                        duration: 1000,
                        animated: true,
                        //color:'success',
                        position: 'middle',
                        cssClass: 'my-toast-class'
                      });

                    case 2:
                      toast = _context3.sent;
                      added = false; // var data ={
                      //   "id": menu_id,
                      //    "name":menu_name,
                      //    "price":menu_price,
                      //    "quantity":1,
                      //    "image":menu_image
                      // }

                      this.storage.get("userCart").then(function (val) {
                        _this9.abc = [];
                        var added = false;

                        if (val) {
                          _this9.userCart = val;
                          _this9.cart_data = val;

                          var _iterator7 = _createForOfIteratorHelper(_this9.cart_data),
                              _step7;

                          try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                              var p = _step7.value;

                              if (p.menu_id == menulist.menu_id) {
                                _this9.dataMenu[index].quantity += 1;
                                p.quantity = parseInt(p.quantity) + 1;
                                added = true; //this.cart_data.push(menulist);

                                _this9.storage.set("userCart", _this9.cart_data).then(function () {
                                  _this9.getCartItemCount();
                                });

                                toast.present();
                                break;
                              }
                            }
                          } catch (err) {
                            _iterator7.e(err);
                          } finally {
                            _iterator7.f();
                          }

                          if (!added) {
                            menulist.quantity = 1;

                            _this9.cart_data.push(menulist);

                            _this9.storage.set("userCart", _this9.cart_data).then(function () {
                              _this9.getCartItemCount();
                            }); //this.getCartItemCount();


                            toast.present();
                          } //else{
                          //   this.getCartItemCount();
                          //   this.storage.set("userCart", this.cart_data);
                          // }

                        } else {
                          menulist.quantity = 1;

                          _this9.cart_data.push(menulist);

                          _this9.storage.set("userCart", _this9.cart_data).then(function () {
                            _this9.getCartItemCount();
                          }); //this.getCartItemCount();


                          toast.present();
                        }
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "decrementQty",
          value: function decrementQty(index, menu_id, menulist) {
            var _this10 = this;

            /*. if item passed then item.qty. */
            if (this.dataMenu[index].quantity - 1 <= 0) {
              this.dataMenu[index].quantity = 0;

              var _iterator8 = _createForOfIteratorHelper(this.cart_data),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var p = _step8.value;

                  if (p.menu_id == menulist.menu_id) {
                    p.quantity = 0; //console.log(this.cart_data);

                    this.storage.set("userCart", this.cart_data).then(function () {
                      _this10.getCartItemCount();
                    });
                    break;
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            } else {
              this.dataMenu[index].quantity -= 1;

              var _iterator9 = _createForOfIteratorHelper(this.cart_data),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _p = _step9.value;

                  if (_p.menu_id == menulist.menu_id) {
                    _p.quantity = parseInt(this.dataMenu[index].quantity); //console.log(this.cart_data);

                    this.storage.set("userCart", this.cart_data).then(function () {
                      _this10.getCartItemCount();
                    });
                    break;
                  }
                } //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);

              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          }
        }, {
          key: "incrementQty",
          value: function incrementQty(index, menu_id, menulist) {
            /*. if item passed then item.qty. */
            if (this.dataMenu[index].quantity > 0) {
              this.dataMenu[index].quantity += 1;

              var _iterator10 = _createForOfIteratorHelper(this.cart_data),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var p = _step10.value;

                  if (p.menu_id == menulist.menu_id) {
                    p.quantity = parseInt(this.dataMenu[index].quantity); //console.log(this.cart_data);

                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            } // else{
            //   this.menu_list[index].quantity = 1;
            // }

          }
        }, {
          key: "gotoMenu",
          value: function gotoMenu(id) {
            this.navCtrl.navigateForward('/restaurant-menu?main_menu=' + id);
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.navCtrl.navigateForward('/restaurant-menu');
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
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
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map