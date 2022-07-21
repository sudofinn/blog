import React from 'react'

const newidea = () => {
  return (
    <div>
      <div>
        <h1 className='text-5xl sm:text-7xl text-center mt-16 mx-12 '>A collection of ideas</h1>
        <p className="text-center mt-12 text-2xl sm:px-32 mb-24 leading-[50px]  mx-16 sm:mx-32 px-8 py-8 shadow-md shadow-black">This is a collection of ideas for upcoming blogposts. Some might make it and become 
          a full post while others stay as ideas. I just want to share with you what I am working on
          instead of only presenting the finished version which is what I usually see.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16  text-2xl px-24 ">
        <p className=" text-center mx-2 sm:mx-8 px-4 py-8 text-white bg-black  hover:text-black hover:bg-white
        shadow-md shadow-black rounded-lg 
        duration-500 hover:scale-110">Linux Windows setup w. WSL2</p>

        <p className=" text-center mx-2  sm:mx-8 px-4 py-8 text-white bg-black  hover:text-black hover:bg-white
        shadow-md shadow-black rounded-lg 
        duration-500 hover:scale-110">Dalai Lama - Our only home summary</p>

        <p className=" text-center mx-2 sm:mx-8 px-4 py-8 text-white bg-black  hover:text-black hover:bg-white
        shadow-md shadow-black rounded-lg 
        duration-500 hover:scale-110">Climate change and its consequences</p>

      </div>
    </div>
  )
}

export default newidea