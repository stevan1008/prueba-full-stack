import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: any = [];
  term: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
    .subscribe(user => {
      this.users = user;
    }); 
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id)
    .subscribe(user => {
      console.log(user);
      this.getUsers();
    })
  }

}
