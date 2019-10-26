import { validate } from "@tenex/schema-validate"
import { template } from "./lib/template"
import { create } from "./lib/create-user"
import { enable } from "./lib/enable";
import { getUser } from "./lib/get-user";
import { removeUser } from "./lib/remove-user";
import { getToken } from "./lib/get-token";
export default async function (request: any) {
    validate(request, template);


    const ClientId = process.env[this.id + "_client"];
    const UserPoolId = process.env[this.id + "_pool"];
    const { username, password, token } = request;
    console.log(UserPoolId)
    const intent: string = request.intent;
    const config: { autoEnable: boolean } = request.config;
    const input = {
        request: {
            token,
            username, password,
            ClientId, UserPoolId
        },
        config
    }
    try {
        switch (intent) {
            case "create": return await create(input);
            case "enable": return await enable(input);
            case "get": return await getUser(input);
            case "remove": return await removeUser(input);
            case "get-token": return await getToken(input);
        }
    } catch (err) {
        return err.message;
    }


}


