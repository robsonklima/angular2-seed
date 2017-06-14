import { Component } from 'angular2/core';
import { CoursesComponent } from "./courses.component";
import { AuthorsComponent } from "./authors.component";
import { PropertyBindingComponent } from "./property-binding.component";
import { ClassBindingComponent } from "./class-binding.component";
import { StyleBindingComponent } from "./style-binding.component";

@Component({
    selector: 'my-app',
    // template: `
    //     <h1>Hello Angular</h1>
    //     <courses></courses>
    //     <authors></authors>
    //     <property-binding></property-binding>
    //     <class-binding></class-binding>
    //     <style-binding></style-binding>,
    template: `
        <event-binding></event-binding>
    `, 
    directives: [
        CoursesComponent, 
        AuthorsComponent, 
        PropertyBindingComponent,
        ClassBindingComponent,
        StyleBindingComponent
    ]
    
})

export class AppComponent { }