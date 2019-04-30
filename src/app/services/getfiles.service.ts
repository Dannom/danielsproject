import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUserService } from 'src/app/services/logged-user.service';

export class FileClass {
  base64: string;
  userName: string;

  constructor (base64: string, username: string) {
    this.base64 = base64;
    this.userName = username;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetfilesService {
  url = 'http://127.0.0.1';
  fileFeed: FileClass[] = [];

  constructor(private http: HttpClient, private loggedUser: LoggedUserService) { }

  getfeed(): Promise<FileClass[]> {
    return new Promise( resolve => {
      this.http.post(this.url, (this.loggedUser.loggedInUser + ' genfeed' + ' getfeed' ))
        .subscribe((response) => {
          resolve(this.fileListMaker(response));
    });
  });
}

  getProfile(name: string): Promise<FileClass[]> {
  return new Promise( resolve => {
    this.http.post(this.url, (name + ' profile' + ' getfeed' ))
      .subscribe((response) => {
        resolve(this.fileListMaker(response));
    });
  });
  }

  public fileListMaker(arrayFromServer: any): FileClass[] {
    const newArray: FileClass[] = [];
    for (let element of arrayFromServer) {
      const splitedElement = element.split(' ');
      newArray.push(new FileClass(splitedElement[1], splitedElement[0]));
    }
    return newArray;
  }
}
