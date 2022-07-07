import { Room } from "./room";
import { status } from "./room";

export class Hotel {

    rooms: Room[] = [];

    constructor() {
        this.initRooms();
        this.randomizeBooking();
    }

    initRooms(): void {
        let i: number;

        for (i = 0; i < 25; i++) {
            this.rooms.push({ id: (i + 1), location: "", state: status.free })
        }
        this.randomizeBooking();

    }

    randomizeBooking(): void {
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
}

