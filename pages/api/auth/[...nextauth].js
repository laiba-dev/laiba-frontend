import axios from "axios";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import router from "next/router";
import { API_URL } from "../../../utils/constants";
import apiClient from "../../../utils/services/apiClient";

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
    signIn: async ({ user, account, profile }) => {
      try {
        let csrfTokenResponse = await apiClient.get("/sanctum/csrf-cookie");

        let loginResponse = await apiClient.post("/api/login", {
          username: profile.login,
        });

        account.laiba_api_token = loginResponse.data.data.token;
        return true;
      } catch (error) {
        console.log(error);
        return "/auth/register";
      }
    },
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
        apiToken: token.laiba_api_token,
      };

      return {
        ...session,
        user: newUser,
      };
    },
    jwt: async ({ account, token }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.laiba_api_token = account.laiba_api_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.SECRET,
});
