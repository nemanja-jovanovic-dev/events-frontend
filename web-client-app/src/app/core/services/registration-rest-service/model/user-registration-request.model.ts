import { UserRoleTypeEnum } from '../../../components/registration/registration.component';

export interface UserRegistrationRequestModel {
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    role: UserRoleTypeEnum;
}
