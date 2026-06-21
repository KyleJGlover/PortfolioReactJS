import profilePhoto from "../../images/ProfilePicture.jpg"
import resume from "../../pdf_files/Resume.pdf"
import "./greeter.css"
import {
  useEffect,
  useState,
} from "react"

function Greeter() {
  const skills = [
    "C#",
    ".NET",
    "React",
    "Azure",
    "SQL",
    "ETL",
    "REST APIs",
  ]

  const themes = {
    light: "default.css",
    blue: "Color_Schemes/blue.css",
    green: "Color_Schemes/green.css",
    purple: "Color_Schemes/purple.css",
  }

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      "light",
  )

  useEffect(() => {
    const stylesheet =
      document.getElementById(
        "theme-style",
      )

    if (!stylesheet) {
      console.error(
        "Theme stylesheet not found",
      )
      return
    }

    stylesheet.href = themes[theme]
    debugger
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <section className='s1'>
      <div className='container'>
        <div className='hero'>
          {/* Code Window */}
          <div className='hero-card'>
            <div className='window-header'>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className='hero-content'>
              <div className='hero-text'>
                <p className='terminal-label'>
                  Software Engineer
                </p>

                <h1>Kyle Glover</h1>

                <h2>
                  Building scalable
                  applications, cloud
                  services, and data
                  platforms.
                </h2>

                <p>
                  Full-stack developer
                  specializing in React,
                  C#, Azure, APIs, and
                  enterprise
                  integrations.
                </p>

                <div className='skill-container'>
                  {skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className='skill-pill'
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>

                <div className='hero-actions'>
                  <a
                    href={resume}
                    target='_blank'
                    rel='noreferrer'
                    className='primary-btn'
                  >
                    Resume
                  </a>

                  <a
                    href='https://github.com/KyleJGlover'
                    target='_blank'
                    rel='noreferrer'
                    className='secondary-btn'
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className='hero-image'>
                <div className='status'>
                  <span className='status-dot'></span>
                  Open to opportunities
                </div>

                <img
                  src={profilePhoto}
                  alt='Kyle Glover'
                />
                <div className='theme-controls'>
                  <p>Customize Theme</p>

                  <div className='theme-options'>
                    {Object.keys(
                      themes,
                    ).map((option) => (
                      <button
                        className={`theme-dot ${option}`}
                        onClick={() => {
                          console.log(
                            option,
                          )
                          setTheme(
                            option,
                          )
                        }}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Greeter
