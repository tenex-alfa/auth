
import { CognitoUserPool, } from "amazon-cognito-identity-js";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const provider = new CognitoIdentityServiceProvider();




interface input {
    request: { username: string, password: string, UserPoolId: string, ClientId: string }
    config: { autoEnable: boolean }
}

const enable = async (input: input) => {
    const { UserPoolId, username } = input.request;
    await new Promise((res, rej) => provider.adminConfirmSignUp({ UserPoolId, Username: username }, (err, data) => {
        console.log(data);
        if (data) res(data);
        if (err) rej(err)
    }))
    return 200;
};

export { enable };