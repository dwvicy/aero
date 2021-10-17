import "./App.css"
import React from "react"
import { Particles } from "react-tsparticles"
import { Link } from "react-router-dom"

const Gender = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 5,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <main>
        <div className="box">
          <img
            src="https://i.imgur.com/I4bSHnD.png"
            alt="aero+myntra"
            className="logo"
          />
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
