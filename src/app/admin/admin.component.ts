import { Component, OnInit } from '@angular/core';
import { HotelService } from '../data/hotel.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../app.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
  }

  switchRoomState(id: number) {
    this.hotelService.switchRoomState(id);
  }

}
