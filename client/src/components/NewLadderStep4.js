import { useMutation } from "@apollo/client"
import React, { useEffect, useContext, useState, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { Button, Container, Fade } from "reactstrap"
import NewLadderContext from "../helpers/NewLadderContext"
import ActivitySummary from "./ActivitySummary"
import { ADD_LADDER_MUTATION } from "../queries/ladders"

const NewLadderStep5 = () => {
  const { newLadderData, setNewLadderData } = useContext(NewLadderContext)
  const [newLadderFormatted, setNewLadderFormatted] = useState({})

  const history = useHistory()
  const [addLadder] = useMutation(ADD_LADDER_MUTATION, {
    variables: { ...newLadderFormatted },
    onCompleted: ({ addLadder }) => {
      history.push(`/ladders/${addLadder.id}`)
      setNewLadderData({})
    },
  })
  const saveAndNext = useCallback(() => {
    setNewLadderFormatted(formatNewLadderData(newLadderData))
    addLadder()
  }, [newLadderData, addLadder])

  // useEffect(() => {
  //   const handleEnter = e => {
  //     if (e.key === "Enter") {
  //       e.preventDefault()
  //       saveAndNext()
  //     }

  //     if (e.key === "b") {
  //       e.preventDefault()
  //       history.push("/newladder/4")
  //     }
  //   }
  //   window.addEventListener("keydown", handleEnter)
  //   return () => {
  //     window.removeEventListener("keydown", handleEnter)
  //   }
  // }, [history, saveAndNext])

  const formatNewLadderData = newLadder => {
    const formatted = {}
    formatted.name = newLadder.name
    const levels = Object.keys(newLadder.activities)
    levels.sort((a, b) => newLadder.activities[a] - newLadder.activities[b])
    levels.forEach((level, idx) => (formatted[`level${idx + 1}`] = level))
    formatted[`level${levels.length + 1}`] = newLadder.level8
    return formatted
  }

  // const nextButtonOrText = () => {
  //   if (/Mobi|Android/i.test(navigator.userAgent)) {
  //     return (
  //       <>
  //         <Button onClick={saveAndNext}>Continue</Button>
  //         <Button onClick={() => history.push("/newladder/4")}>Back</Button>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         Press <kbd>Enter</kbd> to finish or <kbd>B</kbd> to go back
  //       </>
  //     )
  //   }
  // }

  return (
    <Fade>
      <div className="NewLadderStep5">
        <Container>
          <div className="text-left">
            <blockquote className="blockquote">Nice work! You're almost done!</blockquote>
            <blockquote className="blockquote">
              Look over your fear ladder below and make sure everything looks right. You can go back
              and make any changes now or you can always edit your ladder later on.
            </blockquote>
            <ActivitySummary newLadderData={newLadderData} />
            <p className="lead mt-5"><Button onClick={saveAndNext}>Continue</Button></p>
          </div>
        </Container>
      </div>
    </Fade>
  )
}

export default NewLadderStep5
