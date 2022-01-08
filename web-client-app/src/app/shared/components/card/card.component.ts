import {Component, Input, OnInit} from '@angular/core';
import {EventResponseModel} from '../../../core/services/events-service/events-model/event-response.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() size: string;
    @Input() event: EventResponseModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
