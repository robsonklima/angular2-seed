
import { Component } from 'angular2/core';

@Component ({
    selector: 'elvis',
    template: `
        <ul>
            <li>Title: {{ task.title }}</li>
            <li>Title: {{ task.assignee?.role?.name }}</li>
        </ul>
    `
})

export class ElvisComponent {
    task = {
        title: "Review applications",
        assignee: {
            role: null
        }
    }
}