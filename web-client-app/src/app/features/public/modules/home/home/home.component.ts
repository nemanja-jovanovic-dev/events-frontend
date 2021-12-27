import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../../../../core/services/events-service/events.service';
import {EventsResponseModel} from '../../../../../core/services/events-service/events-model/events-response.model';
import {MatDialog} from '@angular/material/dialog';
import * as CoreActions from '../../../../../store/core.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../store';
import {Observable} from 'rxjs';
import {LoggedUserResponseModel} from '../../../../../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {loggedUsersSelector} from '../../../../../store/core.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedUsers$: Observable<LoggedUserResponseModel[]> = this.store.select(loggedUsersSelector);

  constructor(private eventsService: EventsService, private dialog: MatDialog, private store: Store<AppState>) { }

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

    // this.eventsService.category().subscribe(
    //   value => console.log('This is first psoted value: ', value)
    // );

    this.loggedUsers$.subscribe(value => console.log('Logged users selector: ', value));
  }

  getUsers(): void {
    this.store.dispatch(CoreActions.getUsers());
  }
}
