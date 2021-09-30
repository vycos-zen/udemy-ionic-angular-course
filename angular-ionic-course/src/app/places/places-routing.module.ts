import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PlacesPage} from './places.page';
import {DiscoverPage} from './discover/discover.page';
import {OffersPage} from './offers/offers.page';
import {PlaceDetailPage} from './discover/place-detail/place-detail.page';
import {OfferBookingsPage} from './offers/offer-bookings/offer-bookings.page';
import {NewAuthorPage} from "./offers/new-author/new-author.page";
import {EditOfferPage} from "./offers/edit-offer/edit-offer.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            component: DiscoverPage,
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule),
          },
          {
            path: ':placeId',
            component: PlaceDetailPage,
            loadChildren: () =>
              import('./discover/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)

          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            component: OffersPage,
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          },
          {
            path: 'new',
            component: NewAuthorPage,
            loadChildren: () => import('./offers/new-author/new-author.module').then(m => m.NewAuthorPageModule)
          },
          {
            path: 'edit/:offerId',
            component: EditOfferPage,
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
          },
          {
            path: ':placeId',
            component: OfferBookingsPage,
            loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {
}
