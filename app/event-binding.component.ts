
import { Component } from 'angular2/core';

@Component ({
    selector: 'event-binding',
    template: `
        <p>Event Binding</p>
        <div (click)="onDivClick()">
            <button class="btn btn-default" (click)="onClick($event)">Submit</button>
        <div>
    `    
})

export class EventBindingComponent {
    onClick($event) {
        $event.stopPropagation();
        console.log("Clicked", $event);
    }

    onDivClick() {
        console.log("Handled by DIV");
    }
}