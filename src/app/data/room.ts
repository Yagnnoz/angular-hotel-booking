export interface Room {
    id: number;
    location: string;
    state: status;
}


export enum status {
    booked,
    free
}