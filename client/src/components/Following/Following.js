import React from "react"
import { useQuery } from "@apollo/client"
import { Search2Icon } from "@chakra-ui/icons"
import { Container, Heading, HStack, Input, InputGroup, InputRightAddon, Spacer } from "@chakra-ui/react"
import { WHO_AM_I_FOLLOWING_QUERY } from "../../queries/users"
import Layout from "../Layout/Layout"
import Loading from "../Loading/Loading"
import UserList from "../UserList/UserList"

const Following = () => {

  const { loading, error, data, refetch } = useQuery(WHO_AM_I_FOLLOWING_QUERY)

  if (loading) return <Loading />
  if (error) return "Something went wrong :("

  return (
    <div className="Following">
      <Layout>
        <Container>
          <HStack 
            spacing={10} 
            mb={5}
            pb="10px"
            style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
          >
            <Heading fontSize="24px">Following</Heading>

            <Spacer />

            <InputGroup>
              <Input />
              <InputRightAddon><Search2Icon /></InputRightAddon>
            </InputGroup>
            
          </HStack>
          <UserList
              users={data.getMyFollowing}
              type="following"
              refetch={refetch}
            />
        </Container>
      </Layout>
    </div>
  )
}

export default Following