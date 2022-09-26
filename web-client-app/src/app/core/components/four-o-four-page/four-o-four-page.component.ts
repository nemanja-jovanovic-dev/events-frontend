import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {AppState} from '../../store';
import * as fromActions from '../../store/core.actions';
import {ConfirmRegistrationRestService} from '../../services/confirm-registration-service/confirm-registration-rest.service';
import {ConfirmedUserResponseModel} from '../../services/confirm-registration-service/model/confirmed-user-response.model';

@Component({
    selector: 'app-four-o-four-page',
    templateUrl: './four-o-four-page.component.html',
    styleUrls: ['./four-o-four-page.component.scss'],
})
export class FourOFourPageComponent implements OnInit {
    message: string;

    constructor(
        private route: ActivatedRoute,
        private confirmRegistrationRestService: ConfirmRegistrationRestService,
        private store: Store<AppState>
    ) {
    }

    ngOnInit(): void {
        this.route.url.pipe(take(1)).subscribe((urlParams) =>
            urlParams.map((param) =>
            {
                console.log('param: ', param);

                this.store.dispatch(
                    fromActions.userFinishRegistrationWithToken({
                        token: param.path,
                    })
                )}
            )
        );
    }
}
