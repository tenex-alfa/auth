
import { CognitoUserPool, } from "amazon-cognito-identity-js";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import { enable } from "./enable";

const provider = new CognitoIdentityServiceProvider();




interface input {
    request: { username: string, password: string, UserPoolId: string, ClientId: string }
    config: { autoEnable: boolean }
}

const create = async (input: input) => {
    const { username, password, UserPoolId, ClientId } = input.request;
    const pool = new CognitoUserPool({ UserPoolId, ClientId });
    const func = (res: any, rej: any) =>
        pool.signUp(username, password, [], [], (err, data) => {
            if (data) res(data);
            if (err) rej(err);
        });
    await new Promise(func);

    console.log(input.config.autoEnable)
    if (input.config.autoEnable) {
        const res = await enable(input);
    }
    return 200;

};

export { create };