import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { EventResponseModel } from 'src/app/core/services/events-service/events-model/event-response.model';

@Component({
    selector: 'app-event-content',
    templateUrl: './event-content.component.html',
    styleUrls: ['./event-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventContentComponent implements OnInit {

    @Input() event: EventResponseModel;

    constructor() { }

    ngOnInit(): void {
    }

}
