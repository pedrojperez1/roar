import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import UserProfile from "./UserProfile"

const UserProfilePage = () => {
  const { username } = useParams()
  return (
    <div className="UserProfilePage">
      <Layout>
        <UserProfile username={username} />
      </Layout>
    </div>
  )
}

export default UserProfilePage