import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from './services/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedUserName: string;

  constructor(private loggedUserService: LoggedUserService,
              private router: Router) {}

  ngOnInit() {
    this.loggedUserService.loggedInUserSubject
      .subscribe(value => {
          this.loggedUserName = value;

          this.loggedUserService.loggedInUser = value;
          console.log(this.loggedUserService.loggedInUser);
          this.router.navigate(['home']);
      });
  }

}
