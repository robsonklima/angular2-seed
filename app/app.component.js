System.register(['angular2/core', "./courses.component", "./authors.component", "./property-binding.component", "./class-binding.component", "./style-binding.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, property_binding_component_1, class_binding_component_1, style_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            },
            function (class_binding_component_1_1) {
                class_binding_component_1 = class_binding_component_1_1;
            },
            function (style_binding_component_1_1) {
                style_binding_component_1 = style_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // template: `
                        //     <h1>Hello Angular</h1>
                        //     <courses></courses>
                        //     <authors></authors>
                        //     <property-binding></property-binding>
                        //     <class-binding></class-binding>
                        //     <style-binding></style-binding>,
                        template: "\n        <event-binding></event-binding>\n    ",
                        directives: [
                            courses_component_1.CoursesComponent,
                            authors_component_1.AuthorsComponent,
                            property_binding_component_1.PropertyBindingComponent,
                            class_binding_component_1.ClassBindingComponent,
                            style_binding_component_1.StyleBindingComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map