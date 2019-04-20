import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './menu/menu-item/item.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'following',
    component: FollowingComponent
  },
  {
    path: 'followers',
    component: FollowersComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemComponent,
    HomeComponent,
    FollowersComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
