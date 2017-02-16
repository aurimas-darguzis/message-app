import { NgForm } from '@angular/forms';
import { MessageService } from './message.service';
import { Message } from './message.model'
import { Component } from '@angular/core';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        console.log(form);
        const message = new Message(form.value.content, 'Aurimas');
        this.messageService.addMessage(message);
        form.resetForm();
    }
}