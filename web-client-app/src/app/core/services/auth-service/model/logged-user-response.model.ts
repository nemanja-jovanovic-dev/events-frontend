import { CredentialsVerificationResponseModel } from "./credentials-verification-response.model";

export interface LoggedUserWithTokenResponseModel {
    token: string;
    loggedUser: CredentialsVerificationResponseModel;
}
