"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Button from "./Button"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={365}
            height={345}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 sm:w-4/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi there, I&#39;m Simran!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a Passionate   {" "}
            <span className="font-semibold text-teal-600">
            web developer{" "}
            </span>
              blending technical expertise with creative problem-solving
          </p>

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A {" "}
            <span className="font-semibold text-teal-600">
             determined{" "}
            </span>
            individual with a steadfast commitment to achieve great result.
          </p>
        

    

            <div className="items-center justify-center flex text-neutral-100 items-center font-semibold px-2 py-2  md:mt-2 md:w-3/5   sm:w-3/5 mx-auto bg-teal-600 rounded shadow hover:bg-teal-700">

             <Button text="Resume" link="http://localhost:3000/resume.pdf" />
            </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
