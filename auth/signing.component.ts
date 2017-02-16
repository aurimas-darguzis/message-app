import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-signup',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    constructor() {}

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('[a-z0-9]')
            ]),
            password: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        console.log(this.myForm);
        this.myForm.reset();
    }
}