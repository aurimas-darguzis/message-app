import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './singup.component.html'
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;

    constructor() {}

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
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