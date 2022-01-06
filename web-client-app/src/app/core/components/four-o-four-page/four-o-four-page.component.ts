import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfirmRegistrationRestService} from '../../services/confirm-registration-service/confirm-registration-rest.service';
import * as fromActions from '../../../store/core.actions';
import {take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';

@Component({
    selector: 'app-four-o-four-page',
    templateUrl: './four-o-four-page.component.html',
    styleUrls: ['./four-o-four-page.component.scss']
})
export class FourOFourPageComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private confirmRegistrationRestService: ConfirmRegistrationRestService,
                private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.route.url
            .pipe(take(1))
            .subscribe(urlParams =>
                urlParams
                    .map(param => this.store.dispatch(fromActions.userFinishRegistrationWithToken({token: param.path})))
            );
    }
}
