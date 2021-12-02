import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../../../../core/services/events-service/events.service';
import {EventsResponseModel} from '../../../../../core/services/events-service/events-model/events-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    const event: EventsResponseModel = {
      categoryId: '9c31cf85-6b0a-4bdc-bc5f-cf5ad048f7d4',
      description: 'This is description',
      title: 'First event',
      timestamp: '13.11.2021'
    };

    // this.eventsService.postEvent(event).subscribe(
    //   value => console.log('This is first psoted value: ', value)
    // );

    this.eventsService.category().subscribe(
      value => console.log('This is first psoted value: ', value)
    );
  }

}
