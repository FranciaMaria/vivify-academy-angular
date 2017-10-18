import { Component, EventEmitter, Output } from '@angular/core';

import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent {

  @Output()
  onSubmit = new EventEmitter<Contact>();


  private newContact: Contact = new Contact();


  submitContact(contact: Contact) {

    this.onSubmit.emit(contact);
    this.newContact = new Contact();
  /*  this.newContact = new Contact();
    this.contactService.addContact(
      contact.firstName, contact.lastName, contact.email
      ).subscribe(
        contact => {
          this.contacts.push(contact);

        }
      );*/
  }

  edit(contact: Contact){
    this.newContact = Object.assign({}, contact);
  }


}