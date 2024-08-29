import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHotelComponent,
    HotelDetailsComponent,
    HotelsListComponent,
    AddNotificationComponent,
    NotificationDetailsComponent,
    NotificationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
