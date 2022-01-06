import {UserRoleTypeEnum} from '../../../components/registration/registration.component';

export class ConfirmedUserResponseModel {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRoleTypeEnum;
}
