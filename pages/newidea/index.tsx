import React from 'react'

const newidea = () => {
   const techs = [
    {
      id: 1,
      href: "/",
      title: "Linux Setup w. WSL2",
      style: "shadow-white",
    },
    {
      id: 2,
      href: "/",
      title: "Dalai Lama - Our only home summary",
      style: "shadow-white",
    },
    {
      id: 3,
      href: "/",
      title: "Climate change and its consequences",
      style: "shadow-white",
    },
    {
      id: 4,
      href: "/",
      title: "Simon Sinek - Start with why",
      style: "shadow-white",
    }
   
  ];
  
  return (
    <div>
      <div>
        <h1 className='text-5xl sm:text-7xl text-center mt-16 mx-12 '>A collection of ideas</h1>
        <p className="text-center mt-12 text-2xl sm:px-32 mb-24 leading-[50px]  mx-8 sm:mx-32 px-8 py-8 shadow-md shadow-black">This is a collection of ideas for upcoming blogposts. Some might make it and become 
          a full post while others stay as ideas. I just want to share with you what I am working on
          instead of only presenting the finished version which is what I usually see.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16  text-2xl px-16 ">
         {techs.map(({ id, href, title, style }) => (
            <div
              key={id}
              
              className={"text-center rounded-lg  sm:mx-8 px-4 py-8 text-white bg-black  hover:text-black hover:bg-white "}
            >
               <a href={href} target="_blank"
              rel="noreferrer"
              className='flex justify-center items-center'
              ></a>
              <p className="mt-4 text-2xl">{title}</p>
            </div>
          ))}
        

      </div>
    </div>
  )

}


export default newidea