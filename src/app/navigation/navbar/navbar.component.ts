import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/data/hotel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hotel: Hotel = new Hotel();
  constructor() { }

  ngOnInit(): void {

  }

}
