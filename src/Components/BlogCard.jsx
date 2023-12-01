import React from 'react'

// Blog component Card here 

function BlogCard( {image,name,title}) {
  return (
<>


<div className='flex flex-col lg:w-[31%] md:w-[48%] w-[100%]  '>
    <div>
        <img src={image}
        alt=""
        className='object-cover rounded-xl hover:scale-105 transition-all duration-500'
        />
    </div>
    <div className='text-center '>
<p className='text-gray-500 text-[11px] mt-3'>{name}</p>
<p className='text-[20px] hover:text-[#3BB77E] duration-300 text-gray-600 mt-3 leading-6 px-4' >{title}</p>
    </div>
<div className='flex justify-center text-gray-500 text-[9px] mt-2 gap-3 '>
    <p>25 April 2022</p>
    <p>126k Views</p>
    <p>4 mins read</p>
</div>
</div>

</>

    )
}

export default BlogCard