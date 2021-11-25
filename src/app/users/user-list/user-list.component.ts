import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Users[] = [];
  
  constructor(
    private service: UsersService 
  ){ }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}