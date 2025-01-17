import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";


const Contact = () => {
  return (
    <div >
        <section className="text-black body-font relative bg-slate-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        feel free to contact
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Send Message
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a  href='rimshaaslam191@gmail.com' className="text-blue-500">rimshaaslam191@gmail.com</a>
          <p className="leading-normal my-5">
            connect
            <br />
          </p>
        
    
   

      <div className="inline-flex text-blue-600">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ummedua-aslam" target="_blank" rel="noopener noreferrer" className="ml-4 text-black">
          <FaLinkedin />
        </a>
  
        {/* GitHub */}
        <a href="https://github.com/Umm-e-Dua" target="_blank" rel="noopener noreferrer" className="ml-4 text-black">
          <FaGithub />
        </a>
  
        {/* Vercel */}
        <a href="https://vercel.com/ummedua-aslams-projects" target="_blank" rel="noopener noreferrer" className="ml-4 text-black">
        <IoLogoVercel />
        </a>
      </div>
    
     
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}




export default Contact