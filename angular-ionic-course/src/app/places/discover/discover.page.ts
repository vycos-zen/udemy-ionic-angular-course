import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {Place} from '../place.model';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  featured: Place;
  listedLoadedPlaces: Place[];

  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
    this.featured = this.placesService.places[0];
    this.listedLoadedPlaces = this.placesService.places.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

}
