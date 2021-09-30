import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.page.html',
  styleUrls: ['./new-author.page.scss'],
})
export class NewAuthorPage implements OnInit {

  componentRoot = `/places/tabs/offers`;

  constructor() {
  }

  ngOnInit() {
  }

}
