import { Component } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css'],
})
export class AddHotelComponent {
  hotel: Hotel = {
    name: '',
    hotelKey: '',
  };
  submitted = false;

  constructor(private hotelService: HotelService) {}

  saveTutorial(): void {
    const data = {
      name: this.hotel.name,
      hotelKey: this.hotel.hotelKey
    };

    this.hotelService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.hotel = {
      name: '',
      hotelKey: ''
    };
  }
}
