import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'hotels', component: HotelsListComponent },
  { path: 'hotels/:id', component: HotelDetailsComponent },
  { path: 'addHotel', component: AddHotelComponent },
  { path: 'notifications', component: NotificationsListComponent },
  { path: 'notifications/:id', component: NotificationDetailsComponent },
  { path: 'addNotification', component: AddNotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
