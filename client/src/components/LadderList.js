import React from "react"
import { Link } from "react-router-dom"
import { Container, ListGroup, ListGroupItem } from "reactstrap"
import { useQuery } from "@apollo/client"
import { GET_LADDERS_BY_USERID } from "../queries/ladders"
import Loading from "./Loading"
import Layout from "./layout"

const LadderList = () => {
  const { loading, error, data } = useQuery(GET_LADDERS_BY_USERID)
  if (loading) return <Loading />
  if (error) {
    console.log("error", error)
    return `Something went wrong! ${error.message}`
  }
  const currentUserLadders = data.getMyLadders

  return (
    <Layout>
      <Container>
        <h3 className="my-5">My Ladders</h3>
        {currentUserLadders.length === 0 ? (
          <p>
            You have not created any fear ladders yet. Create one <Link to="/newladder">here</Link>!
          </p>
        ) : (
          <ListGroup>
            {currentUserLadders.map(ladder => (
              <ListGroupItem key={ladder.id} tag={Link} to={`/ladders/${ladder.id}`}>
                {ladder.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Container>
    </Layout>
  )
}

export default LadderList
