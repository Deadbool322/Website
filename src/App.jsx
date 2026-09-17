import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import catImg from './assets/Cat.jpeg'
import chickImg from './assets/Chick.jpeg'
import cowImg from './assets/Cow.jpeg'
import elephantImg from './assets/Elephant.jpeg'
import goatImg from './assets/goat.jpeg'
import puppyImg from './assets/puppy.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h2>CISC 322 - Software Architecture - Group 3</h2>
          <h1>DeadBool</h1>
          <p>Professor: Bram Adams</p>
          <p>
            Open Source Project:{' '}
            <a
              href="https://github.com/wizterm/wizterm"
              target="_blank"
            >
              WizTerm
            </a>
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Project Information</h2>
          <p>
            A1: Document the conceptual architecture of the open source
            project, WizTerm
          </p>
          <p>
            A2: Recover the concrete architecture and compare to conceptual
            architecture
          </p>
          <p>
            A3: Propose an enhancement, then propose and compare 2 designs/
            implementation plans
          </p>
        </div>

        <div id="social">
          <h2>Group Members</h2>

          <div className="member">
            <img src={elephantImg} alt="Christian" />
            <p>Aitas, Christian</p>
          </div>

          <div className="member">
            <img src={goatImg} alt="Calvin" />
            <p>Dang, Calvin</p>
          </div>

          <div className="member">
            <img src={catImg} alt="Rocco" />
            <p>Destefano, Rocco</p>
          </div>

          <div className="member">
            <img src={chickImg} alt="Darby" />
            <p>Duggan, Darby</p>
          </div>

          <div className="member">
            <img src={cowImg} alt="Addie" />
            <p>Kucey, Addie</p>
          </div>

          <div className="member">
            <img src={puppyImg} alt="Victor" />
            <p>Magnuszewski, Victor</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App