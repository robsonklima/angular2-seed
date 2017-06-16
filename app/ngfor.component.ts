
import { Component } from 'angular2/core'
import { AuthorService } from "./author.service";

@Component ({
    selector: 'ngfor',
    template: `
        <h2>Courses</h2>
        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{ i }} - {{ course }}
            </li>
        </ul>`,
    providers: [AuthorService]
})

export class NgforComponent {
    courses = ["Course 1", "Course 2", "Course 3"];
}