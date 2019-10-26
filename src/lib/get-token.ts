
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import { enable } from "./enable";

const provider = new CognitoIdentityServiceProvider();




interface input {
    request: { username: string, password: string, UserPoolId: string, ClientId: string }
    config: { autoEnable: boolean }
}

const getToken = async (input: input) => {
    const { username, password, UserPoolId, ClientId } = input.request;
    const authData = { Username: username, Password: password };
    const pool = new CognitoUserPool({ UserPoolId, ClientId });
    const userData = { Username: username, Pool: pool };
    const authDetails = new AuthenticationDetails(authData);
    const cognitoUser = new CognitoUser(userData);

    const login = (resolve: any, reject: any) => {
        cognitoUser.authenticateUser(authDetails, {

            onSuccess: (data) => resolve(data),
            onFailure: (err) => reject(err)
        })
    }

    return new Promise(login).then((value: any) => value.idToken.jwtToken);


};

export { getToken };