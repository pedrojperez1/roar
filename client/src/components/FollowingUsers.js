import React from "react"
import { Text } from "@chakra-ui/react"
import UserList from "./UserList"

const FollowingUsers = ({users, refetch, setSelectedUser}) => {

    return (
        <div className="FollowingUsers">
            <Text fontSize="xl" mb={5}>Following Users</Text>
            <UserList users={users} type="following" refetch={refetch} setSelectedUser={setSelectedUser}/>
        </div>
    )
}

export default FollowingUsers