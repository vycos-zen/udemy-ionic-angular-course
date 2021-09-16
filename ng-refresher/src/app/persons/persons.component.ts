import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonsService } from "./persons.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
    personList: string[] = [];
    personListSub: Subscription = new Subscription;

    removePerson(person: string){
        this.personsService.removePerson(person)

    }

    constructor(private personsService: PersonsService) {
        this.personsService = personsService;
    }
    
    ngOnInit(): void {
        this.personList = this.personsService.persons;
        this.personListSub =  this.personsService.personsChanged.subscribe(persons => {
            this.personList = persons
        });
    }

    ngOnDestroy(): void {
        this.personListSub.unsubscribe();
    }
}