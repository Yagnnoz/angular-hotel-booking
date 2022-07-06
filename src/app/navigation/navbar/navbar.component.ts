import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToHome() {
   // this.router.navigate(['/', 'home']);
  }

  goToBooking() {
    //this.router.navigate(['/', 'booking']);
  }

  goToAdmin() {
    //this.router.navigate(['/', 'admin']);

  }

}
