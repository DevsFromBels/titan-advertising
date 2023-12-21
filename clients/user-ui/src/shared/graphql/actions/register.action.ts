"use client";
import { gql, DocumentNode } from "@apollo/client";

export const REGISTER_USER: DocumentNode = gql`
  mutation RegisterUser(
    $name: String!
    $password: String!
    $email: String!
  ) {
    register(
      registerDto: {
        name: $name
        email: $email
        password: $password
      }
    ) {
      activation_token
    }
  }
`;