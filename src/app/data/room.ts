export interface Room {
    id: number;
    location: string;
    state: status;
}


enum status {
    booked,
    free
}