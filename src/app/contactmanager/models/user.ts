import { Note } from "./note";

export class User {
    id?: number;
    birthDate?: Date;
    name?: string;
    avatar?: string;
    bio?: string;

    notes?: Note[] = [];
}
// My User data points MUST be named the same as the JSON data-points to avoid UNDEFINED error messages 
// that will stop that certain data-point from getting populated