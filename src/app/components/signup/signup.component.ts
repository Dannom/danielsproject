import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loggedUserService: LoggedUserService) { }

  ngOnInit() {
  }
   sendserver()
    {
        const a = (document.getElementById('new_mail') as HTMLInputElement).value;
        const b = (<HTMLInputElement>document.getElementById('new_username')).value;    //receives textbox content after button is clicked
        const c = (<HTMLInputElement>document.getElementById('new_userpassword')).value;
        console.log(a);
        let that= this;
        const url = 'http://127.0.0.1';
        const request = new XMLHttpRequest(); // creates a XMLHttpRequest object
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.setRequestHeader('Accept', 'application/json');
        request.onreadystatechange = function()   // will wait for server answer and when answer is received will run function
            {
                if (request.readyState === 4 && this.status === 200)
                    {
                    const serverResponse = this.responseText; // the var will be the value of the servers response
                    console.log(serverResponse);
                    if (serverResponse === 'user added successfully')
                      {
                        that.loggedUserService.loggedInUserSubject.next(a);
                      }
                    }
                else
                {
                    console.log('server response not ready/error');
                    console.log(request.readyState);
                    console.log(this.status);
                }
            };
        request.send(c+' '+b+" "+a+" signup"); // sending to server

    }

}
