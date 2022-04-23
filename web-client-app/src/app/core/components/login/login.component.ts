import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {CredentialsVerificationRestService} from '../../services/auth-service/credentials-verification-rest.service';
import {LoggedUserResponseModel} from '../../services/logged-user-service/logged-user-model/logged-user-response.model';
import * as fromActions from '../../store/core.actions';
import * as fromReducer from '../../store/core.reducer';
import {UserCredentialsRequestModel} from '../../services/auth-service/model/user-credentials-request.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user: LoggedUserResponseModel;

    loggedUserToken$: Observable<string> = this.store.select(fromReducer.loggedUserTokenSelector);

    form: FormGroup;
    username = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);

    constructor(
        private store: Store<AppState>,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            username: this.username,
            password: this.password,
        });
    }

    onSubmit(): void {
        const userCredentials: UserCredentialsRequestModel = {
            ...this.form.value
        };
        this.store.dispatch(fromActions.userLogin({userCredentials: userCredentials}));
    }

    onClose(): void {
        this.dialog.closeAll();
    }
}
