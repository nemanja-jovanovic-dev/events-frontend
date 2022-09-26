import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';import { EventRestService } from 'src/app/core/services/event-rest-service/event-rest.service';
import { EventResponseModel } from 'src/app/core/services/events-service/events-model/event-response.model';

@Component({
    selector: 'app-event-container',
    templateUrl: './event-container.component.html',
    styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {

    event: EventResponseModel;

    constructor(
        private eventRestService: EventRestService,
        private route: ActivatedRoute
        ) { }

    ngOnInit(): void {
        const eventId = this.route.snapshot.params['id'];
        this.event = this.eventRestService.getEventById(+eventId);
        console.log(this.event);

    }

}
