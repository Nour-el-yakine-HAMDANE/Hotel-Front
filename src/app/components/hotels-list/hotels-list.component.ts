import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css'],
})
export class HotelsListComponent implements OnInit {
  hotels?: Hotel[];
  hotel?: Hotel;
  currentHotel: Hotel = {};
  currentIndex = -1;
  id = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.hotelService.getAll().subscribe({
      next: (data) => {
        this.hotels = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentHotel = {};
    this.currentIndex = -1;
  }

  setActiveHotel(hotel: Hotel, index: number): void {
    this.currentHotel = hotel;
    this.currentIndex = index;
  }


}
