import React from "react"
import Image from "next/image"
import { Link } from "react-scroll"
import Footer from "./Footer"

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Get in touch!!
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-full ">
            <p className="text-center text-lg mt-4  md:text-2xl">
              Hi there, feel free to explore my portfolio or reach out to me through the contact information provided below to stay updated with my latest work and insights.
              


            </p>
            <br />
            <p className="text-center text-lg  mb-6 md:text-xl">
            I look forward to engaging in meaningful conversations and exploring potential opportunities!connecting with you soon!
            </p>
            <p className="text-center text-lg  mb-6 md:text-xl">
            Connecting with you soon!
            </p>
            <p className="text-center font-bold text-teal-600  text-lg mt-6 md:text-4xl">
                THANK YOU.
            </p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection




