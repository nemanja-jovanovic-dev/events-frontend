import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {Observable} from 'rxjs';
import {LoggedUserResponseModel} from '../../../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {RegistrationRestService} from '../../../core/services/registration-rest-service/registration-rest.service';

@Component({
  selector: 'app-public-preview',
  templateUrl: './public-preview.component.html',
  styleUrls: ['./public-preview.component.scss']
})
export class PublicPreviewComponent {

  constructor(private store: Store<AppState>, private registrationRestService: RegistrationRestService) { }

}
