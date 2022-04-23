import {UserRoleTypeEnum} from '../../../components/registration/registration.component';

export interface CredentialsVerificationResponseModel {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRoleTypeEnum;
}
