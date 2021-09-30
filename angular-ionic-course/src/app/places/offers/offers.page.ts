import {Component, OnInit} from '@angular/core';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  newOffer = `/places/tabs/offers/new`;

  loadedPlaces: Place[] = [];

  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
