import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../../../../core/services/events-service/events.service';
import {MatDialog} from '@angular/material/dialog';
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

    constructor(private eventsService: EventsService, private dialog: MatDialog, private store: Store<AppState>) {
    }

    ngOnInit(): void {
        console.log('works');
    }
}
