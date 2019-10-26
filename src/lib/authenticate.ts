interface input {
    request: { username: string, password: string, UserPoolId: string, ClientId: string }
    config: { autoEnable: boolean }
}

const enable = async (input: input) => {
    // THIS CODE IS IMPLMENTED USING CLOUDFORMATION
    // NO ADDITIONAL CODE IS NEEDED IN THE FUNCTIONS
    // SEE ADD ONS TO WHAT IS ADDED.
    return 200;
};

export { enable };