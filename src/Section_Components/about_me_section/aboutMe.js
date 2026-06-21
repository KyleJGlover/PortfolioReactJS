import facebook from "../../images/facebook_icon.png"
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import { useState } from "react"
import "./aboutMe.css"

function Main() {
  const skillGroups = {
    "Backend Development": [
      {
        name: "REST APIs",
        source: "Pet Food Express",
        technologies: "C#, .NET",
        description:
          "Designed and deployed RESTful APIs for internal applications and third-party integrations hosted on Azure App Services.",
      },
      {
        name: "Microservices",
        source: "Pet Food Express",
        technologies: "C#, .NET",
        description:
          "Built cloud-native services supporting authentication, business workflows, and partner integrations.",
      },
      {
        name: "Authentication & Authorization",
        source: "Pet Food Express",
        technologies: "C#, .NET",
        description:
          "Implemented Microsoft Entra ID authentication and role-based access control for internal applications.",
      },
    ],

    "Cloud & DevOps": [
      {
        name: "Azure App Services",
        source: "Pet Food Express",
        technologies: "Azure, C#, .NET",
        description:
          "Hosted and maintained cloud-native APIs and application services supporting internal tools and third-party integrations.",
      },
      {
        name: "Microsoft Entra ID",
        source: "Pet Food Express",
        technologies: "Azure, C#, .NET",
        description:
          "Implemented cloud-based authentication and role-based authorization for internal applications.",
      },
      {
        name: "Azure DevOps",
        source: "Pet Food Express",
        technologies: "Microsoft, Git",
        description:
          "Developed CI/CD pipelines to automate deployments, versioning, and rollback procedures for APIs and application services.",
      },
      {
        name: "Cloud Integrations",
        source: "Pet Food Express",
        technologies:
          "Azure, REST APIs, SFTP",
        description:
          "Built and maintained integrations connecting internal systems with Amazon, DoorDash, Instacart, and other external partners.",
      },
      {
        name: "Docker",
        source: "Pet Food Express",
        technologies: "Docker",
        description:
          "Created containerized development environments and explored microservice-based application architectures.",
      },
      {
        name: "Kubernetes",
        source: "Pet Food Express",
        technologies:
          "Kubernetes, Docker",
        description:
          "Implemented container orchestration concepts including service deployment, scaling, and workload management.",
      },
    ],
    "Frontend Development": [
      {
        name: "React Applications",
        source: "Pet Food Express",
        technologies: "JavaScript, JSX",
        description:
          "Developed and maintained headless e-commerce experiences and reusable UI components.",
      },
      {
        name: "BigCommerce Stencil Themes",
        source: "Pet Food Express",
        technologies:
          "JavaScript, Handlebars, HTML, SCSS",
        description:
          "Customized storefront templates and customer-facing shopping experiences.",
      },
      {
        name: "Storefront Integrations",
        source: "Pet Food Express",
        technologies: "JavaScript",
        description:
          "Implemented frontend integrations with internal and third-party services.",
      },
      {
        name: "WinForms",
        source: "Halo Labs",
        technologies: "C#, .NET",
        description:
          "Full-stack manufacturing desktop applications",
      },
    ],
    "Data Engineering": [
      {
        name: "Azure Data Factory Pipelines",
        source: "Pet Food Express",
        technologies: "SQL, JSON",
        description:
          "Developed ETL pipelines automating data exchange with Amazon, DoorDash, Instacart, and other retail partners.",
      },
      {
        name: "Microsoft Fabric Notebooks",
        source: "Pet Food Express",
        technologies:
          "Python, Pandas, PySpark",
        description:
          "Built notebook-based ETL processes to transform operational data and load it into Dataverse.",
      },
      {
        name: "Dataverse Integration",
        source: "Pet Food Express",
        technologies: "Python, SQL",
        description:
          "Supported business applications through automated ingestion and transformation of enterprise data.",
      },
    ],

    "Embedded Systems": [
      {
        name: "Firmware Development",
        source: "Halo Labs",
        technologies: "C",
        description:
          "Enhanced firmware for laboratory instrumentation and implemented hardware communication features.",
      },
      {
        name: "Instrument Automation",
        source: "Halo Labs",
        technologies: "C++",
        description:
          "Developed software for automated laboratory systems and instrument control.",
      },
      {
        name: "Computer Vision",
        source: "Halo Labs",
        technologies: "C++, OpenCV",
        description:
          "Implemented image-processing features to improve data quality and analytical accuracy.",
      },
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
                          <hr></hr>
                          <h5>
                            {group}
                          </h5>

                          {skillGroups[
                            group
                          ].map(
                            (skill) => (
                              <div
                                className='skill-card'
                                key={
                                  skill.name +
                                  skill.source
                                }
                              >
                                <p>
                                  {
                                    skill.name
                                  }
                                </p>

                                <p>
                                  <strong>
                                    Used
                                    at:
                                  </strong>{" "}
                                  {
                                    skill.source
                                  }
                                </p>
                                <p>
                                  <strong>
                                    Technologies
                                    Used
                                  </strong>{" "}
                                  {
                                    skill.technologies
                                  }
                                </p>

                                <p>
                                  {
                                    skill.description
                                  }
                                </p>
                              </div>
                            ),
                          )}
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
