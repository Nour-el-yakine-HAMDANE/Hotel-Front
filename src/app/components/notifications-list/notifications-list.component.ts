import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';


@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css'],
})
export class NotificationsListComponent implements OnInit {
  @Input() hotelId = 0;

  notifications?: Notification[];
  notification?: Notification;
  currentNotification: Notification = {};
  currentIndex = -1;
  id = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
   
      this.notificationService.getAll().subscribe({
        next: (data) => {
          this.notifications = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    
   
      // this.notificationService.getHotelNotifications(this.hotelId).subscribe({
      //   next: (data) => {
      //     this.notifications = data;
      //     console.log(data);
      //   },
      //   error: (e) => console.error(e)
      // });
    
    
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentNotification = {};
    this.currentIndex = -1;
  }

  setActiveNotification(notification: Notification, index: number): void {
    this.currentNotification = notification;
    this.currentIndex = index;
  }

}
