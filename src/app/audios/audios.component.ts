import { Component, OnInit, ViewChild } from '@angular/core';

declare var navigator: any;
declare var cordova: any;
declare var Media: any;
declare var window: any;
const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'ons-page[audio]',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css']
})
export class AudiosComponent implements OnInit {
  @ViewChild('audio_position') audPosition: any;
  private storage = window.localStorage;
  mediaFiles: any = [];

  constructor() { }

  ngOnInit() {
  }


  onClickAudio() {
    // Audio player
    //

    let onSuccess = (res: any) => {
      console.log("audio: ", res);
     };

    let onError = (error: any) => {
     console.error("Error code: ", error);
    };


    let src = "myrecording.amr";
    let my_media = new Media(src, onSuccess, onError);

    // Record audio
    my_media.startRecord();

    // Pause after 10 seconds
    setTimeout(function () {
      my_media.stop();
  }, 30000);

    // Stop recording after 10 sec
    let recTime = 0;
    let recInterval = setInterval(() => {
        recTime = recTime + 1;
        this.setAudioPosition(recTime + " sec");
        if (recTime >= 10) {
            clearInterval(recInterval);
            my_media.stopRecord();
        }
    }, 1000);



    let mediaTimer = setInterval(() => {
      // get media amplitude
      my_media.getCurrentAmplitude(
        // success callback
         (amp) => {
          console.log(amp + "%");
        },
        // error callback
         (e) => {
          console.log("Error getting amp=" + e);
        }
      );
    }, 1000);
  }

 setAudioPosition(position) {
  console.log("position=" + position);
  console.log("this.audPosition=", this.audPosition);
  this.audPosition.nativeElement.innerHTML = position;

}

}
