import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId:'',
            clientSecret:''
        })
    ],
    async sessions({session}){

    },
    async signIn({profile}){

    }
});

export { handler as GET, handler as POST };