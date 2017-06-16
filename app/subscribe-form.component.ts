import{ Component } from 'angular2/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form.template.html'
})

export class SubscribeFormComponent {
    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

    onSubmit(form) {
        console.log(form.value);
    }
}