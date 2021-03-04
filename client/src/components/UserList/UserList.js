import React from "react"
import { Stack } from "@chakra-ui/react"
import UserListItem from "./UserListItem"

const UserList = ({users, setSelectedUser, type, refetch}) => {
  return (
    <div className="UserList">
      <Stack spacing={5}>
        {
          users.map(u => (
            <UserListItem 
              key={u.username} 
              username={u.username}
              profileImage={u.profileImage}
              setSelectedUser={setSelectedUser}
              type={type}
              refetch={refetch}
            />
          ))
        }
      </Stack>
    </div>
  )
}

export default UserList