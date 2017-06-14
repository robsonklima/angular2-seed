
import { Component } from 'angular2/core';

@Component ({
    selector: 'class-binding',
    template: `
        <p>Class Binding</p>
        <button class="btn btn-primary" [class.active]="isActive">Submit</button>
    `
})

export class ClassBindingComponent {
    isActive = true;
}