// import { useQuery } from "@apollo/client"
// import React from "react"
// import { FETCH_MY_PROFILE_QUERY } from "../queries/users"
// import Loading from "./Loading"
// import { Box } from "@chakra-ui/react"

// const ProfilePreviewDropdown = () => {
//   const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY)
//   if (loading) return <Loading />
//   if (error) return `Error fetching profile.`

//   return (
//     <div className="ProfilePreviewDropdown">
//       <Box className="justify-content-center">
//         <img
//           className="img-thumbnail rounded-circle"
//           src={data.getMyProfile.profileImage}
//           alt="profile"
//           height="20px"
//           width="20px"
//         ></img>

//         <p>{data.getMyProfile.username}</p>
//       </Box>
//     </div>
//   )
// }

// export default ProfilePreviewDropdown
