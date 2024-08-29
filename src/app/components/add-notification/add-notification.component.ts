import { Component } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css'],
})
export class AddNotificationComponent {
  notification: Notification = {
    message: '',
    hotelId: '',
    creationDate: new Date()
  };
  submitted = false;

  constructor(private notificationService: NotificationService) {}

  saveTutorial(): void {
    const data = {
      message: this.notification.message,
      hotelId: this.notification.hotelId,
      creationDate: this.notification.creationDate
    };

    this.notificationService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.notification = {
      message: '',
      hotelId: '',
      creationDate: new Date()
    };
  }
}
