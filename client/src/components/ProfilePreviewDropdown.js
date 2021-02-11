import { useQuery } from "@apollo/client"
import React from "react"
import { FETCH_MY_PROFILE_QUERY } from "../queries/users"
import Loading from "./Loading"
import { Container, Row, Col } from "reactstrap"

const ProfilePreviewDropdown = () => {
  const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY)
  if (loading) return <Loading />
  if (error) return `Error fetching profile.`

  return (
    <div className="ProfilePreviewDropdown">
      <Container className="justify-content-center">
        <Row className="mb-3">
          <Col>
            <img
              className="img-thumbnail rounded-circle"
              src={data.getMyProfile.profileImage}
              alt="profile"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>{data.getMyProfile.username}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProfilePreviewDropdown
