import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import * as ons from 'onsenui';
declare var navigator: any;
declare var cordova: any;
declare var Media: any;
declare var window: any;
const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'ons-page[video]',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit, OnChanges {
  @ViewChild('myvideo') myVideo: any;


  private storage = window.localStorage;
  mediaFiles: any = [];

  constructor() {
    console.log("navigator:", navigator.device);
    console.log("navigator one:", navigator);
    ons.notification.toast('Welcome Back..!', {timeout: 2000});

    document.addEventListener('prechange', (event:any) => {
      document.querySelector('ons-toolbar .center')
        .innerHTML = event.tabItem.getAttribute('label');
    });

  }

  ngOnInit() {
    console.log("mediaFiles", this.mediaFiles);

  }

  ngOnChanges() {
    this.getmediaFiles();
  }

  getmediaFiles() {
    return this.mediaFiles;
  }


  onClickVideo() {
    // capture callback
    let captureSuccess = (res: any) => {
      console.log("res", res);
      let capturedFile = res[0];
      let fileName = capturedFile.name;


      // let fromDirectory = dir.join('/');
      // var toDirectory = cordova.file.dataDirectory;

      let video = {
        "name": fileName,
        "size": capturedFile.size,
        "localURL": capturedFile.fullPath
      };

      this.storeMediaFiles(video);


    };

    // capture error callback
    let captureError = (error: any) => {
      navigator.notification.alert(
        "Error code: " + error.code,
        null,
        "Capture Error"
      );
    };

    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {
      limit: 2
    });
  }

  play(myFile) {
    //

    console.log("myFile", myFile);

    let video = new Media(myFile.localURL, () => { console.log("playAudio():Audio Success"); },
      (err) => { console.log("playAudio():Audio Error: " + err); });
    video = this.myVideo.nativeElement;
    video.src = myFile.localURL;
    video.play();

    // Pause after 10 seconds
    setTimeout(() => {
      video.stop();
    }, 10000);

  }
// TODO
  storeMediaFiles(files) {
    // let res: any = this.storage.getItem(MEDIA_FILES_KEY);
    // console.log("res", res);
    // if (res) {
    //   let arr = JSON.parse(res);
    //   arr = arr.concat(files);
    //   this.storage.setItem(MEDIA_FILES_KEY, JSON.stringify(arr));
    // } else {
    //   this.storage.setItem(MEDIA_FILES_KEY, JSON.stringify(files))
    // }
    this.mediaFiles.push(files);

  }

}
