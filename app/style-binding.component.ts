
import { Component } from 'angular2/core';

@Component ({
    selector: 'style-binding',
    template: `
        <p>Style Binding</p>
        <button class="btn btn-primary" 
            [style.backgroundColor]="isActive ? 'Blue' : 'Gray'">Submit</button>
    `
})

export class StyleBindingComponent {
    isActive = true;
}