import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {ConfirmRegistrationRestService} from '../../services/confirm-registration-service/confirm-registration-rest.service';

@Component({
  selector: 'app-four-o-four-page',
  templateUrl: './four-o-four-page.component.html',
  styleUrls: ['./four-o-four-page.component.scss']
})
export class FourOFourPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private confirmRegistrationRestService: ConfirmRegistrationRestService) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => console.log('activated route: ', value));
    this.route.queryParams.subscribe(value => console.log('query params: ', value));

    this.route.url.subscribe(value =>
      console.log('url activated route: ',
        value.map(value1 =>
          this.confirmRegistrationRestService.createUser(value1).subscribe(
            subscribeValue => console.log('Value after confirm user: ', subscribeValue)
          )
        )
      )
    );
  }

}
