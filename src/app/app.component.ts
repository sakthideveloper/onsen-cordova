import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { AudiosComponent } from './audios/audios.component';


@Component({
 selector: 'app-root',
  template: `<ons-page>
  <ons-toolbar>
    <div class="center">Dashboard</div>
  </ons-toolbar>
  <ons-tabbar swipeable position="auto">
    <div class="tabbar__content"></div>
    <div class="tabbar" >
      <ons-tab label="Videos" icon="ion-home" [page]="tab1" active></ons-tab>
      <ons-tab label="Audios" icon="ion-ios-browsers" [page]="tab2"></ons-tab>
    </div>
  </ons-tabbar>
  </ons-page>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tab1 = VideosComponent;
  tab2 = AudiosComponent;


  constructor(){}

  ngOnInit(){
    ons.ready(() => {
      console.log("Ons ready", this.isLoggedIn());
    });
  }

  isLoggedIn(){
    return true;
  }


}
