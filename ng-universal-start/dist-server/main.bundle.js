(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var shopping_list_component_1 = __webpack_require__("./src/app/shopping-list/shopping-list.component.ts");
var home_component_1 = __webpack_require__("./src/app/core/home/home.component.ts");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var firebase = __webpack_require__("firebase");
var AppComponent = (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.initializeApp({
            apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
            authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
        });
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
var http_1 = __webpack_require__("@angular/common/http");
var core_1 = __webpack_require__("@angular/core");
var store_1 = __webpack_require__("@ngrx/store");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var shopping_list_module_1 = __webpack_require__("./src/app/shopping-list/shopping-list.module.ts");
var auth_module_1 = __webpack_require__("./src/app/auth/auth.module.ts");
var core_module_1 = __webpack_require__("./src/app/core/core.module.ts");
var app_reducers_1 = __webpack_require__("./src/app/store/app.reducers.ts");
var effects_1 = __webpack_require__("@ngrx/effects");
var router_store_1 = __webpack_require__("@ngrx/router-store");
var store_devtools_1 = __webpack_require__("@ngrx/store-devtools");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var auth_effects_1 = __webpack_require__("./src/app/auth/store/auth.effects.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'my-universal-app' }),
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                shopping_list_module_1.ShoppingListModule,
                auth_module_1.AuthModule,
                core_module_1.CoreModule,
                store_1.StoreModule.forRoot(app_reducers_1.reducers),
                effects_1.EffectsModule.forRoot([auth_effects_1.AuthEffects]),
                router_store_1.StoreRouterConnectingModule,
                !environment_1.environment.production ? store_devtools_1.StoreDevtoolsModule.instrument() : []
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var platform_server_1 = __webpack_require__("@angular/platform-server");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    AppServerModule = __decorate([
        core_1.NgModule({
            imports: [
                app_module_1.AppModule,
                platform_server_1.ServerModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var store_1 = __webpack_require__("@ngrx/store");
var AuthGuard = (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.store.select('auth')
            .take(1)
            .map(function (authState) {
            return authState.authenticated;
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var signup_component_1 = __webpack_require__("./src/app/auth/signup/signup.component.ts");
var signin_component_1 = __webpack_require__("./src/app/auth/signin/signin.component.ts");
var authRoutes = [
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(authRoutes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
var signin_component_1 = __webpack_require__("./src/app/auth/signin/signin.component.ts");
var signup_component_1 = __webpack_require__("./src/app/auth/signup/signup.component.ts");
var auth_routing_module_1 = __webpack_require__("./src/app/auth/auth-routing.module.ts");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent
            ],
            imports: [
                forms_1.FormsModule,
                auth_routing_module_1.AuthRoutingModule
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var store_1 = __webpack_require__("@ngrx/store");
var AuthActions = __webpack_require__("./src/app/auth/store/auth.actions.ts");
var SigninComponent = (function () {
    function SigninComponent(store) {
        this.store = store;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.store.dispatch(new AuthActions.TrySignin({ username: email, password: password }));
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign Up</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var store_1 = __webpack_require__("@ngrx/store");
var AuthActions = __webpack_require__("./src/app/auth/store/auth.actions.ts");
var SignupComponent = (function () {
    function SignupComponent(store) {
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.store.dispatch(new AuthActions.TrySignup({ username: email, password: password }));
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TRY_SIGNUP = 'TRY_SIGNUP';
exports.SIGNUP = 'SIGNUP';
exports.TRY_SIGNIN = 'TRY_SIGNIN';
exports.SIGNIN = 'SIGNIN';
exports.LOGOUT = 'LOGOUT';
exports.SET_TOKEN = 'SET_TOKEN';
var TrySignup = (function () {
    function TrySignup(payload) {
        this.payload = payload;
        this.type = exports.TRY_SIGNUP;
    }
    return TrySignup;
}());
exports.TrySignup = TrySignup;
var TrySignin = (function () {
    function TrySignin(payload) {
        this.payload = payload;
        this.type = exports.TRY_SIGNIN;
    }
    return TrySignin;
}());
exports.TrySignin = TrySignin;
var Signup = (function () {
    function Signup() {
        this.type = exports.SIGNUP;
    }
    return Signup;
}());
exports.Signup = Signup;
var Signin = (function () {
    function Signin() {
        this.type = exports.SIGNIN;
    }
    return Signin;
}());
exports.Signin = Signin;
var Logout = (function () {
    function Logout() {
        this.type = exports.LOGOUT;
    }
    return Logout;
}());
exports.Logout = Logout;
var SetToken = (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = exports.SET_TOKEN;
    }
    return SetToken;
}());
exports.SetToken = SetToken;


/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var effects_1 = __webpack_require__("@ngrx/effects");
var router_1 = __webpack_require__("@angular/router");
__webpack_require__("rxjs/add/operator/map");
__webpack_require__("rxjs/add/operator/do");
__webpack_require__("rxjs/add/operator/switchMap");
__webpack_require__("rxjs/add/operator/mergeMap");
var fromPromise_1 = __webpack_require__("rxjs/observable/fromPromise");
var firebase = __webpack_require__("firebase");
var AuthActions = __webpack_require__("./src/app/auth/store/auth.actions.ts");
var AuthEffects = (function () {
    function AuthEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.authSignup = this.actions$
            .ofType(AuthActions.TRY_SIGNUP)
            .map(function (action) {
            return action.payload;
        })
            .switchMap(function (authData) {
            return fromPromise_1.fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        })
            .switchMap(function () {
            return fromPromise_1.fromPromise(firebase.auth().currentUser.getIdToken());
        })
            .mergeMap(function (token) {
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });
        this.authSignin = this.actions$
            .ofType(AuthActions.TRY_SIGNIN)
            .map(function (action) {
            return action.payload;
        })
            .switchMap(function (authData) {
            return fromPromise_1.fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        })
            .switchMap(function () {
            return fromPromise_1.fromPromise(firebase.auth().currentUser.getIdToken());
        })
            .mergeMap(function (token) {
            _this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });
        this.authLogout = this.actions$
            .ofType(AuthActions.LOGOUT)
            .do(function () {
            _this.router.navigate(['/']);
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignup", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignin", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authLogout", void 0);
    AuthEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, router_1.Router])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;


/***/ }),

/***/ "./src/app/auth/store/auth.reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthActions = __webpack_require__("./src/app/auth/store/auth.actions.ts");
var initialState = {
    token: null,
    authenticated: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (AuthActions.SIGNUP):
        case (AuthActions.SIGNIN):
            return __assign({}, state, { authenticated: true });
        case (AuthActions.LOGOUT):
            return __assign({}, state, { token: null, authenticated: false });
        case (AuthActions.SET_TOKEN):
            return __assign({}, state, { token: action.payload });
        default:
            return state;
    }
}
exports.authReducer = authReducer;


/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/common/http");
var header_component_1 = __webpack_require__("./src/app/core/header/header.component.ts");
var home_component_1 = __webpack_require__("./src/app/core/home/home.component.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var auth_interceptor_1 = __webpack_require__("./src/app/shared/auth.interceptor.ts");
var logging_interceptor_1 = __webpack_require__("./src/app/shared/logging.interceptor.ts");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                app_routing_module_1.AppRoutingModule
            ],
            exports: [
                app_routing_module_1.AppRoutingModule,
                header_component_1.HeaderComponent
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_1.AuthInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: logging_interceptor_1.LoggingInterceptor, multi: true }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Recipe Book</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <ng-template [ngIf]=\"!(authState | async).authenticated\">\n          <li><a routerLink=\"/signup\">Register</a></li>\n          <li><a routerLink=\"/signin\">Login</a></li>\n        </ng-template>\n\n        <li><a\n          style=\"cursor: pointer;\"\n          (click)=\"onLogout()\"\n          *ngIf=\"(authState | async).authenticated\">Logout</a></li>\n\n        <li class=\"dropdown\" appDropdown *ngIf=\"(authState | async).authenticated\">\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a></li>\n            <li><a style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// import { HttpEvent, HttpEventType } from '@angular/common/http';
var store_1 = __webpack_require__("@ngrx/store");
var AuthActions = __webpack_require__("./src/app/auth/store/auth.actions.ts");
var RecipeActions = __webpack_require__("./src/app/recipes/store/recipe.actions.ts");
var HeaderComponent = (function () {
    function HeaderComponent(store) {
        this.store = store;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    HeaderComponent.prototype.onSaveData = function () {
        this.store.dispatch(new RecipeActions.StoreRecipes());
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.store.dispatch(new RecipeActions.FetchRecipes());
    };
    HeaderComponent.prototype.onLogout = function () {
        this.store.dispatch(new AuthActions.Logout());
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html")
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/core/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to the Recipe Book</h2>\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/core/home/home.component.html"),
            styles: [__webpack_require__("./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img\n      [src]=\"(recipeState | async).recipes[id].imagePath\"\n      alt=\"{{ (recipeState | async).recipes[id].name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 300px;\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ (recipeState | async).recipes[id].name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div\n      class=\"btn-group\"\n      appDropdown>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary dropdown-toggle\">\n        Manage Recipe <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping List</a></li>\n        <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a></li>\n        <li><a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{ (recipeState | async).recipes[id].description }}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\">\n      <li\n        class=\"list-group-item\"\n        *ngFor=\"let ingredient of (recipeState | async).recipes[id].ingredients\">\n        {{ ingredient.name }} - {{ ingredient.amount }}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var store_1 = __webpack_require__("@ngrx/store");
__webpack_require__("rxjs/add/operator/take");
var ShoppingListActions = __webpack_require__("./src/app/shopping-list/store/shopping-list.actions.ts");
var RecipeActions = __webpack_require__("./src/app/recipes/store/recipe.actions.ts");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipeState = _this.store.select('recipes');
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        var _this = this;
        this.store.select('recipes')
            .take(1)
            .subscribe(function (recipeState) {
            _this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[_this.id].ingredients));
        });
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-detail',
            template: __webpack_require__("./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            store_1.Store])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;


/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-success\"\n            [disabled]=\"!recipeForm.valid\">Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              formControlName=\"name\"\n              class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\">Image URL</label>\n            <input\n              type=\"text\"\n              id=\"imagePath\"\n              formControlName=\"imagePath\"\n              class=\"form-control\"\n              #imagePath>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <img [src]=\"imagePath.value\" class=\"img-responsive\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea\n              type=\"text\"\n              id=\"description\"\n              class=\"form-control\"\n              formControlName=\"description\"\n              rows=\"6\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" formArrayName=\"ingredients\">\n          <div\n            class=\"row\"\n            *ngFor=\"let ingredientCtrl of getControls(); let i = index\"\n            [formGroupName]=\"i\"\n            style=\"margin-top: 10px;\">\n            <div class=\"col-xs-8\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"name\">\n            </div>\n            <div class=\"col-xs-2\">\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"amount\">\n            </div>\n            <div class=\"col-xs-2\">\n              <button\n                type=\"button\"\n                class=\"btn btn-danger\"\n                (click)=\"onDeleteIngredient(i)\">X</button>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"onAddIngredient()\">Add Ingredient</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var forms_1 = __webpack_require__("@angular/forms");
var store_1 = __webpack_require__("@ngrx/store");
var RecipeActions = __webpack_require__("./src/app/recipes/store/recipe.actions.ts");
var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.store.dispatch(new RecipeActions.UpdateRecipe({
                index: this.id,
                updatedRecipe: this.recipeForm.value
            }));
        }
        else {
            this.store.dispatch(new RecipeActions.AddRecipe(this.recipeForm.value));
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new forms_1.FormGroup({
            'name': new forms_1.FormControl(null, forms_1.Validators.required),
            'amount': new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.initForm = function () {
        var _this = this;
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new forms_1.FormArray([]);
        if (this.editMode) {
            this.store.select('recipes')
                .take(1)
                .subscribe(function (recipeState) {
                var recipe = recipeState.recipes[_this.id];
                recipeName = recipe.name;
                recipeImagePath = recipe.imagePath;
                recipeDescription = recipe.description;
                if (recipe['ingredients']) {
                    for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                        var ingredient = _a[_i];
                        recipeIngredients.push(new forms_1.FormGroup({
                            'name': new forms_1.FormControl(ingredient.name, forms_1.Validators.required),
                            'amount': new forms_1.FormControl(ingredient.amount, [
                                forms_1.Validators.required,
                                forms_1.Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        }));
                    }
                }
            });
        }
        this.recipeForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(recipeName, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(recipeImagePath, forms_1.Validators.required),
            'description': new forms_1.FormControl(recipeDescription, forms_1.Validators.required),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.prototype.getControls = function () {
        return this.recipeForm.get('ingredients').controls;
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-edit',
            template: __webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            store_1.Store])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;


/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a\n  style=\"cursor: pointer;\"\n  [routerLink]=\"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n    <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n        <img\n          [src]=\"recipe.imagePath\"\n          alt=\"{{ recipe.name }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 50px;\">\n      </span>\n</a>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var recipe_model_1 = __webpack_require__("./src/app/recipes/recipe.model.ts");
var RecipeItemComponent = (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", recipe_model_1.Recipe)
    ], RecipeItemComponent.prototype, "recipe", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-item',
            template: __webpack_require__("./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());
exports.RecipeItemComponent = RecipeItemComponent;


/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item\n      *ngFor=\"let recipeEl of (recipeState | async).recipes; let i = index\"\n      [recipe]=\"recipeEl\"\n      [index]=\"i\"></app-recipe-item>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var store_1 = __webpack_require__("@ngrx/store");
var RecipeListComponent = (function () {
    function RecipeListComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipeState = this.store.select('recipes');
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            template: __webpack_require__("./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            store_1.Store])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;


/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Please select a Recipe!</h3>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var RecipeStartComponent = (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-start',
            template: __webpack_require__("./src/app/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipe-start/recipe-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());
exports.RecipeStartComponent = RecipeStartComponent;


/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Recipe = (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
exports.Recipe = Recipe;


/***/ }),

/***/ "./src/app/recipes/recipes-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var auth_guard_service_1 = __webpack_require__("./src/app/auth/auth-guard.service.ts");
var recipe_edit_component_1 = __webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.ts");
var recipe_detail_component_1 = __webpack_require__("./src/app/recipes/recipe-detail/recipe-detail.component.ts");
var recipe_start_component_1 = __webpack_require__("./src/app/recipes/recipe-start/recipe-start.component.ts");
var recipes_component_1 = __webpack_require__("./src/app/recipes/recipes.component.ts");
var recipesRoutes = [
    { path: '', component: recipes_component_1.RecipesComponent, children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            { path: 'new', component: recipe_edit_component_1.RecipeEditComponent, canActivate: [auth_guard_service_1.AuthGuard] },
            { path: ':id', component: recipe_detail_component_1.RecipeDetailComponent },
            { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent, canActivate: [auth_guard_service_1.AuthGuard] },
        ] },
];
var RecipesRoutingModule = (function () {
    function RecipesRoutingModule() {
    }
    RecipesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(recipesRoutes)
            ],
            exports: [router_1.RouterModule],
            providers: [
                auth_guard_service_1.AuthGuard
            ]
        })
    ], RecipesRoutingModule);
    return RecipesRoutingModule;
}());
exports.RecipesRoutingModule = RecipesRoutingModule;


/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-recipe-list></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var RecipesComponent = (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = __decorate([
        core_1.Component({
            selector: 'app-recipes',
            template: __webpack_require__("./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;


/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
var common_1 = __webpack_require__("@angular/common");
var store_1 = __webpack_require__("@ngrx/store");
var effects_1 = __webpack_require__("@ngrx/effects");
var recipes_component_1 = __webpack_require__("./src/app/recipes/recipes.component.ts");
var recipe_start_component_1 = __webpack_require__("./src/app/recipes/recipe-start/recipe-start.component.ts");
var recipe_list_component_1 = __webpack_require__("./src/app/recipes/recipe-list/recipe-list.component.ts");
var recipe_edit_component_1 = __webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.ts");
var recipe_detail_component_1 = __webpack_require__("./src/app/recipes/recipe-detail/recipe-detail.component.ts");
var recipe_item_component_1 = __webpack_require__("./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
var recipes_routing_module_1 = __webpack_require__("./src/app/recipes/recipes-routing.module.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var recipe_reducers_1 = __webpack_require__("./src/app/recipes/store/recipe.reducers.ts");
var recipe_effects_1 = __webpack_require__("./src/app/recipes/store/recipe.effects.ts");
var RecipesModule = (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        core_1.NgModule({
            declarations: [
                recipes_component_1.RecipesComponent,
                recipe_start_component_1.RecipeStartComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_edit_component_1.RecipeEditComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_item_component_1.RecipeItemComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                recipes_routing_module_1.RecipesRoutingModule,
                shared_module_1.SharedModule,
                store_1.StoreModule.forFeature('recipes', recipe_reducers_1.recipeReducer),
                effects_1.EffectsModule.forFeature([recipe_effects_1.RecipeEffects])
            ]
        })
    ], RecipesModule);
    return RecipesModule;
}());
exports.RecipesModule = RecipesModule;


/***/ }),

/***/ "./src/app/recipes/store/recipe.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_RECIPES = 'SET_RECIPES';
exports.ADD_RECIPE = 'ADD_RECIPE';
exports.UPDATE_RECIPE = 'UPDATE_RECIPE';
exports.DELETE_RECIPE = 'DELETE_RECIPE';
exports.STORE_RECIPES = 'STORE_RECIPES';
exports.FETCH_RECIPES = 'FETCH_RECIPES';
var SetRecipes = (function () {
    function SetRecipes(payload) {
        this.payload = payload;
        this.type = exports.SET_RECIPES;
    }
    return SetRecipes;
}());
exports.SetRecipes = SetRecipes;
var AddRecipe = (function () {
    function AddRecipe(payload) {
        this.payload = payload;
        this.type = exports.ADD_RECIPE;
    }
    return AddRecipe;
}());
exports.AddRecipe = AddRecipe;
var UpdateRecipe = (function () {
    function UpdateRecipe(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_RECIPE;
    }
    return UpdateRecipe;
}());
exports.UpdateRecipe = UpdateRecipe;
var DeleteRecipe = (function () {
    function DeleteRecipe(payload) {
        this.payload = payload;
        this.type = exports.DELETE_RECIPE;
    }
    return DeleteRecipe;
}());
exports.DeleteRecipe = DeleteRecipe;
var StoreRecipes = (function () {
    function StoreRecipes() {
        this.type = exports.STORE_RECIPES;
    }
    return StoreRecipes;
}());
exports.StoreRecipes = StoreRecipes;
var FetchRecipes = (function () {
    function FetchRecipes() {
        this.type = exports.FETCH_RECIPES;
    }
    return FetchRecipes;
}());
exports.FetchRecipes = FetchRecipes;


/***/ }),

/***/ "./src/app/recipes/store/recipe.effects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var effects_1 = __webpack_require__("@ngrx/effects");
__webpack_require__("rxjs/add/operator/switchMap");
__webpack_require__("rxjs/add/operator/withLatestFrom");
var http_1 = __webpack_require__("@angular/common/http");
var store_1 = __webpack_require__("@ngrx/store");
var RecipeActions = __webpack_require__("./src/app/recipes/store/recipe.actions.ts");
var RecipeEffects = (function () {
    function RecipeEffects(actions$, httpClient, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.store = store;
        this.recipeFetch = this.actions$
            .ofType(RecipeActions.FETCH_RECIPES)
            .switchMap(function (action) {
            return _this.httpClient.get('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'
            });
        })
            .map(function (recipes) {
            console.log(recipes);
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
            };
        });
        this.recipeStore = this.actions$
            .ofType(RecipeActions.STORE_RECIPES)
            .withLatestFrom(this.store.select('recipes'))
            .switchMap(function (_a) {
            var action = _a[0], state = _a[1];
            var req = new http_1.HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', state.recipes, { reportProgress: true });
            return _this.httpClient.request(req);
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RecipeEffects.prototype, "recipeFetch", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], RecipeEffects.prototype, "recipeStore", void 0);
    RecipeEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            http_1.HttpClient,
            store_1.Store])
    ], RecipeEffects);
    return RecipeEffects;
}());
exports.RecipeEffects = RecipeEffects;


/***/ }),

/***/ "./src/app/recipes/store/recipe.reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var recipe_model_1 = __webpack_require__("./src/app/recipes/recipe.model.ts");
var ingredient_model_1 = __webpack_require__("./src/app/shared/ingredient.model.ts");
var RecipeActions = __webpack_require__("./src/app/recipes/store/recipe.actions.ts");
var initialState = {
    recipes: [
        new recipe_model_1.Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
            new ingredient_model_1.Ingredient('Meat', 1),
            new ingredient_model_1.Ingredient('French Fries', 20)
        ]),
        new recipe_model_1.Recipe('Big Fat Burger', 'What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
            new ingredient_model_1.Ingredient('Buns', 2),
            new ingredient_model_1.Ingredient('Meat', 1)
        ])
    ]
};
function recipeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return __assign({}, state, { recipes: action.payload.slice() });
        case (RecipeActions.ADD_RECIPE):
            return __assign({}, state, { recipes: state.recipes.concat([action.payload]) });
        case (RecipeActions.UPDATE_RECIPE):
            var recipe = state.recipes[action.payload.index];
            var updatedRecipe = __assign({}, recipe, action.payload.updatedRecipe);
            var recipes = state.recipes.slice();
            recipes[action.payload.index] = updatedRecipe;
            return __assign({}, state, { recipes: recipes });
        case (RecipeActions.DELETE_RECIPE):
            var oldRecipes = state.recipes.slice();
            oldRecipes.splice(action.payload, 1);
            return __assign({}, state, { recipes: oldRecipes });
        default:
            return state;
    }
}
exports.recipeReducer = recipeReducer;


/***/ }),

/***/ "./src/app/shared/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var store_1 = __webpack_require__("@ngrx/store");
__webpack_require__("rxjs/add/operator/switchMap");
var AuthInterceptor = (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log('Intercepted!', req);
        // const copiedReq = req.clone({headers: req.headers.set('', '')});
        return this.store.select('auth')
            .take(1)
            .switchMap(function (authState) {
            var copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
            return next.handle(copiedReq);
        });
        // return null;
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        core_1.HostBinding('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());
exports.DropdownDirective = DropdownDirective;


/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());
exports.Ingredient = Ingredient;


/***/ }),

/***/ "./src/app/shared/logging.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("rxjs/add/operator/do");
var LoggingInterceptor = (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).do(function (event) {
            console.log('Logging interceptor', event);
        });
    };
    return LoggingInterceptor;
}());
exports.LoggingInterceptor = LoggingInterceptor;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var dropdown_directive_1 = __webpack_require__("./src/app/shared/dropdown.directive.ts");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                dropdown_directive_1.DropdownDirective
            ],
            exports: [
                common_1.CommonModule,
                dropdown_directive_1.DropdownDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            name=\"name\"\n            ngModel\n            required\n          >\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input\n            type=\"number\"\n            id=\"amount\"\n            class=\"form-control\"\n            name=\"amount\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button\n            class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n          <button\n            class=\"btn btn-danger\"\n            type=\"button\"\n            (click)=\"onDelete()\"\n            *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
var store_1 = __webpack_require__("@ngrx/store");
var ingredient_model_1 = __webpack_require__("./src/app/shared/ingredient.model.ts");
var ShoppingListActions = __webpack_require__("./src/app/shopping-list/store/shopping-list.actions.ts");
var ShoppingEditComponent = (function () {
    function ShoppingEditComponent(store) {
        this.store = store;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('shoppingList')
            .subscribe(function (data) {
            if (data.editedIngredientIndex > -1) {
                _this.editedItem = data.editedIngredient;
                _this.editMode = true;
                _this.slForm.setValue({
                    name: _this.editedItem.name,
                    amount: _this.editedItem.amount
                });
            }
            else {
                _this.editMode = false;
            }
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new ingredient_model_1.Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIngredient }));
        }
        else {
            this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new ShoppingListActions.StopEdit());
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", forms_1.NgForm)
    ], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-edit',
            template: __webpack_require__("./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__("./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());
exports.ShoppingEditComponent = ShoppingEditComponent;


/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\"\n        style=\"cursor: pointer\"\n        *ngFor=\"let ingredient of (shoppingListState | async).ingredients; let i = index\"\n        (click)=\"onEditItem(i)\"\n      >\n        {{ ingredient.name }} ({{ ingredient.amount }})\n      </a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var store_1 = __webpack_require__("@ngrx/store");
var ShoppingListActions = __webpack_require__("./src/app/shopping-list/store/shopping-list.actions.ts");
var ShoppingListComponent = (function () {
    function ShoppingListComponent(store) {
        this.store = store;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.shoppingListState = this.store.select('shoppingList');
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list',
            template: __webpack_require__("./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__("./src/app/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;


/***/ }),

/***/ "./src/app/shopping-list/shopping-list.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var forms_1 = __webpack_require__("@angular/forms");
var shopping_list_component_1 = __webpack_require__("./src/app/shopping-list/shopping-list.component.ts");
var shopping_edit_component_1 = __webpack_require__("./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule = __decorate([
        core_1.NgModule({
            declarations: [
                shopping_list_component_1.ShoppingListComponent,
                shopping_edit_component_1.ShoppingEditComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ]
        })
    ], ShoppingListModule);
    return ShoppingListModule;
}());
exports.ShoppingListModule = ShoppingListModule;


/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_INGREDIENT = 'ADD_INGREDIENT';
exports.ADD_INGREDIENTS = 'ADD_INGREDIENTS';
exports.UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
exports.DELETE_INGREDIENT = 'DELETE_INGREDIENT';
exports.START_EDIT = 'START_EDIT';
exports.STOP_EDIT = 'STOP_EDIT';
var AddIngredient = (function () {
    function AddIngredient(payload) {
        this.payload = payload;
        this.type = exports.ADD_INGREDIENT;
    }
    return AddIngredient;
}());
exports.AddIngredient = AddIngredient;
var AddIngredients = (function () {
    function AddIngredients(payload) {
        this.payload = payload;
        this.type = exports.ADD_INGREDIENTS;
    }
    return AddIngredients;
}());
exports.AddIngredients = AddIngredients;
var UpdateIngredient = (function () {
    function UpdateIngredient(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_INGREDIENT;
    }
    return UpdateIngredient;
}());
exports.UpdateIngredient = UpdateIngredient;
var DeleteIngredient = (function () {
    function DeleteIngredient() {
        this.type = exports.DELETE_INGREDIENT;
    }
    return DeleteIngredient;
}());
exports.DeleteIngredient = DeleteIngredient;
var StartEdit = (function () {
    function StartEdit(payload) {
        this.payload = payload;
        this.type = exports.START_EDIT;
    }
    return StartEdit;
}());
exports.StartEdit = StartEdit;
var StopEdit = (function () {
    function StopEdit() {
        this.type = exports.STOP_EDIT;
    }
    return StopEdit;
}());
exports.StopEdit = StopEdit;


/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingListActions = __webpack_require__("./src/app/shopping-list/store/shopping-list.actions.ts");
var ingredient_model_1 = __webpack_require__("./src/app/shared/ingredient.model.ts");
var initialState = {
    ingredients: [
        new ingredient_model_1.Ingredient('Apples', 5),
        new ingredient_model_1.Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function shoppingListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return __assign({}, state, { ingredients: state.ingredients.concat([action.payload]) });
        case ShoppingListActions.ADD_INGREDIENTS:
            return __assign({}, state, { ingredients: state.ingredients.concat(action.payload) });
        case ShoppingListActions.UPDATE_INGREDIENT:
            var ingredient = state.ingredients[state.editedIngredientIndex];
            var updatedIngredient = __assign({}, ingredient, action.payload.ingredient);
            var ingredients = state.ingredients.slice();
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return __assign({}, state, { ingredients: ingredients, editedIngredient: null, editedIngredientIndex: -1 });
        case ShoppingListActions.DELETE_INGREDIENT:
            var oldIngredients = state.ingredients.slice();
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return __assign({}, state, { ingredients: oldIngredients, editedIngredient: null, editedIngredientIndex: -1 });
        case ShoppingListActions.START_EDIT:
            var editedIngredient = __assign({}, state.ingredients[action.payload]);
            return __assign({}, state, { editedIngredient: editedIngredient, editedIngredientIndex: action.payload });
        case ShoppingListActions.STOP_EDIT:
            return __assign({}, state, { editedIngredient: null, editedIngredientIndex: -1 });
        default:
            return state;
    }
}
exports.shoppingListReducer = shoppingListReducer;


/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fromShoppingList = __webpack_require__("./src/app/shopping-list/store/shopping-list.reducers.ts");
var fromAuth = __webpack_require__("./src/app/auth/store/auth.reducers.ts");
exports.reducers = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.server.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __lazy_0__ = __webpack_require__("./src/app/recipes/recipes.module.ts");
var core_1 = __webpack_require__("@angular/core");
// EXPORT
var app_server_module_1 = __webpack_require__("./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
core_1.enableProdMode();
exports.LAZY_MODULE_MAP = { "./recipes/recipes.module#RecipesModule": __lazy_0__.RecipesModule };


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.server.ts");


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-server":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ngrx/effects":
/***/ (function(module, exports) {

module.exports = require("@ngrx/effects");

/***/ }),

/***/ "@ngrx/router-store":
/***/ (function(module, exports) {

module.exports = require("@ngrx/router-store");

/***/ }),

/***/ "@ngrx/store":
/***/ (function(module, exports) {

module.exports = require("@ngrx/store");

/***/ }),

/***/ "@ngrx/store-devtools":
/***/ (function(module, exports) {

module.exports = require("@ngrx/store-devtools");

/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "rxjs/add/operator/do":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ }),

/***/ "rxjs/add/operator/map":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),

/***/ "rxjs/add/operator/mergeMap":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/mergeMap");

/***/ }),

/***/ "rxjs/add/operator/switchMap":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/switchMap");

/***/ }),

/***/ "rxjs/add/operator/take":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/take");

/***/ }),

/***/ "rxjs/add/operator/withLatestFrom":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/withLatestFrom");

/***/ }),

/***/ "rxjs/observable/fromPromise":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/fromPromise");

/***/ })

/******/ })));