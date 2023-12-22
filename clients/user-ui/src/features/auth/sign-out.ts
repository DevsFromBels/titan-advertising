import { LOGOUT_USER } from "@/shared/graphql/actions/logout.action";
import { graphqlClient } from "@/shared/graphql/gql.setup";
import Cookies from 'js-cookie'

export const SignOut = async () => {
  const data= await graphqlClient.query<SignOutUserType>({
    query: LOGOUT_USER,
    variables: {}
  })
  console.log(data)

  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  window.location.reload();
};

export interface SignOutUserType {
  LogOutUser: LogOutUser
}

interface LogOutUser {
  message: string
}