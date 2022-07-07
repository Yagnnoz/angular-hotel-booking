import { Injectable } from '@angular/core';
import { Room, status } from './room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  rooms: Room[] = [];

  constructor() {
    this.initRooms();
    this.randomizeBooking();
  }

  private initRooms(): void {
    let i: number;

    for (i = 0; i < 25; i++) {
      this.rooms.push({ id: (i + 1), location: "", state: status.free })
    }
  }

  private randomizeBooking(): void {
    let rnd: number = 0;
    let i: number;
    for (i = 0; i < this.rooms.length; i++) {
      rnd = Math.floor(Math.random() * 6);
      if (rnd % 2 == 0) {
        this.rooms[i].state = status.free;
      } else {
        this.rooms[i].state = status.booked;
      }
      console.log(`room nr: ${this.rooms[i].id} created. State: ${this.rooms[i].state}`);
    }
  }

  getRoomAmount(): number {
    return this.rooms.length;
  }

  getFreeRooms(): number {
    let result: number = 0;
    let i: number = 0;
    for (i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].state === status.free) {
        result += 1;
      }
    }
    return result;
  }

  getBookedRooms(): number {
    let result: number = 0;
    let i: number = 0;
    for (i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].state === status.booked) {
        result += 1;
      }
    }
    return result;
  }

  getBookedQuota(): number {
    let result: number = 0;
    result = Number(((this.getBookedRooms() / this.rooms.length) * 100).toFixed(2));
    return result;

  }
}
