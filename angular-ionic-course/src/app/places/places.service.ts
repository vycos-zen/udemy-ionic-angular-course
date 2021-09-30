import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})


export class PlacesService {
  private stockImageUrl = 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?cs=srgb&dl=pexels-pixabay-53610.jpg&fm=jpg';

  private placesList: Place[] = [
    new Place('p1', 'Budapest Mansion', 'In the heart of Hungary', this.stockImageUrl, 9000),
    new Place('p2', 'Eger Mansion', 'In the heart of Hungary', this.stockImageUrl, 8000),
    new Place('p3', 'Pécs Mansion', 'In the heart of Hungary', this.stockImageUrl, 7000)
  ];

  constructor() {
  }

  get places() {
    return [...this.placesList];
  }

  getPlace(placeId: string) {
    return {...this.places.find(p => p.id === placeId)};
  }
}
