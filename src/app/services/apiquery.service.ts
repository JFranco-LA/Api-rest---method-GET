import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIqueryService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(){
    const dataUsers = this.http.get(this.url);
    return dataUsers;
  }

  getUser(id:number){
    const dataUser = this.http.get(`${this.url}/${id}`);
    return dataUser;
  }

}
