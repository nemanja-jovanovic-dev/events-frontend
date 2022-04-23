import {UserRoleTypeEnum} from '../../../components/registration/registration.component';

export interface CredentialsVerificationRequestModel {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRoleTypeEnum;
}
