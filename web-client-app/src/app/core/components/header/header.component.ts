import { Component } from '@angular/core';
import {IMAGE_PATH} from '../../util/url-util';
import {ActivatedRoute, Router} from '@angular/router';
import {PUBLIC_HOME, PUBLIC_MAP, PUBLIC_RESERVATIONS} from '../../util/routes';
import {MatDialog} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration/registration.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  IMAGE_PATH = IMAGE_PATH;
  PUBLIC_HOME = PUBLIC_HOME;
  PUBLIC_RESERVATIONS = PUBLIC_RESERVATIONS;
  PUBLIC_MAP = PUBLIC_MAP;

  isUserLoggedIn: false;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  openUserRegistrationDialog(): void {
    this.dialog.open(RegistrationComponent, {disableClose: true});
  }

  openUserLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }
}
