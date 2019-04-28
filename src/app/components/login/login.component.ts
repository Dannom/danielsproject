import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,
              private loggedUser: LoggedUserService) {  }

  ngOnInit() {
  
  }
     sendserver()
    {
        // const a = document.getElementById('email').value;    // receives textbox content after button is clicked
        // const b = document.getElementById('user-pw');
        const a = (<HTMLInputElement>document.getElementById('user-name')).value;
        const b = (<HTMLInputElement>document.getElementById('user-pw')).value;
        console.log('sending to server');
        const url = 'http://127.0.0.1';
        const request = new XMLHttpRequest(); // creates a XMLHttpRequest object
        let that = this;
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.setRequestHeader('Accept', 'application/json');
        request.onreadystatechange = function()   // will wait for server answer and when answer is received will run function
            {
                if (request.readyState === 4 && this.status === 200)
                    {
                    const serverResponse = this.responseText; // the var will be the value of the servers response
                    console.log(serverResponse);
                    if (serverResponse === 'correct user and pw')
                      {
                        that.loggedUser.loggedInUserSubject.next(a);
                      }
                    }
                else
                    {
                    console.log('server response not ready/error');
                    console.log(request.readyState);
                    console.log(this.status);
                    }
            };
        console.log(b + ' ' + a + ' signin');
        request.send(b + ' ' + a + ' signin'); // sending to server

    }


}
