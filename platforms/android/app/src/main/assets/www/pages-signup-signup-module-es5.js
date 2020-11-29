(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding='true'>\n  <div class=\"vertical-center\">\n    <img src=\"assets/images/LogoCEC.png\" class=\"smallLogo\" />\n  </div>\n  <ion-text color=\"primary\" class=\"color-h3\">\n    <h3>Crear Cuenta</h3>\n  </ion-text>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Nombres</ion-label>\n        <ion-input [(ngModel)]=\"name\" name=\"nombre\" autocomplete=\"on\" type=\"text\"><ion-icon name=\"person-outline\"></ion-icon></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Apellidos</ion-label>\n        <ion-input [(ngModel)]=\"apellidos\" autocomplete=\"off\" name=\"apellidos\" type=\"text\"><ion-icon name=\"people-outline\"></ion-icon></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Identificación</ion-label>\n        <ion-input [(ngModel)]=\"id\" name=\"id\" autocomplete=\"on\" type=\"text\"><ion-icon name=\"finger-print-outline\"></ion-icon></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Correo electrónico</ion-label>\n        <ion-input [(ngModel)]=\"email\" autocomplete=\"on\" name=\"email\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Correo alternativo</ion-label>\n        <ion-input [(ngModel)]=\"email2\" autocomplete=\"on\" name=\"email2\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Dirección</ion-label>\n        <ion-input [(ngModel)]=\"direccion\" autocomplete=\"off\" name=\"direccion\" type=\"text\"><ion-icon name=\"globe-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass\" autocomplete=\"off\" name=\"pass\" type=\"password\"><ion-icon name=\"keypad-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Repetir Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass2\" autocomplete=\"off\" name=\"pass2\" type=\"password\"><ion-icon name=\"keypad-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">N° Celular</ion-label>\n        <ion-input [(ngModel)]=\"celular\" autocomplete=\"off\" name=\"celular\" type=\"text\"><ion-icon name=\"call-outline\"></ion-icon></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label position=\"stacked\">Género</ion-label>\n      <ion-select [(ngModel)]=\"genero\" placeholder=\"Seleccione su género\" interface=\"popover\" name=\"genero\">\n        <ion-select-option value=\"M\">Masculino</ion-select-option>\n        <ion-select-option value=\"F\">Femenino</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n      <ion-item lines='none'>\n        ¿Ya tienes una cuenta?<a routerLink='/login' slot=\"end\">Inicia Sesión</a>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" color=\"primary\" class=\"ion-padding-horizontal\" (click)=\"registrar()\">Registrar</ion-button>\n    <ion-button expand=\"block\" share=\"round\" color=\"medium\" class=\"ion-padding-horizontal\" routerLink=\"/login\">Cancelar</ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/signup/signup-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/signup/signup-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/pages/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/signup/signup.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.module.ts ***!
      \***********************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/pages/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/pages/signup/signup.page.ts");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/pages/signup/signup.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #ECECEC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcbiAgfVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/signup/signup.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/signup/signup.page.ts ***!
      \*********************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(alertController, router, route) {
          var _this = this;

          _classCallCheck(this, SignupPage);

          this.alertController = alertController;
          this.router = router;
          this.route = route;
          this.name = "";
          this.pass = "";
          this.pass2 = "";
          this.apellidos = "";
          this.email = "";
          this.celular = "";
          this.email2 = "";
          this.direccion = "";
          this.id = "";
          this.genero = "";
          this.router.queryParams.subscribe(function (params) {
            _this.data_aux = JSON.parse(params.user);
            _this.name = _this.data_aux.nombres;
            _this.email = _this.data_aux.correo;
            _this.apellidos = _this.data_aux.apellidos;
          });
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registrar",
          value: function registrar() {
            this.data = {
              nombres: this.name,
              apellidos: this.apellidos,
              identificacion: this.id,
              password: this.pass,
              correo: this.email,
              correo_alternativo: this.email2,
              telefono: this.celular,
              direccion: this.direccion,
              genero: this.genero
            };
            var self = this;
            var validado = this.validarCampos();

            if (validado && this.verificado) {
              jquery__WEBPACK_IMPORTED_MODULE_2__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "api/participante/", this.data).done(function (data) {
                self.alertError("Registro exitoso", "Su cuenta se ha creado exitosamente");
                self.route.navigate(["/educ/home/"]);
              }).fail(function (error) {
                var x = error.responseJSON;
                var isError = false;

                try {
                  x["correo"][0] != null || x["correo_alternativo"][0] != null ? self.alertError("Error al registrarse", "Introduzca una dirección de correo electrónico válida.") : isError = true;
                  x["identificacion"][0] != null ? self.alertError("Error al registrarse", x["identificacion"][0]) : isError = true;
                  !isError ? self.alertError("Error al registrarse", "El registro no fue exitoso") : null;
                } catch (ex) {
                  if (isError) {
                    self.alertError("Error al registrarse", "El registro no fue exitoso");
                  }
                }
              });
            }

            if (!validado) self.alertError("Campos vacíos", "Debe llenar todos los campos para poder registrarse");
          }
        }, {
          key: "validarCampos",
          value: function validarCampos() {
            if (this.name != "" && this.apellidos != "" && this.id != "" && this.email != "" && this.email2 != "" && this.genero != "" && this.pass != "" && this.pass2 != "" && this.celular != "" && this.direccion != "") {
              if (this.pass != this.pass2) {
                this.alertError("Verifique su clave", "Las contraseñas no coinciden");
                this.verificado = false;
              } else {
                this.verificado = true;
              }

              return true;
            }

            return false;
          }
        }, {
          key: "alertError",
          value: function alertError(msg, detalle) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Mensaje',
                        subHeader: detalle,
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/pages/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-signup-signup-module-es5.js.map