import { Component, Input, OnInit } from '@angular/core';
import { EventResponseModel } from 'src/app/core/services/events-service/events-model/event-response.model';

@Component({
    selector: 'app-event-header',
    templateUrl: './event-header.component.html',
    styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {

    @Input() eventImagePath: string;
    @Input() eventName: string;
    @Input() event: EventResponseModel;

    constructor() { }

    ngOnInit(): void {
    }

}
