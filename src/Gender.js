import "./App.css"
import React from "react"
import { Link } from "react-router-dom"
import { Center } from "@chakra-ui/react"

const Gender = () => {
  return (
    <div>
      <main>
        <div className="box">
          <Center>
            <img
              src="https://i.imgur.com/I4bSHnD.png"
              alt="aero+myntra"
              className="logo"
            />
          </Center>
          <h2 className="h1b">Choose your location</h2>
          <div className="buttonbox">
            <button className="button">
              <Link to="/quiz" className="a">
                <span>Work</span>
              </Link>
            </button>

            <button className="button">
              <Link to="/quiz" className="a">
                <span>Home</span>
              </Link>
            </button>
            <button className="button">
              <Link to="/quiz" className="a">
                <span>Other</span>
              </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Gender
