import {Component, OnInit} from '@angular/core';
import * as fromReducer from '../../store/core.reducer';
import {Observable} from 'rxjs';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    loggedUserToken$: Observable<string> = this.store.select(fromReducer.loggedUserTokenSelector);

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.loggedUserToken$.subscribe(
            value => console.log('Logged user token: ', value)
        );
    }

}
