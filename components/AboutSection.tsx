


import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js " },
  { skill: "MongoDb" },
  { skill: " MySql" },
  { skill: "Git" },
  { skill: "GitHub" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-2/3">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I am  Simran, a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> person.
            </p>
            <br />
            <p>
              I graduated from NIT Patna with a background in Electronics and Communication  Engineering.
            </p>
            <br />
            <p>
             During my time at NIT Patna,  I have worked on various projects, both individually and collaboratively, where I gained experience in problem-solving, teamwork, and project management
            </p>
            <br />

            <p>
            I constantly strive to expand my knowledge and stay updated with the latest web technologies and programming trends. 
            In addition to web development, I have a keen interest in data structures and algorithms.
            I love diving into complex problem-solving challenges and finding efficient solutions.
             
            </p>
            <br /> 

            <p>
            Beyond coding, I indulge in hobbies that help me maintain a well-rounded perspective.
            I like participating in outdoor activities like running, jogging and cycling. 
            </p>
            <br />
            <p>
            I am excited to see where my career takes me and am always open to new opportunities. 🙂 </p>
          </div>
          <div className="text-center md:w-1/3 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
