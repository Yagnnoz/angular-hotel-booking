import { state } from '@angular/animations';
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
	//creates 25 rooms for the hotel
	private initRooms(): void {
		let i: number;
		this.rooms = [];

		for (i = 0; i < 25; i++) {
			this.rooms.push({ id: (i + 1), location: "EG - terasse - no smoker", state: status.free })
		}
		this.freeRooms = this.rooms;
		this.setLocation();
	}
	private setLocation() {
		let i: number = 0;
		for (i = 0; i < this.rooms.length; i++) {
			if (i < 10) {
				this.rooms[i].location = "EG";
			} else if (i >= 10 && i < 20) {
				this.rooms[i].location = "1st Floor";
			} else {
				this.rooms[i].location = "2nd Floor";
			}
		}
	}

	//sets a random amout of rooms to booked
	private randomizeBooking(): void {
		let rnd: number = 0;
		let i: number;
		for (i = 0; i < this.rooms.length; i++) {
			//get random number
			rnd = Math.floor(Math.random() * 6);
			// if rnd is equal than free, else room is booked
			if (rnd % 2 == 0) {
				this.rooms[i].state = status.free;
			} else {
				this.rooms[i].state = status.booked;
				this.freeRooms.filter(r => r !== this.rooms[i]);
			}
			this.updateFreeRooms();
		}
	}
	//returns amount of rooms
	getRoomAmount(): number {
		return this.rooms.length;
	}

	//returns amount of free rooms
	getFreeRooms(): number {
		return this.freeRooms.length;
	}


	//returns amount of booked rooms
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

	//calculates how many rooms are booked in % and returns it 
	getBookedQuota(): number {
		let result: number = 0;
		result = Number(((this.getBookedRooms() / this.rooms.length) * 100).toFixed(2));
		return result;
	}

	//will select a random free room and set it to booked
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

	//books a specific room
	bookRoom(id: number): void {
		let i: number = 0;
		for (i = 0; i < this.rooms.length; i++) {
			if (this.rooms[i].id == id && this.rooms[i].state === status.free) {
				this.rooms[i].state = status.booked;
				this.updateFreeRooms();
				alert(`successfully booked room nr ${this.rooms[i].id}`);
				break;
			}
		}
	}

	//updates array of free rooms to display on booking
	private updateFreeRooms(): void {
		let i: number = 0;
		this.freeRooms = [];
		for (i = 0; i < this.rooms.length; i++) {
			if (this.rooms[i].state === status.free) {
				this.freeRooms.push(this.rooms[i]);
			}
		}
	}

	//changes a specified room from free to booked and vice versa
	switchRoomState(id: number): void {
		if (this.rooms[id - 1]) {
			if (this.rooms[id - 1].state === status.booked) {
				this.rooms[id - 1].state = status.free;
			} else {
				this.rooms[id - 1].state = status.booked;
			}
			this.updateFreeRooms();
		}
	}
}
