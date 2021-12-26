import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {Observable} from 'rxjs';
import {LoggedUserResponseModel} from '../../../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {loggedUsersSelector} from '../../../store/core.reducer';
import * as CoreActions from '../../../store/core.actions';

@Component({
  selector: 'app-public-preview',
  templateUrl: './public-preview.component.html',
  styleUrls: ['./public-preview.component.scss']
})
export class PublicPreviewComponent implements OnInit {

  listOfUsers$: Observable<LoggedUserResponseModel[]> = this.store.select(loggedUsersSelector);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(CoreActions.getUsers());
    this.listOfUsers$.subscribe(
      value => console.log('List of all users', value)
    );
  }

}
