import React from "react"
import dayjs from "dayjs"
import { Card, CardBody, CardDeck, Row } from "reactstrap"

const Statistics = ({ ladders }) => {
  const tasksCompleted = ladders.reduce(
    (total, next) => (total += next.assignments.filter(a => a.completed).length),
    0
  )

  const getNextDueDate = ladders => {
    let allTasks = []
    for (const ladder of ladders) {
      allTasks = allTasks.concat(
        ladder.assignments.filter(a => !a.completed && dayjs(a.dueDate) > dayjs())
      )
    }
    allTasks.sort((a, b) => dayjs(a) - dayjs(b))
    return allTasks.length === 0 ? "n/a" : dayjs(allTasks[0].dueDate).format("ddd MMM D")
  }

  return (
    <div className="Statistics text-left">
        <Row><h1 className="font-weight-light">Statistics</h1></Row>
      <Row>
        <CardDeck>
          <Card style={{"border": "none", "fontSize": "13px"}}>
            <CardBody>
              <h3>{tasksCompleted}</h3>
              <p>Number of completed tasks</p>
            </CardBody>
          </Card>
          <Card style={{"border": "none", "fontSize": "13px"}}>
            <CardBody>
              <h3>{getNextDueDate(ladders)}</h3>
              <p>Next task due</p>
            </CardBody>
          </Card>
          <Card style={{"border": "none", "fontSize": "13px"}}>
            <CardBody>
              <h3>{ladders.length}</h3>
              <p>Number of mountains climbed</p>
            </CardBody>
          </Card>
        </CardDeck>
      </Row>
    </div>
  )
}

export default Statistics
