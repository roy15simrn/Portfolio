
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Lets Chit-Chat",
    description:
      "Built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, this chat application enables real-time messaging and seamless communication between users. With secure authentication and a responsive interface, it offers a modern and interactive chat experience.",
    image: "/chitchat.png",
    projectTech:["ReactJs", "MongoDB", "Nodejs","Socket.io"],
    github: "https://github.com/roy15simrn/ChitChat-APP",
    link: "https://letschit-chat.netlify.app/",
  },
  {
    name: "GRub Hub",
    description:
      "With a user-friendly interface and comprehensive search functionality, Discover culinary delights and unleash your inner chef with our recipe finder app that provides a vast collection of recipes and ingredients for various cuisines. ",
    image: "/grubhub.png",
    projectTech:["HTML","CSS","ReactJs", "Spoonacular Api"],
    github: "https://github.com/roy15simrn/food-plaza",
    link: "https://foodplaza.netlify.app/",
  },
  {
    name: "ExpresSO",
    description:
      "Crafted with passion and creativity, our live art and literary website for NIT PATNA, serves as an engaging platform that celebrates the diverse talents of our college community. ",
    image: "/expresso.png",
    projectTech:["HTML","CSS","JavaScript"],
    github: "https://github.com/Expresso-NITP/Expresso_Official_Website",
    link: "https://expresso-nitp.github.io/Expresso_Official_Website/",
  },
  {
    name: "Algo Path Visualizer",
    description:
      "Algorithm path visualizer that brings Data Structures and Algorithms (DSA) to life. Through captivating visualizations and interactive exploration, delve into the inner workings of DSA concepts, unravel their efficiency, and gain valuable insights into algorithmic problem-solving. ",
    image: "/algopath.png",
    projectTech:["HTML","CSS","JavaScript",],
    github: "https://github.com/roy15simrn/Algo--visualize",
    link: "https://algopath-visualizer.netlify.app/",
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">

                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>

                  <div className="mt-8 md:w-1/2">
                   <div className="items-center justify-center flex">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                   </div>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    <ul className="flex flex-row  items-center justify-center space-x-6">
                    {project.projectTech.map((tech) => (
                      <li className="inline-block text-teal-500 dark:text-neutral-100"
                      key={tech}>
                        {tech}
                      </li>
                    ))}
                   </ul>
                   
                    <div className="flex flex-row mt-4 items-center justify-center  space-x-6   ">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>

                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
