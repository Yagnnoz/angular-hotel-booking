import { Component, OnInit } from '@angular/core';
import { HotelService } from '../data/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../app.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
  }

  bookRandomRoom() {
    this.hotelService.bookRandomRoom();
  }

}
