
import { CognitoUserPool, } from "amazon-cognito-identity-js";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import jwt from "jsonwebtoken";
import { getToken } from "./get-token";
const provider = new CognitoIdentityServiceProvider();




interface input {
    request: { token: string, username: string, password: string, UserPoolId: string, ClientId: string }
    config: { autoEnable: boolean }
}

const getUser = async (input: input) => {
    const { token } = input.request;


    if (!token) {
        const token = await getToken(input);
        const user = jwt.decode(token);
        console.log(user);
        return user;
    }

    return jwt.decode(token);
};

export { getUser };