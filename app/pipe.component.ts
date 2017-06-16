
import { Component } from 'angular2/core'

@Component ({
    selector: 'pipe',
    template: `
        {{ course.title | lowercase }}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number:'2.2-2' }}
        <br/>
        {{ course.price | currency:'AUD':true:'2.2-2' }}
        <br/>
        {{ course.releaseDate | date:'dd/MM/yyyy' }}
        <br/>
        {{ course | json }}
        <br/>
    `
})

export class PipeComponent {
    course = {
        title: "Angular 2 for beginners",
        rating: 4.9768,
        students: 5981,
        price: 99.95,
        releaseDate: new Date()
    }
}