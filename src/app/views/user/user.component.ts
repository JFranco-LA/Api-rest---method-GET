import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIqueryService } from 'src/app/services/apiquery.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: any;
  user: any = {};
  linkPhoto = 'https://i.pravatar.cc/150?u=';
  photoUser = this.linkPhoto + this.user.name;
  isLoading: boolean = false;

  userCompany: any = {};
  userAddress: any = {};

  constructor(private route: ActivatedRoute, private apidata: APIqueryService) { 
    setTimeout(() => {
      this.isLoading=true;
    }, 1800);
  }

  ngOnInit() {
    const idRecieved = this.route.snapshot.paramMap.get('id')
    this.id = idRecieved;
    this.tolistDataUser();

  }

  tolistDataUser() {
    this.apidata.getUser(this.id).subscribe((user) => {
      this.user = user;
      console.log(this.user);
      const { company, address} = this.user;
      this.userCompany = company;
      this.userAddress = address;
    });
  }

}
