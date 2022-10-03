import {Component, OnInit} from '@angular/core';
import {IMAGE_PATH} from '../../util/url-util';
import {ActivatedRoute, Router} from '@angular/router';
import {PUBLIC_HOME, PUBLIC_MAP, PUBLIC_RESERVATIONS} from '../../util/routes';
import {MatDialog} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration/registration.component';
import {LoginComponent} from '../login/login.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { Observable } from 'rxjs';
import { CredentialsVerificationRestService } from '../../services/auth-service/credentials-verification-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	IMAGE_PATH = IMAGE_PATH;
	PUBLIC_HOME = PUBLIC_HOME;
	PUBLIC_RESERVATIONS = PUBLIC_RESERVATIONS;
	PUBLIC_MAP = PUBLIC_MAP;

	isUserLoggedIn = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private store: Store<AppState>,
        private credentialsVerificationService: CredentialsVerificationRestService
	) {}

	ngOnInit(): void {
        this.isUserLoggedIn = this.credentialsVerificationService.isUserLoggedIn();
    }

	openUserRegistrationDialog(): void {
		this.dialog.open(RegistrationComponent, { disableClose: true });
	}

	openUserLoginDialog(): void {
		this.dialog.open(LoginComponent, { disableClose: true });
	}

	onSelectFile(file: File[]): void {
		console.log('selected file: ', file[0]);
	}
}
