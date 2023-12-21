"use client";

import { gql, DocumentNode } from "@apollo/client";

export const GET_USER: DocumentNode = gql`
    query {
        getLoggedInUser {
            user {
                id
                name
                email
                password
            }
            accessToken
            refreshToken
        }
    }
`;

export interface IGetUser {
  getLoggedInUser: GetLoggedInUser
}

interface GetLoggedInUser {
  user: User
  accessToken: string
  refreshToken: string
}

interface User {
  id: string
  name: string
  email: string
  password: string
}