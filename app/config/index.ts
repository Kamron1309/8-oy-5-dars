import { AuthOptions } from "next-auth";
import GitHubPorvider from "next-auth/providers/github";

export const authOptions:AuthOptions = {
    providers:[
        GitHubPorvider({
            clientId: "process.env.NEXT_GIT_CLIENT_ID as string",
            clientSecret: "process.env.NEXT_GIT_CLIENT_SECREET as string",
        })
    ],
    secret:"process.env.SECREET_KEY as string"
};