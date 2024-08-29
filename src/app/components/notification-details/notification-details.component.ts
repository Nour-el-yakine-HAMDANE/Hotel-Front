import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css'],
})
export class NotificationDetailsComponent implements OnInit {
  @Input() viewMode = false;

  performance : any;

  dateDebut = new Date();
  dateFin = new Date();

  @Input() currentNotification: Notification = {
    hotelId: '',
    message: ''
  };

  message = '';

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getNotification(this.route.snapshot.params['id']);
    }
  }

  getNotification(id: string): void {
    this.notificationService.get(id).subscribe({
      next: (data) => {
        this.currentNotification = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


  getPerformanceOverTime(){
    this.notificationService.getPerformanceOverPeriode(this.currentNotification.id, this.dateDebut,this.dateFin)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.performance = res;
      },
      error: (e) => console.error(e)
    })
  }

  updateNotification(): void {
    this.message = '';

    this.notificationService
      .update(this.currentNotification.id, this.currentNotification)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Notification was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteNotification(): void {
    this.notificationService.delete(this.currentNotification.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/notifications']);
      },
      error: (e) => console.error(e)
    });
  }
}
