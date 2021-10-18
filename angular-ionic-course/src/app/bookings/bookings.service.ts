import {Injectable} from '@angular/core';
import {Booking} from './bookings.model';

@Injectable({providedIn: 'root'})
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: 'id1',
      placeId: 'p1',
      placeTitle: 'Budapest mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  get bookings() {
    return [...this._bookings];
  }
}
