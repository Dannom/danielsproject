import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetfilesService, FileClass } from 'src/app/services/getfiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public selectedUser: string;
  public profileFeed: FileClass[] = [];

  constructor(private activeRouter: ActivatedRoute,
              private feeder: GetfilesService ) { }

  async ngOnInit() {
    this.selectedUser = this.activeRouter.snapshot.params['name'];
    this.profileFeed = await this.feeder.getProfile(this.selectedUser);
  }

}
