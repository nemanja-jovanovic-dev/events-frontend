import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as CoreActions from '../../../store/core.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {LoggedUserResponseModel} from '../../services/logged-user-service/logged-user-model/logged-user-response.model';
import {loggedUsersSelector} from '../../../store/core.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  listOfUsers$: Observable<LoggedUserResponseModel[]> = this.store.select(loggedUsersSelector);
  user: LoggedUserResponseModel;

  form: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('Invalid form');
    } else {
      this.listOfUsers$.subscribe(
        value => value.forEach(
          users => console.log('For each users exist: ', users.email === this.username.value)
        )
      );

      console.log('username: ', this.username.value);
    }
  }

  onClose(): void {
    this.dialog.closeAll();
  }
}
