import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Users[] = []; 
  constructor() { 
    this.users = [
      { id: 1, name: 'Yamada', email: 'yamada@example.com' },
      { id: 2, name: 'Suzuki', email: 'suzuki@example.com' },
      { id: 3, name: 'Tanaka', email: 'tanaka@example.com' },
    ];
  }

  getUsers(): Users[] {
    return this.users;
  }

  getUser(id: number): Users {
    let user1: Users | undefined = this.users.find(users => users.id === id);

    if (user1 == undefined) {
      throw new Error('this path must not be reached');
    } else {
      return user1;
    }
  }

  setUser(user: Users): void {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].id === user.id) {
        this.users[index] = user;
      }
      
    }
  }


}
