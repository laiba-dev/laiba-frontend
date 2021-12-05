import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const response = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.accessToken,
        },
      });

      let userData = await response.json();
      const newUser = {
        ...session.user,
        login: userData.login,
        accessToken: token.accessToken,
      };

      return {
        ...session,
        user: newUser,
      };
    },
    jwt: async ({ account, token }) => {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  // pages: {
  //     signIn: '/auth/login',
  // },
  secret: process.env.SECRET,
});
