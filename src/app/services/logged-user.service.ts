import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  public loggedInUser: string;
  public loggedInUserSubject: Subject<string> = new Subject<string>();

  constructor() { }
}
