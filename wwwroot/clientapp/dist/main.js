(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <question-list></question-list>\r\n    \r\n</div>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Moja dupa';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-test',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_test_questionsList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/test/questionsList.component */ "./app/test/questionsList.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ClientApp_app_test_questionsList_component__WEBPACK_IMPORTED_MODULE_3__["QuestionList"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/test/questionsList.component.html":
/*!***********************************************!*\
  !*** ./app/test/questionsList.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"testContainer\">\r\n\r\n    <div class=\"pytanie\" *ngIf=\"egzamin==true; then isEgzamin; else noEgzamin\">\r\n        \r\n    </div>\r\n\r\n    <ng-template #isEgzamin>\r\n        \r\n        <div class=\"sekcjaBoczna\" style=\"font-size: 32px;\">\r\n            <p>{{indexPytanie + 1}}/{{questions1.length}}</p>\r\n            <p>{{czas}}</p>\r\n            <p>{{czasCalosci}}</p>\r\n            <button id=\"bNastepne\" class=\"btn btn-dark\">Nastepne</button>  \r\n        </div>\r\n\r\n        <div class=\"sekcjaPytania\">\r\n            \r\n            <div class=\"sekcjaTresci\">\r\n                <p>{{questions1[indexPytanie].content}}</p>\r\n                <hr/>\r\n            </div>\r\n\r\n            <div>\r\n                <div class=\"odpowiedz\" *ngFor=\"let a of questions1[indexPytanie].answers\" (click)=\"AddAnswerTaken(a,czas)\">\r\n                    {{a.content}}\r\n                </div>\r\n            </div>\r\n\r\n        </div>        \r\n    </ng-template>\r\n\r\n    <ng-template #noEgzamin>\r\n        <div>\r\n            <div *ngFor=\"let i of createRange(questions1.length);let myIn=index;\">\r\n                \r\n                <h3>{{questions1[myIn].content}}</h3>\r\n                <div *ngFor=\"let a of questions1[myIn].answers\">\r\n                    \r\n                    <div *ngIf=\"a.correctnes==true\" class=\"card bg-secondary p-4 text-light mb-5\">\r\n                        \r\n                        <p style=\"color: lightgreen; font-weight: 700;\">Poprawna odpowiedź: {{a.content}}</p>\r\n                        <p>Twoja odpowiedz: {{answers[myIn].content}}</p>\r\n                        <p>Czas udzielania odpowiedzi: {{answers[myIn].time}}</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n</div>"

/***/ }),

/***/ "./app/test/questionsList.component.ts":
/*!*********************************************!*\
  !*** ./app/test/questionsList.component.ts ***!
  \*********************************************/
/*! exports provided: QuestionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionList", function() { return QuestionList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var QuestionList = /** @class */ (function () {
    function QuestionList() {
        this.questions1 = new Array(new Question("Jak mam na imie", new Array(new Answer("Jakub", true), new Answer("Patryk", false), new Answer("Andrzej", false))), new Question("Ile mamy wojewodzctw?", new Array(new Answer("12", false), new Answer("23", false), new Answer("18", true))), new Question("Czy mozna zabic?", new Array(new Answer("Jak najbardziej", false), new Answer("To zależy", true), new Answer("Nie", false))));
        this.CZAS = 30;
        this.czasCalosci = 0;
        this.answers = new Array();
    }
    QuestionList.prototype.ngOnInit = function () {
        this.indexPytanie = 0;
        this.egzamin = true;
        this.czas = this.CZAS;
        this.coSekunda();
        this.StartMainClock();
    };
    QuestionList.prototype.createRange = function (number) {
        var item = [];
        for (var i = 1; i <= number; i++) {
            item.push(i);
        }
        return item;
    };
    QuestionList.prototype.onEndExam = function () {
        this.egzamin = false;
        clearInterval(this.czasCalosciInterwal);
    };
    QuestionList.prototype.coSekunda = function () {
        var _this = this;
        this.czasinterwal = setInterval(function () {
            _this.czas--;
            if (_this.czas <= 0) {
                clearInterval(_this.czasinterwal);
                if (_this.indexPytanie < _this.questions1.length - 1) {
                    _this.answers.push(new Answer("Pominieto", false));
                    _this.indexPytanie++;
                    _this.czas = _this.CZAS;
                    _this.coSekunda();
                }
                else {
                    _this.answers.push(new Answer("Pominieto", false));
                    _this.onEndExam();
                }
            }
        }, 1000);
    };
    QuestionList.prototype.StartMainClock = function () {
        var _this = this;
        this.czasCalosciInterwal = setInterval(function () {
            _this.czasCalosci++;
        }, 1000);
    };
    QuestionList.prototype.AddAnswerTaken = function (answer, czas) {
        answer.time = this.CZAS - czas;
        this.answers.push(answer);
        clearInterval(this.czasinterwal);
        if (this.indexPytanie < this.questions1.length) {
            this.indexPytanie++;
            this.czas = this.CZAS;
            this.coSekunda();
        }
        else {
            this.onEndExam();
        }
    };
    QuestionList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "question-list",
            template: __webpack_require__(/*! ./questionsList.component.html */ "./app/test/questionsList.component.html")
        })
    ], QuestionList);
    return QuestionList;
}());

var Question = /** @class */ (function () {
    function Question(content, answers) {
        this.content = content;
        this.answers = answers;
    }
    return Question;
}());
var Answer = /** @class */ (function () {
    function Answer(_content, _corr, _time) {
        if (_time === void 0) { _time = 0; }
        this.content = _content;
        this.correctnes = _corr;
        this.time = _time;
    }
    return Answer;
}());


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\walko\dot-net\Projekt1\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map