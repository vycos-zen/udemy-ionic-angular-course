import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import {map} from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class PersonsService {
    httpHeaders = new HttpHeaders({  'Content-Type': 'application/json' });

    constructor(private httpClient: HttpClient) {
        this.fetchPersons();
    }

    fetchPersons() {
        this.httpClient.get<any>('https://swapi.dev/api/people', { headers: this.httpHeaders }).pipe(map(res => {return res.results.map((c: { name: string; }) => c.name)})).subscribe(filteredResults => {
            console.log(`res> ${filteredResults}`)
            this.personsChanged.next(filteredResults)
        })
    }


    personsChanged = new Subject<string[]>();
    persons: string[] = [];
    createPerson(person: string) {
        this.persons.push(person);
        this.personsChanged.next(this.persons);
    }
    removePerson(person: string) {
        console.log(person)
        this.persons = this.persons.filter(p => p !== person);
        this.personsChanged.next(this.persons);
    }
}