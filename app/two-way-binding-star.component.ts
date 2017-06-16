
import { Component } from 'angular2/core';

@Component ({
    selector: 'two-way-binding-star',
    template: `
        <p>Two Way Binding STAR</p>
        <i class="glyphicon"
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()">
        </i>
    `
})

export class TwoWayBindingStarComponent {
    isFavorite = false;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}