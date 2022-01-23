import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-video-photo-page-cover',
    templateUrl: './video-photo-page-cover.component.html',
    styleUrls: ['./video-photo-page-cover.component.scss']
})
export class VideoPhotoPageCoverComponent implements OnInit {

    @Output() clickEvent = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick(): void {
        this.clickEvent.emit();
    }

}
