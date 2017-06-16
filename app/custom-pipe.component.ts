import{ Component } from 'angular2/core';
import{ CourseService } from './course.service';
import { AutoGrowDirective } from "./auto-grow.directive";
import { SummaryPipe } from "./summary.pipe";

@Component({
    selector: 'custom-pipe',
    template: `
        {{ post.title }}
        <br/>
        {{ post.body | summary:20 }}
    `,
    pipes: [SummaryPipe]
})

export class CustomPipeComponent {
    post = {
        title: "The title of courses page.",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. `
    }
}