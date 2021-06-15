(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    \n  <div class=\"header\">\n    <div class=\"top-nav\">\n      <button class=\"btn-back\" (click)=\"back()\">\n        <i class=\"zmdi zmdi-arrow-left\"></i>\n      </button>\n      <div class=\"title\">Our Gallery</div>\n    </div>\n  </div>\n      \n  <div class=\"our_gallery_main_area\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-6\" *ngFor=\"let datalist of gallery_list\">\n          <div class=\"our_gallery_box\">\n            <img src=\"{{datalist.img_url+datalist.sl_image}}\" alt=\"\" title=\"{{datalist.sl_name}}\">\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n    \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/gallery/gallery-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/gallery/gallery-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: GalleryPageRoutingModule */

    /***/
    function srcAppGalleryGalleryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
        return GalleryPageRoutingModule;
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


      var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gallery.page */
      "./src/app/gallery/gallery.page.ts");

      var routes = [{
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
      }];

      var GalleryPageRoutingModule = function GalleryPageRoutingModule() {
        _classCallCheck(this, GalleryPageRoutingModule);
      };

      GalleryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GalleryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/gallery/gallery.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/gallery/gallery.module.ts ***!
      \*******************************************/

    /*! exports provided: GalleryPageModule */

    /***/
    function srcAppGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
        return GalleryPageModule;
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


      var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gallery-routing.module */
      "./src/app/gallery/gallery-routing.module.ts");
      /* harmony import */


      var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gallery.page */
      "./src/app/gallery/gallery.page.ts");

      var GalleryPageModule = function GalleryPageModule() {
        _classCallCheck(this, GalleryPageModule);
      };

      GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
      })], GalleryPageModule);
      /***/
    },

    /***/
    "./src/app/gallery/gallery.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/gallery/gallery.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppGalleryGalleryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #000;\n  position: fixed;\n  z-index: 1;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-left: -8px;\n}\n.col-lg-6 {\n  position: relative;\n  width: 50%;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.container {\n  padding: 0 1em;\n}\n.our_gallery_main_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 72px 0 0;\n}\n.our_gallery_box {\n  height: 150px;\n  overflow: hidden;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n.our_gallery_box img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s;\n}\n.our_gallery_box:hover img {\n  filter: grayscale(100%);\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNILGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUQ7QUFHQTtFQUNJLHNCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFGSjtBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtBQUFKO0FBSUE7RUFDSSxzQkFBQTtBQURKO0FBS0E7RUFFSSx5Q0FBQTtBQUZKO0FBSUE7RUFFSSx3QkFBQTtBQURKO0FBR0E7RUFFSSxhQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFBO0VBQ0ksdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0ei1pbmRleDoxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4udG9wLW5hdiAuYnRuLWJhY2sge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1uYXYgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNTYzMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYigwIDAgMCAvIDI0JSk7XHJcbn1cclxuXHJcblxyXG4uZnVsbC1zY3JlZW4uY2FydCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcbi5jb2wtbGctNntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuLm91cl9nYWxsZXJ5X21haW5fYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDcycHggMCAwO1xyXG59XHJcblxyXG4ub3VyX2dhbGxlcnlfYm94e1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ub3VyX2dhbGxlcnlfYm94IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLm91cl9nYWxsZXJ5X2JveDpob3ZlciBpbWd7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/gallery/gallery.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/gallery/gallery.page.ts ***!
      \*****************************************/

    /*! exports provided: GalleryPage */

    /***/
    function srcAppGalleryGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
        return GalleryPage;
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

      var GalleryPage = /*#__PURE__*/function () {
        function GalleryPage(http, navCtrl, storage, loadingController, alertController, location) {
          _classCallCheck(this, GalleryPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.location = location;
          this.appUrl = "https://digiworld.ie/project/zouq/api/gallery";
        }

        _createClass(GalleryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.listing();
          }
        }, {
          key: "listing",
          value: function listing() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

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
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](); //console.log(this.userDetails.user_id);

                      this.http.post(this.appUrl, {
                        data: ''
                      }, {
                        headers: headers
                      }).subscribe(function (res) {
                        _this.res = res.json(); //console.log(this.res);

                        if (_this.res.gallery_list) {
                          _this.gallery_list = _this.res.gallery_list;
                          loading.dismiss();
                        } else {
                          _this.gallery_list = ''; //alert("Server error");

                          loading.dismiss();
                        }
                      }, function (err) {
                        console.log(err);
                        loading.dismiss();
                      });

                    case 7:
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
            this.navCtrl.navigateForward('/sidebar');
          }
        }]);

        return GalleryPage;
      }();

      GalleryPage.ctorParameters = function () {
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

      GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./gallery.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./gallery.page.scss */
        "./src/app/gallery/gallery.page.scss"))["default"]]
      })], GalleryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gallery-gallery-module-es5.js.map