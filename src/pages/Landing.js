import { Link } from "react-router-dom"
import React from "react"
import Question from "../components/Question"

const Landing = (props) => {
  const id = props
  return (
    <div>
      <h2>hi!</h2>
      <Question content="What is your favourite food?" />
      <Link to={`/quiz/${id}`} className="pet" />
    </div>
  )
}

export default Landing
