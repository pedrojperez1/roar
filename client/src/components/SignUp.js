import React from "react"
import SignUpForm from "./SignUpForm"
import Layout from "./layout"

const SignUp = ({ setUser }) => {
  return (
    <Layout>
      <SignUpForm setUser={setUser} />
    </Layout>
  )
}

export default SignUp
