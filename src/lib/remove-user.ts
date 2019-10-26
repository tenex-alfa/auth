
import { CognitoUserPool, } from "amazon-cognito-identity-js";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const provider = new CognitoIdentityServiceProvider();




interface input {
    request: { username: string, password: string, UserPoolId: string, ClientId: string }
    config: { autoEnable: boolean }
}

const removeUser = async (input: input) => {
    const { UserPoolId, username } = input.request;
    await new Promise((res, rej) => provider.adminDeleteUser({ UserPoolId, Username: username }, (err, data) => {
        if (data) res(data);
        if (err) rej(err)
    }))
    return 200;
};

export { removeUser };