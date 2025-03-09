import React from 'react'

const Importance = () => {
    return (
        <div className='flex justify-center items-center my-8'>
            <div className='flex w-[90%]'>
                {/* Left */}
                <div className='bg-[#f9f9f9] dark:bg-gray-900 w-1/2 flex justify-center items-center'>
                    <img src="src/assets/girl.png" alt="Dumbbells" className='h-[80%]'/>
                </div>
                {/* Right */}
                <div className='bg-[#f9f9f9] dark:bg-gray-900 w-1/2 h-[calc(100vh-88px)] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div>
                            <h1 className='text-[4rem] font-semibold'>The Importance To</h1>
                            <h1 className='text-[4rem] font-semibold'>Take Care Of Yourself</h1>
                        </div>
                        <div>
                            <p className='text-[20px]'>It is a long established fact that a reader will be by readable content of</p>
                            <p className='text-[20px]'>a page when are the best product.</p>
                        </div>
                        <div>
                            <button className='bg-[#fb923c] text-white px-6 py-4 rounded-lg cursor-pointer hover:bg-[#fda63f]'>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Importance