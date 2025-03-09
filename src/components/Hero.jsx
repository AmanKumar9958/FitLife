import React from 'react'

const Hero = () => {
    return (
        <div className='flex'>
            {/* Left */}
            <div className='bg-[#f9f6f1] dark:bg-gray-900 w-1/2 h-[calc(100vh-88px)] flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div>
                        <h1 className='text-[4rem] font-semibold'>Gym Gives you the</h1>
                        <h1 className='text-[4rem] font-semibold'>Perfect <span className='text-[#fb923c] font-bold'>Health</span></h1>
                    </div>
                    <div>
                        <p className='text-[20px]'>It is a long established fact that a reader will be by readable content of</p>
                        <p className='text-[20px]'>a page when are the best product.</p>
                    </div>
                    <div>
                        <button className='bg-[#fb923c] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#fda63f]'>Get Started</button>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className='bg-white dark:bg-gray-900 w-1/2 flex justify-center items-center'>
                <img src="src/assets/dumbbell.png" alt="Dumbbells" />
            </div>
        </div>
    )
}

export default Hero