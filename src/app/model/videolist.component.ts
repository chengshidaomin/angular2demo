import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from './video';

@Component({
    selector: 'video-list',
    templateUrl: 'app/model/videolist.component.html'
})
export class VideoListComponent {
    @Input() videos: Array<Video>;
    @Output() selectVideo = new EventEmitter();

    onSelect(vid: Video) {
        this.selectVideo.next(vid);
    }
}