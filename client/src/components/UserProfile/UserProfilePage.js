import { useQuery } from "@apollo/client"
import React from "react"
import { useParams } from "react-router-dom"
import { FETCH_MY_PROFILE_QUERY, FETCH_PROFILE } from "../../queries/users"
import Layout from "../Layout/Layout"
import Loading from "../Loading/Loading"
import UserProfile from "./UserProfile"

const UserProfilePage = () => {
  const { username } = useParams();
  const {loading, error, data, refetch} = useQuery(FETCH_PROFILE, {
    variables: {username: username}
  });
  const {
    loading: loadingMe, 
    error: errorMe, 
    data: dataMe, 
    refetch: refetchMe
  } = useQuery(FETCH_MY_PROFILE_QUERY);

  const refetchAll = () => {
    refetch();
    refetchMe();
  }

  if (loading || loadingMe) return <Loading />
  if (error || errorMe) {
      return `Something bad happened. ${error}`
  }

  const profile = data.fetchProfile;
  const myProfile = dataMe.getMyProfile;

  return (
    <div className="UserProfilePage">
      <Layout>
        <UserProfile profile={profile} myProfile={myProfile} refetchAll={refetchAll}/>
      </Layout>
    </div>
  )
}

export default UserProfilePage