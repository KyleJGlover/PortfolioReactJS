import facebook from "../../images/facebook_icon.png"
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import { useState } from "react"
import "./aboutMe.css"

function Main() {
  const skillGroups = {
    "Frontend Development": [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
    ],

    "Backend Development": [
      "C#",
      ".NET",
      "REST APIs",
      "Microservices",
      "Authentication",
      "API Design",
    ],

    "Cloud & DevOps": [
      "Azure",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
    ],

    "Data Engineering": [
      "SQL",
      "ETL Pipelines",
      "Data Integration",
      "SFTP Automation",
      "Data Validation",
    ],

    "Embedded Systems": [
      "C++",
      "C",
      "Firmware",
      "OpenCV",
      "Hardware Integration",
    ],
  }

  const [
    selectedSkills,
    setSelectedSkills,
  ] = useState([])

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter(
            (item) => item !== skill,
          )
        : [...prev, skill],
    )
  }
  return (
    <div className='section-two-container'>
      <section className='s2'>
        <div className='main-container'>
          <div className='about-wrapper'>
            <div className='about-me'>
              <h4>About Me</h4>

              <p>
                I am a Software Engineer
                specializing in
                full-stack application
                development, cloud-based
                solutions, and
                data-driven platforms. I
                enjoy building scalable
                systems that solve
                real-world business
                problems through clean
                architecture,
                automation, and
                thoughtful engineering
                practices.
              </p>

              <h4>What I Have Done</h4>

              <p>
                At Pet Food Express, I
                design and maintain
                full-stack applications
                supporting e-commerce
                operations and retail
                integrations. I have
                developed React-based
                storefront features,
                C#/.NET APIs,
                Azure-hosted services,
                and automated data
                pipelines that connect
                internal systems with
                third-party partners
                such as Amazon,
                DoorDash, and Instacart.
              </p>

              <p>
                I have built
                cloud-native solutions
                using Microsoft Azure,
                including REST APIs,
                authentication workflows
                with Microsoft Entra ID,
                and automated ETL
                processes that improve
                data reliability and
                operational efficiency.
                My work has reduced item
                setup failures from
                approximately 30% to 2%
                and expanded product
                catalog coverage from
                72% to 95% across
                integrations.
              </p>
              <h4>
                Engineering Journey
              </h4>
              <p>
                Before focusing on
                enterprise software, I
                worked as a Software
                Engineer at Halo Labs
                developing applications
                for laboratory
                automation systems. I
                created full-stack C#
                applications for
                controlling and
                monitoring manufacturing
                equipment, improved
                instrument software,
                developed embedded
                solutions using C/C++,
                and contributed to
                image-processing
                features using OpenCV.
              </p>

              <p>
                My background in
                laboratory operations
                combined with software
                engineering gives me a
                unique perspective on
                building reliable
                applications for
                technical and scientific
                environments.
              </p>
            </div>

            <div className='skills-social'>
              <h4>Current Focus</h4>

              <p>
                Currently exploring
                cloud-native
                architectures,
                containerization, and
                distributed systems.
                Building projects with
                Docker, Kubernetes, and
                modern backend
                technologies to continue
                expanding my expertise
                in scalable software
                systems.
              </p>
              <h4>Skills</h4>
              <div className='skill-selector'>
                <h4>
                  Explore My Skills
                </h4>

                <div className='skill-options'>
                  {Object.keys(
                    skillGroups,
                  ).map((group) => (
                    <label key={group}>
                      <input
                        type='checkbox'
                        checked={selectedSkills.includes(
                          group,
                        )}
                        onChange={() =>
                          toggleSkill(
                            group,
                          )
                        }
                      />

                      {group}
                    </label>
                  ))}
                </div>

                <div className='selected-skills'>
                  <h5>
                    Technologies &
                    Experience
                  </h5>

                  {selectedSkills.length ===
                  0 ? (
                    <p>
                      Select an area
                      above to see
                      related skills.
                    </p>
                  ) : (
                    selectedSkills.map(
                      (group) => (
                        <div
                          key={group}
                        >
                          <h6>
                            {group}
                          </h6>

                          <ul>
                            {skillGroups[
                              group
                            ].map(
                              (
                                skill,
                              ) => (
                                <li
                                  key={
                                    skill
                                  }
                                >
                                  {
                                    skill
                                  }
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      ),
                    )
                  )}
                </div>
              </div>
              <h4>
                Social Media Links
              </h4>
              <div className='social-media-container'>
                {/*Facebook Icon*/}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.facebook.com/kyle.glover.92'
                >
                  <img
                    className='social-media-icons'
                    alt=''
                    src={facebook}
                  ></img>
                </a>

                {/*LinkedIn Icon*/}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/kyle-glover-17041982/'
                >
                  <img
                    className='social-media-icons'
                    alt=''
                    src={linkedin}
                  ></img>
                </a>
                {/*Github Icon*/}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/KyleJGlover'
                >
                  <img
                    className='social-media-icons'
                    alt=''
                    src={github}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
