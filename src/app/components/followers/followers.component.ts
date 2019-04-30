import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followersarr: any = [];
  url = 'http://127.0.0.1';

  constructor(private http: HttpClient, 
    private router: Router,
    private loggedUser: LoggedUserService) { }

  ngOnInit() {
    this.http.post(this.url, ( this.loggedUser.loggedInUser + ' followers' + ' getfollow'))
    .subscribe( (response) => {
      console.log(response);
      this.followersarr = response;
    });
  }

  public onUserClick(name: string): void {
    this.router.navigate([`profile/${name}`]);
  }

}
