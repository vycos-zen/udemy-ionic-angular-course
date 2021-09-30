import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../places/place.model';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  onBook() {
    this.modalCtrl.dismiss({bookId: 'id1'}, 'book').then();
    console.log('book');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel').then();
    console.log('close');

  }
}
