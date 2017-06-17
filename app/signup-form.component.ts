import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'
})
export class SignUpFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([
                UsernameValidators.cannotContainSpace,
                Validators.required 
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        })
    }

    signup() {
        // var result = authService.login(this.form.value)
        this.form.find('username').setErrors({
            invalidLogin: true
        });

        console.log(this.form.value)
    }
}