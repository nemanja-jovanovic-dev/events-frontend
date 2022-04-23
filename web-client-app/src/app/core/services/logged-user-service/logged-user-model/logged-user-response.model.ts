import { UserRoleTypeEnum } from 'src/app/core/components/registration/registration.component';

export interface LoggedUserResponseModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRoleTypeEnum;
}
