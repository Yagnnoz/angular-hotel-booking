import { Component, OnInit } from '@angular/core';
import { HotelService } from '../data/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
  }

  


}
