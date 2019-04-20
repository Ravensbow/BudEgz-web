import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionList } from "ClientApp/app/test/questionsList.component";
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { WynikComponent } from './wynik/wynik.component';
import { AnswerComponent } from './answer/answer.component';
>>>>>>> 3dc01d82029407b280ba76b2a7bbe56165b5b686
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
<<<<<<< HEAD
                QuestionList
=======
                QuestionList,
                WynikComponent,
                AnswerComponent
>>>>>>> 3dc01d82029407b280ba76b2a7bbe56165b5b686
            ],
            imports: [
                BrowserModule,
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map