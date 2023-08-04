import { Injectable } from '@angular/core';
import { User } from './entities';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users:User[] = [
    {
      id: '1',
      name: 'Albert',
      email: 'albert1er@ouioui.com',
      password: '1234'
    },
    {
      id: '2',
      name: 'Joao Marc',
      email: 'jeanmarco@nonono.fr',
      password: 'azerty'
    },
    {
      id: '3',
      name: 'Pierre Paul Jacque',
      email: 'wesh@canneapeche.fr',
      password: 'password'
    },
  ];

  get users() {
    return this._users;
  }

  getUser (id: string){
    return this.users.find(user =>{
      return user.id === id
    })
  }

  deleteUser(id: string){
    this._users = this.users.filter(_users => {
      return _users.id !== id;
    })
  }

  persistUser(user:User){
    return this.users.push(user);
  }

  insertUser(user:User): void{
     this.users.push(user);
  }

  constructor() {}
}
