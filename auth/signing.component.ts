import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-signup',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

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
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            // here dealing with the data that came back from the server
            .subscribe(
                data => {
                    // store the token
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                err => console.error(err)
            );
        this.myForm.reset();
    }
}