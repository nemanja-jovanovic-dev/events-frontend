import { UserRoleTypeEnum } from '../../../components/registration/registration.component';

export interface UserResponseModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRoleTypeEnum;
}
