import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ConfirmedUserResponseModel} from '../../../services/confirm-registration-service/model/confirmed-user-response.model';

@Component({
    selector: 'app-four-o-four-page-content',
    templateUrl: './four-o-four-page-content.component.html',
    styleUrls: ['./four-o-four-page-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourOFourPageContentComponent implements OnChanges {

    @Input() confirmedUser: ConfirmedUserResponseModel;
    @Input() loading: boolean;

    message: string;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.confirmedUser) {
            this.message = `The user ${this.confirmedUser?.firstName} ${this.confirmedUser?.lastName} has successfully registered as a ${this.confirmedUser?.role.toLowerCase()} to Events platform. You can now reserve your place or create your own Event.`;
        }
    }
}
