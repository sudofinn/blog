import React from 'react'

const index = () => {
  const key = process.env.getFormKey


  return (
    <div
      
      className="w-full h-screen bg-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8  ">
          <p data-aos="fade-up" className="text-7xl font-bold text-center mt-4 mb-4 ">
            Contact
          </p>
          <p  data-aos="fade-up" className="py-6 text-2xl text-center ">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">

          <form data-aos="fade-up"
              action= {process.env.NEXT_PUBLIC_KEY}
              method="POST"
            
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-black bg-white hover:bg-black hover:text-white px-8 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let us talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index