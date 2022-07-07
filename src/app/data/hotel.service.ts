import { Injectable } from '@angular/core';
import { Room, status } from './room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  rooms: Room[] = [];
  freeRooms: Room[] = [];

  constructor() {
    this.initRooms();
    this.randomizeBooking();
  }

  private initRooms(): void {
    let i: number;

    for (i = 0; i < 25; i++) {
      this.rooms.push({ id: (i + 1), location: "", state: status.free })
    }
    this.freeRooms = this.rooms;
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
        this.freeRooms.filter(r => r !== this.rooms[i]);
      }
      console.log(`room nr: ${this.rooms[i].id} created. State: ${this.rooms[i].state}`);
    }
  }

  getRoomAmount(): number {
    return this.rooms.length;
  }

  getFreeRooms(): number {
    return this.freeRooms.length;
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

  bookRandomRoom(): void {
    let result: number = 0;
    //select random room of free rooms, set it to booked and return ID.
    let freeRooms: Room[] = [];
    let selectedIndex: number;

    //get all free rooms
    let i: number = 0;
    for (i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].state === status.free) {
        freeRooms.push(this.rooms[i]);
      }
    }

    //randomly select one of the free rooms
    selectedIndex = Math.floor(Math.random() * freeRooms.length - 1);
    this.bookRoom(freeRooms[selectedIndex].id);
  }

  private bookRoom(id: number): void {
    let i: number = 0;
    for (i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].id == id && this.rooms[i].state === status.free) {
        this.rooms[i].state = status.booked;
        this.freeRooms.filter(r => r !== this.rooms[i]);
        alert(`successfully booked room nr ${this.rooms[i].id}`);
        break;
      }
    }
  }
}
