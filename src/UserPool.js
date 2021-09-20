import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_ux2xfwA2v",
    ClientId: "5qe2ousnvfpqoest6nfm9ievi4"
}

export default new CognitoUserPool(poolData);