import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionList } from "ClientApp/app/test/questionsList.component";
import { AppComponent } from './app.component';
import { WynikComponent } from './wynik/wynik.component';
import { AnswerComponent } from './answer/answer.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                QuestionList,
                WynikComponent,
                AnswerComponent
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