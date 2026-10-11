import { useState } from 'react'
import heroImg from './assets/bg.jpg'
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
        <section className="reports">
  <h2>Project Reports</h2>

  <div className="report-buttons">

    <details className="report-group">
      <summary className="report-btn">
        Conceptual Architecture
      </summary>
      <div className="report-links">
        <a href={`${import.meta.env.BASE_URL}CISC_322_A1.pdf`}target="_blank">Report</a>
        <a href="https://docs.google.com/presentation/d/1UH_uFSC2WF7We6Qjl-Lno7vedcVnZDtfgTR-HsPwVgs/edit?usp=sharing" target="_blank">Slides</a>
        <a href="https://www.youtube.com/watch?v=OjZ6GRgYZac" target="_blank">Video</a>
      </div>
    </details>

    <details className="report-group">
      <summary className="report-btn">
        Concrete Architecture
      </summary>
      <div className="report-links">
        <a href="A2_REPORT_LINK" target="_blank">Report</a>
        <a href="A2_SLIDES_LINK" target="_blank">Slides</a>
        <a href="A2_VIDEO_LINK" target="_blank">Video</a>
      </div>
    </details>

    <details className="report-group">
      <summary className="report-btn">
        Final Report
      </summary>
      <div className="report-links">
        <a href="A3_REPORT_LINK" target="_blank">Report</a>
        <a href="A3_SLIDES_LINK" target="_blank">Slides</a>
        <a href="A3_VIDEO_LINK" target="_blank">Video</a>
      </div>
    </details>

  </div>
</section>
        <div id="social">
          <h2>Group Members</h2>

          <div className="member">
            <img src={elephantImg} alt="Christian" />
            <p>Aitas, Christian</p>
          </div>

          <div className="member">
            <img src={goatImg} alt="Calvin" className="calvin" />
            <p>Dang, Calvin <span className="role">(Presenter)</span></p>
            </div>

          <div className="member">
            <img src={catImg} alt="Rocco" />
            <p>Destefano, Rocco <span className="role">(Presenter)</span></p>
          </div>

          <div className="member">
            <img src={chickImg} alt="Darby" />
            <p>Duggan, Darby</p>
          </div>

          <div className="member">
            <img src={cowImg} alt="Addie (Group Leader)" />
            <p>Kucey, Addie <span className="role">(Group Leader)</span></p>
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