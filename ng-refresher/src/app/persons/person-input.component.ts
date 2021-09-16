import { Component, Output, EventEmitter } from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
    selector: 'person-input',
    templateUrl: 'person-input.component.html'
})

export class PersonInputComponent {
    personNameInput = '';
    onCreatePerson() {
        this.personsService.createPerson(this.personNameInput)
        this.personNameInput = '';
    }

    constructor(private personsService: PersonsService) {
        
    }
}