import React from "react"
import PropTypes from "prop-types"

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <label>
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          src={props.answerContent}
          height="50"
        ></input>
        <img
          src={props.answerContent}
          className="radioCustomLabel"
          htmlFor={props.answerType}
        ></img>
      </label>
    </li>
  )
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default AnswerOption
