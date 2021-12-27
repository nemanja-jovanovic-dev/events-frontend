import {UserRoleTypeEnum} from '../../../components/registration/registration.component';

export interface UserResponseModel {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleTypeEnum;
}
