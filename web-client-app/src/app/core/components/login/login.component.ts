import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { CredentialsVerificationRestService } from '../../services/credentials-verification-service/credentials-verification-rest.service';
import { CredentialsVerificationRequestModel } from '../../services/credentials-verification-service/model/credentials-verification-request.model';
import { LoggedUserResponseModel } from '../../services/logged-user-service/logged-user-model/logged-user-response.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    user: LoggedUserResponseModel;

    form: FormGroup;
    username = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);

    constructor(
        private store: Store<AppState>,
        private dialog: MatDialog,
        private credentialsVerificationRestService: CredentialsVerificationRestService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            username: this.username,
            password: this.password,
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            console.log('Invalid form');
        } else {
            const userCredentials: CredentialsVerificationRequestModel = {
                email: this.username.value,
                password: this.password.value,
            };
            this.credentialsVerificationRestService
                .userLogin(userCredentials)
                .subscribe((value) =>
                    console.log('credentiaals subscribe: ', value)
                );
        }
    }

    onClose(): void {
        this.dialog.closeAll();
    }
}
