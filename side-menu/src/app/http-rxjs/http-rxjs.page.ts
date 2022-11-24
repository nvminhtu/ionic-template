import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/app.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-rxjs',
  templateUrl: './http-rxjs.page.html',
  styleUrls: ['./http-rxjs.page.scss'],
})
export class HttpRxjsPage implements OnInit {
  // #mt01: 01 - screen
  // 02 - click -> loading text: waiting
  private apiURL: string = 'https://api.github.com/';
  public relay: string = 'Uninitialized';
  public response: any;

  // #mt02
  private placeHolderUserURL: string =
    'https://jsonplaceholder.typicode.com/users';
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // run test function
    // #mt02
    this.fetchUserData();
    this.showLoggerUserData();
  }

  // #mt01: ham init: waiting for data
  async waitData() {
    this.relay = 'waiting';
    this.response = '';
    this.response = await this.getGithubData();
    this.relay = 'called';
  }
  async getGithubData() {
    await this.http.get<any[]>(this.apiURL).subscribe((res) => {
      this.response = res;
    });
  }

  // #mt02: define Class and get Data (Observable)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.placeHolderUserURL);
  }
  fetchUserData(): void {
    this.getUsers().subscribe((userData) => (this.users = userData));
  }
  // or
  showLoggerUserData(): void {
    this.getUsers().subscribe((userData) => console.log(userData));
  }
}
