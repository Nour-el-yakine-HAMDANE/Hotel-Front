import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentHotel: Hotel = {
    name: '',
    hotelKey: ''
  };

  message = '';

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getHotel(this.route.snapshot.params['id']);
    }
  }

  getHotel(id: string): void {
    this.hotelService.get(id).subscribe({
      next: (data) => {
        this.currentHotel = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  goToHotelNotifications() {
    this.router.navigate(['/notifications'], { state: { data: this.currentHotel.id } });
  }
}
