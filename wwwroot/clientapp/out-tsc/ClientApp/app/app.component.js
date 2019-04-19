import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Moja dupa';
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'the-test',
            templateUrl: "./app.component.html",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
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
export { Range };
//# sourceMappingURL=app.component.js.map