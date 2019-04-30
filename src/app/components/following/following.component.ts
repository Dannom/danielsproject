import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  followingarr: any = [];
  url = 'http://127.0.0.1';

  constructor(private http: HttpClient, 
    private router: Router,
    private loggedUser: LoggedUserService) { }

  ngOnInit() {
    this.http.post(this.url, ( this.loggedUser.loggedInUser + ' following' + ' getfollow'))
    .subscribe( (response) => {
      console.log(response);
      this.followingarr = response;
    });
  }

  public onUserClick(name: string): void {
    this.router.navigate([`profile/${name}`]);
  }

}
