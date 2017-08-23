import { Component, Injectable} from '@angular/core';
import {Config} from './config.service';
import {Video} from './model';

import {Mock} from './mock';
import {Person} from './model'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers:[Mock]
})
@Injectable()
export class AppComponent  { 
  title = Config.TITEL_PAGE; 
  videos: Array<Video>;
  selectedVideo: Video;
  user: Person;
  submitted: boolean;

  constructor(_mock: Mock) {
    this.user = _mock.mike;
    this.videos=  [
      new Video(1, "mov1", "https://www.youtube.com/embed/XGSy3_Czz8k", "baidu"),
      new Video(2, "mov2", "https://www.youtube.com/embed/XGSy3_Czz8k", "google")
    ]
  }

  onSelectVideo(video:Video){
    console.log(JSON.stringify(video));
    this.selectedVideo = video;
  }

  onCloseDetailForm(event:any) {
    this.selectedVideo = null;
  }

  newVideo() {
    let v:Video = new Video(this.videos.length+1, "a new video", '');
    this.videos.push(v);
    this.selectedVideo = v;
  }

  onSubmit(f:any){
    this.submitted = true;
    console.log("sending…" + JSON.stringify(this.user));
  }
}
