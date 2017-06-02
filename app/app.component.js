"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div>\n\t        <nav class='navbar navbar-default'>\n\t            <div class='container-fluid'>\n\t                <a class='navbar-brand'>{{pageTitle}}</a>\n\t                <ul class='nav navbar-nav'>\n\t                    <li><a routerLink=\"['welcome']\">Home</a></li>\n\t                    <li><a routerLink=\"['products']\">Product List</a></li>\n\t                </ul>\n\t            </div>\n\t        </nav>\n\t        <div class='container'>\n\t            <router-outlet></router-outlet>\n\t        </div>\n     \t</div>",
        providers: [product_service_1.ProductService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map