/**
 * Class User
 */
export class User {
    // Properties
    id?: number;
    lastname?: string;
    firstname?: string;
    email?: string;
    age?: number;
    active?: boolean;

    // Constructor
    constructor(id?: number, lastname?: string, firstname?: string, email?: string, age?: number, active?: boolean) {
        if (id) { this.id = id; }
        if (lastname) { this.lastname = lastname; }
        if (firstname) { this.firstname = firstname; }
        if (email) { this.email = email; }
        if (age) { this.age = age; }
        if (active) { this.active = active; }
    }

    // get getId() {
    //     return this.id;
    // }
    // set setId(id: number) {
    //     this.id = id;
    // }
    // get getLastname() {
    //     return this.lastname;
    // }
    // set setLastname(lastname: string) {
    //     this.lastname = lastname;
    // }
    // get getFirstname() {
    //     return this.firstname;
    // }
    // set setFirstname(firstname: string) {
    //     this.firstname = firstname
    // }
    // get getEmail() {
    //     return this.email;
    // }
    // set setEmail(email: string) {
    //     this.email = email;
    // }
    // get getAge() {
    //     return this.age;
    // }
    // set setAge(age: number) {
    //     this.age = age;
    // }
    // get isActive() {
    //     return this.active;
    // }
    // set toggleStatus(active: boolean) {
    //     this.active = active;
    // }
}