import { Component } from '@angular/core';
import {IMAGE_PATH} from '../../util/url-util';
import {ActivatedRoute, Router} from '@angular/router';
import {PUBLIC_HOME, PUBLIC_REGISTRATION, PUBLIC_RESERVATIONS} from '../../util/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  IMAGE_PATH = IMAGE_PATH;
  PUBLIC_HOME = PUBLIC_HOME;
  PUBLIC_RESERVATIONS = PUBLIC_RESERVATIONS;
  PUBLIC_REGISTRATION = PUBLIC_REGISTRATION;

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
