import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';
import {Place} from '../../place.model';
import {PlacesService} from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  componentRoot = `/places/tabs/discover`;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.route.params.subscribe(paramMap => {
      console.log(`${typeof paramMap} / ${JSON.stringify(paramMap)}`);
      if (!paramMap.placeId) {
        this.navCtrl.navigateBack(this.componentRoot).then();
        return;
      }
      this.place = this.placesService.getPlace(paramMap.placeId);
    });
  }

  onBookPlace() {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(resultData => {
        console.log(resultData.data);
      }
    );
  }

}
