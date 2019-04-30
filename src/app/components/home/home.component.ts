import {Component , OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { element } from '@angular/core/src/render3';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { GetfilesService } from 'src/app/services/getfiles.service';
import { Router } from '@angular/router';

export class FileClass {
  base64: string;
  userName: string;

  constructor (base64: string, username: string) {
    this.base64 = base64;
    this.userName = username;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  @ViewChild ('uploadInput') element: ElementRef;
  userControl = new FormControl();
  filteredUsers: any = [];
  fileFeed: FileClass[] = [];
  url = 'http://127.0.0.1';

constructor(private http: HttpClient, 
            private loggedUser: LoggedUserService,
            private router: Router,
            public feeder: GetfilesService) {}

 async ngOnInit() {
  this.fileFeed = await this.feeder.getfeed();
}

public onInput(value: string): void {
   this.http.post(this.url, (value + '  searchusers'))
    .subscribe( (response) => {
      this.filteredUsers = response;
      console.log(this.filteredUsers);
    });

}

public onUserClick(name: string): void {
  this.router.navigate([`profile/${name}`]);
}

public onFileChange(fileInput): void {
  const file: File = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const that = this;
  reader.onload = function() {
    console.log(reader.result + ' ' + that.loggedUser.loggedInUser + ' upload');
    /*that.http.post(that.url, reader.result + ' ' + that.loggedUser.loggedInUser + ' upload'); */

    const request = new XMLHttpRequest(); // creates a XMLHttpRequest object
    request.open('POST', that.url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Accept', 'application/json');
    request.send(reader.result + ' ' + that.loggedUser.loggedInUser + ' upload'); // sending to server

    console.log('sent file to server');
  };
}

}
