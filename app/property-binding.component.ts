
import { Component } from 'angular2/core';

@Component ({
    selector: 'property-binding',
    template: `
        <p>Property Binding</p>
        <img src="{{imageUrl}}" />
        <img [src]="imageUrl" />
        <img bind-src="imageUrl" />`
})

export class PropertyBindingComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/100/100/"

}