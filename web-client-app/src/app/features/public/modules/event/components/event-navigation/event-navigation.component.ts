import { Component, OnInit, Input } from '@angular/core';
import { EventResponseModel } from 'src/app/core/services/events-service/events-model/event-response.model';
import { EVENT__OVERVIEW, EVENT__PHOTOS } from 'src/app/core/util/routes';

@Component({
  selector: 'app-event-navigation',
  templateUrl: './event-navigation.component.html',
  styleUrls: ['./event-navigation.component.scss']
})
export class EventNavigationComponent {

    @Input() event: EventResponseModel;

    EVENT__OVERVIEW = EVENT__OVERVIEW;
    EVENT__PHOTOS = EVENT__PHOTOS;
}
