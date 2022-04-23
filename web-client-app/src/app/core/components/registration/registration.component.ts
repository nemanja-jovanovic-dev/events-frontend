import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import * as CoreActions from '../../store/core.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {UserRegistrationRequestModel} from '../../services/registration-rest-service/model/user-registration-request.model';

export enum UserRoleTypeEnum {
    GUEST = 'GUEST',
    HOST = 'HOST',
    ADMIN = 'ADMIN'
}

interface UserRoleTypeOptionsModel {
    value: UserRoleTypeEnum;
    viewValue: string;
}

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;
    firstNameFormControl = new FormControl('', Validators.required);
    lastNameFormControl = new FormControl('', Validators.required);
    emailFormControl = new FormControl('', Validators.required);
    passwordFormControl = new FormControl('', Validators.required);
    userRoleTypeFormControl = new FormControl('', Validators.required);

    UserRoleTypeEnum = UserRoleTypeEnum;

    selectedValue: string;
    selectedCar: string;

    userRoleTypeOptions: UserRoleTypeOptionsModel[] = [
        {value: UserRoleTypeEnum.ADMIN, viewValue: 'Admin'},
        {value: UserRoleTypeEnum.HOST, viewValue: 'Host'},
        {value: UserRoleTypeEnum.GUEST, viewValue: 'Guest'},
    ];

    constructor(private dialog: MatDialog, private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            firstNameFormControl: this.firstNameFormControl,
            lastNameFormControl: this.lastNameFormControl,
            emailFormControl: this.emailFormControl,
            password: this.passwordFormControl,
            userRoleType: this.userRoleTypeFormControl
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }

        const user: UserRegistrationRequestModel = {
            email: this.emailFormControl.value,
            firstName: this.firstNameFormControl.value,
            lastName: this.lastNameFormControl.value,
            password: this.passwordFormControl.value,
            role: this.userRoleTypeFormControl.value
        };

        this.store.dispatch(CoreActions.userRegistration({user}));
        this.dialog.closeAll();
    }

    onClose(): void {
        this.dialog.closeAll();
    }
}
