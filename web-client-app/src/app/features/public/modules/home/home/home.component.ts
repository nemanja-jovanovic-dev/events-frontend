import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../../../../core/services/events-service/events.service';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../core/store';
import {CredentialsVerificationRestService} from '../../../../../core/services/auth-service/credentials-verification-rest.service';
import {CredentialsVerificationRequestModel} from '../../../../../core/services/auth-service/model/credentials-verification-request.model';
import {UserRoleTypeEnum} from '../../../../../core/components/registration/registration.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(
        private eventsService: EventsService,
        private dialog: MatDialog,
        private store: Store<AppState>,
        private credentialsVerificationRestService: CredentialsVerificationRestService
    ) {
    }

    onScrollTo(el: HTMLElement): void {
        el.scrollIntoView({behavior: 'smooth'});
    }

    ngOnInit(): void {
        // this.confirmRegistrationRestService
        //     .getTestInfo()
        //     .subscribe((value) => console.log('Test value: ', value));

        // const credentials: CredentialsVerificationRequestModel = {
        //     email: 'nemus.events+bb2@gmail.com',
        //     password: 'Asdasd12.',
        //     firstName: 'Nemanja',
        //     lastName: 'Jovanovic',
        //     role: UserRoleTypeEnum.GUEST
        // };
        //
        // tslint:disable-next-line:max-line-length
        // this.credentialsVerificationRestService.userRegistration(credentials).subscribe(value => console.log('Credentials registration value: ', value));

        this.eventsService.category().subscribe((value) => console.log(value));
    }
}
