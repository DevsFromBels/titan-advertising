'use client'
import { useQuery } from "@apollo/client";
import { GET_USER, IGetUser } from "@/shared/graphql/actions/get-user.action";

const UseUser = () => {
  const { loading,  data } = useQuery<IGetUser>(GET_USER);

  console.log(data)
  return {
    loading,
    user: data?.getLoggedInUser.user,
  }
};
export default UseUser;
