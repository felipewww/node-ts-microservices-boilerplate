import {Model} from "@app/models/_Model";

export class User extends Model{
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}
