import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[] = [];
  private filter: String = '';
  /*private newContact: Contact = new Contact();*/

  constructor(private contactService: ContactsService) {
    contactService.getContacts().subscribe(data => {
        this.contacts = data;
      }, 

      (err: HttpErrorResponse) =>{
        alert('Something went wrong!');
        alert('Backend returned code ${err.status} with message: ${err.error}');
      });
  }

  submitContact(contact: Contact) {
    if(contact.id){
      this.contactService.editContact(contact).subscribe(
          (contact: Contact) => {
            const existingContact = this.contacts.filter(
                c => c.id === contact.id
              );
            if(existingContact.length){
              Object.assign(existingContact[0], contact);
            }
          }
        );

    }else{
      this.contactService.addContact(contact).subscribe(
        contact => {
          this.contacts.push(contact);

        }
      );
    }
    
  }

  remove(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
