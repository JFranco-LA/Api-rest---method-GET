import { Component, OnInit } from '@angular/core';
import { APIqueryService } from 'src/app/services/apiquery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //https://i.pravatar.cc/150?u=
  style= 'style';
  redirecTo= '/user/'
  users: any = []

  constructor(private apidata: APIqueryService) { }

  ngOnInit(): void {
    this.tolistDataUsers()
  }

  tolistDataUsers() {
    this.apidata.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

}
