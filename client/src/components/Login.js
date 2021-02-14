import React from "react"
import LoginForm from "./LoginForm"
import Layout from "./layout"
const Login = ({ setUser }) => {
  return (
    <Layout>
      <LoginForm setUser={setUser} />
    </Layout>
  )
}

export default Login
