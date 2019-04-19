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

/***/ "./app/Models/test.ts":
/*!****************************!*\
  !*** ./app/Models/test.ts ***!
  \****************************/
/*! exports provided: Question, Answer, TestSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSummary", function() { return TestSummary; });
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

var TestSummary = /** @class */ (function () {
    function TestSummary() {
    }
    return TestSummary;
}());



/***/ }),

/***/ "./app/answer/answer.component.css":
/*!*****************************************!*\
  !*** ./app/answer/answer.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Fuc3dlci9hbnN3ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/answer/answer.component.html":
/*!******************************************!*\
  !*** ./app/answer/answer.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group-lg mt-4\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text bg-info\" id=\"input-Group-sizing-lg\"> {{nr}}. </span>\n  </div>\n  <input type=\"text\" class=\"form-control\" [value]=\"answer.content\" disabled=\"true\">\n</div>\n"

/***/ }),

/***/ "./app/answer/answer.component.ts":
/*!****************************************!*\
  !*** ./app/answer/answer.component.ts ***!
  \****************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/Models/test */ "./app/Models/test.ts");



var AnswerComponent = /** @class */ (function () {
    function AnswerComponent() {
        this.nr = 0;
        this.answer = new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_2__["Answer"]("Kuba", true);
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AnswerComponent.prototype, "nr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_2__["Answer"])
    ], AnswerComponent.prototype, "answer", void 0);
    AnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./app/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.css */ "./app/answer/answer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n    <question-list></question-list>\n    \n</div>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent, Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
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

var Range = /** @class */ (function () {
    function Range() {
    }
    Range.Create = function (range) {
        var item = [];
        for (var i = 1; i <= range; i++) {
            item.push(i);
        }
        return item;
    };
    return Range;
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
/* harmony import */ var _wynik_wynik_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wynik/wynik.component */ "./app/wynik/wynik.component.ts");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answer/answer.component */ "./app/answer/answer.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ClientApp_app_test_questionsList_component__WEBPACK_IMPORTED_MODULE_3__["QuestionList"],
                _wynik_wynik_component__WEBPACK_IMPORTED_MODULE_5__["WynikComponent"],
                _answer_answer_component__WEBPACK_IMPORTED_MODULE_6__["AnswerComponent"]
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

module.exports = "<div id=\"testContainer\">\n\n    <div class=\"pytanie\" *ngIf=\"egzamin==true; then isEgzamin; else noEgzamin\"></div>\n\n    <ng-template #isEgzamin>\n\n        <div class=\"row\">\n            <div class=\"col col-lg-4\">\n                <p>{{indexPytanie + 1}}/{{questions1.length}}</p>\n                <p>{{czas}}</p>\n                <p>{{czasCalosci}}</p>\n                <button id=\"bNastepne\" class=\"btn btn-dark\">Nastepne</button> \n            </div>\n            <div class=\"col col-lg-8 card p-4\">\n                <div class=\"sekcjaTresci\">\n                    <p>{{questions1[indexPytanie].content}}</p>\n                    <hr class=\"bg-info\"/>\n                </div>\n                <div *ngFor=\"let a of questions1[indexPytanie].answers; let ind=index\" (click)=\"AddAnswerTaken(a,czas)\">\n                        <app-answer [answer]=\"a\" [nr]=\"ind\"></app-answer>\n                </div>\n            </div>\n        </div>\n        <!--\n        <div class=\"sekcjaBoczna\" style=\"font-size: 32px;\">\n            <p>{{indexPytanie + 1}}/{{questions1.length}}</p>\n            <p>{{czas}}</p>\n            <p>{{czasCalosci}}</p>\n            <button id=\"bNastepne\" class=\"btn btn-dark\">Nastepne</button>  \n        </div>\n\n        <div class=\"sekcjaPytania\">\n            <div class=\"sekcjaTresci\">\n                <p>{{questions1[indexPytanie].content}}</p>\n                <hr class=\"bg-info\"/>\n            </div>\n            <div *ngFor=\"let a of questions1[indexPytanie].answers; let ind=index\" (click)=\"AddAnswerTaken(a,czas)\">\n                    <app-answer [answer]=\"a\" [nr]=\"ind\"></app-answer>\n            </div>\n        </div>\n        -->\n    </ng-template>\n\n    <ng-template #noEgzamin>\n\n        <app-wynik [questions]=\"questions1\" [answers]=\"answers\"></app-wynik>\n\n    </ng-template>\n\n</div>"

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
/* harmony import */ var ClientApp_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/app.component */ "./app/app.component.ts");
/* harmony import */ var ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/Models/test */ "./app/Models/test.ts");




var QuestionList = /** @class */ (function () {
    function QuestionList() {
        this.questions1 = new Array(new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Question"]("Jak mam na imie", new Array(new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Jakub", true), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Patryk", false), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Andrzej", false))), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Question"]("Ile mamy wojewodzctw?", new Array(new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("12", false), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("23", false), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("18", true))), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Question"]("Czy mozna zabic?", new Array(new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Jak najbardziej", false), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("To zależy", true), new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Nie", false))));
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
        ClientApp_app_app_component__WEBPACK_IMPORTED_MODULE_2__["Range"].Create(number);
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
                    _this.answers.push(new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Pominieto", false));
                    _this.indexPytanie++;
                    _this.czas = _this.CZAS;
                    _this.coSekunda();
                }
                else {
                    _this.answers.push(new ClientApp_app_Models_test__WEBPACK_IMPORTED_MODULE_3__["Answer"]("Pominieto", false));
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



/***/ }),

/***/ "./app/wynik/wynik.component.css":
/*!***************************************!*\
  !*** ./app/wynik/wynik.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3d5bmlrL3d5bmlrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/wynik/wynik.component.html":
/*!****************************************!*\
  !*** ./app/wynik/wynik.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngFor=\"let q of questions;let myIn=index;\">\n        \n        <h3>{{q.content}}</h3>\n        <div *ngFor=\"let a of q.answers\">\n            <div *ngIf=\"a.correctnes==true\" class=\"card bg-secondary p-4 text-light mb-5\">                \n                <p style=\"color: lightgreen; font-weight: 700;\">Poprawna odpowiedź: {{a.content}}</p>\n                <p>Twoja odpowiedz:{{answers[myIn].content}} </p>\n                <p>Czas udzielania odpowiedzi: {{answers[myIn].time}}</p>\n            </div>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./app/wynik/wynik.component.ts":
/*!**************************************!*\
  !*** ./app/wynik/wynik.component.ts ***!
  \**************************************/
/*! exports provided: WynikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WynikComponent", function() { return WynikComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/app.component */ "./app/app.component.ts");



var WynikComponent = /** @class */ (function () {
    function WynikComponent() {
        this.questions = new Array();
        this.answers = new Array();
    }
    WynikComponent.prototype.Range = function (range) {
        return ClientApp_app_app_component__WEBPACK_IMPORTED_MODULE_2__["Range"].Create(range);
    };
    WynikComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WynikComponent.prototype, "questions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WynikComponent.prototype, "answers", void 0);
    WynikComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wynik',
            template: __webpack_require__(/*! ./wynik.component.html */ "./app/wynik/wynik.component.html"),
            styles: [__webpack_require__(/*! ./wynik.component.css */ "./app/wynik/wynik.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WynikComponent);
    return WynikComponent;
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

module.exports = __webpack_require__(/*! /home/jakub/net-core/budowa/ClientApp/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map