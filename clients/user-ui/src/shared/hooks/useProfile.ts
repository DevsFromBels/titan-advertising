'use client'
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/shared/graphql/actions/profile/getProfile.action";

const UseProfile = ({ name } : { name: string }) => {
  const { loading,  data, error } = useQuery<IUseProfile>(GET_PROFILE, {
    variables: {
      userName: name
    }
  });

  return {
    loading,
    profile: data?.profile,
    error
  }
};
export default UseProfile;

export type IUseProfile = {
    profile: {
      user: {
        id: string
        name: string
        email: string
        role: string
      }
      info: string
      isPublic: boolean
    }
}
