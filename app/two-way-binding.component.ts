
import { Component } from 'angular2/core';

@Component ({
    selector: 'two-way-binding',
    template: `
        <p>Two Way Binding</p>
        <input type="text" [(ngModel)]="title" />
        <!-- <input type="text" bindon-ngModel="title" /> -->
        <br>
        Preview: {{ title }} 
        <button class="btn btn-default" (click)="title = ''">Clear</button>
    `
})

export class TwoWayBindingComponent {
    title = "Angular App";
}