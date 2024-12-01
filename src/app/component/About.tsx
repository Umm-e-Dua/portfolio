import Image from 'next/image'
import React from 'react'
import  image  from '../../public/assests/about.jpg'

const About = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-slate-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto w-[450px] h-[400px]"
        alt="hero"
        src={ image}
        width={400}
        height={400}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me
        
      </h1>
      <p className="mb-8 leading-relaxed">
      I am dedicated to delivering high-quality results and ensuring that every project I undertake is completed to the highest standards. With a focus on attention to detail and a commitment to excellence, I take pride in consistently finishing each project on time, exceeding expectations, and driving success. My passion for problem-solving and delivering effective solutions fuels my drive to ensure every project reaches its full potential
      </p>
      <div className="flex justify-center">
        <a href={""}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Read More
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About