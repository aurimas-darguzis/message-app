import { SigninComponent } from './auth/signing.component';
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageComponent } from './messages/message.component';
import { MessagesComponent } from './messages/messages.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}