import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Place} from '../../place.model';
import {PlacesService} from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  editOffer: string;

  componentRoot = `/places/tabs/offers`;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(paramMap => {
      console.log(`${typeof paramMap} / ${JSON.stringify(paramMap)}`);
      if (!paramMap.placeId) {
        this.navCtrl.navigateBack(this.componentRoot).then();
        return;
      }
      this.place = this.placesService.getPlace(paramMap.placeId);
      this.editOffer = `/places/tabs/offers/edit/${this.place.id}`;
    });
  }


}
