import { Component } from "@angular/core";
import { VideosComponent } from "../videos/videos.component";
import { AudiosComponent } from "../audios/audios.component";


@Component({
  selector: "ons-page[dashboard]",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  video = VideosComponent;
  audio = AudiosComponent;

 constructor(){
  document.addEventListener('prechange', (event:any) => {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });


 }








}
