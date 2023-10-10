import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit{
  users:any;

  constructor(public userSevice: UserServiceService){}

  ngOnInit(){
    this.userSevice.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
