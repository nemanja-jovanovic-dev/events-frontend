import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-header',
    templateUrl: './event-header.component.html',
    styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {

    @Input() eventImagePath: string;
    @Input() eventName: string;

    constructor() { }

    ngOnInit(): void {
    }

}
