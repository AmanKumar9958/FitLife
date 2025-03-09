import React from 'react'
import { LuDumbbell } from "react-icons/lu";

const EquipCard = () => {
    const data = [
        {
            logo: <LuDumbbell />,
            title: "Yoga Equipments",
            description: "It is a long established fact that a reader readable."
        },
        {
            logo: <LuDumbbell />,
            title: "Muscle Equipments",
            description: "It is a long established fact that a reader readable."
        },
        {
            logo: <LuDumbbell />,
            title: "Gym Wear",
            description: "It is a long established fact that a reader readable."
        },
    ]

    return (
        <div className='h-[40vh] w-full'>
            <div className='pt-5 flex gap-4 flex-col'>
                <h1 className='text-5xl font-bold'>What we offer for you</h1>
                <p className='text-3xl'>It is a long established fact that a reader readable.</p>
            </div>
            {/* Offer */}
            <div className='pt-7 w-full flex justify-center'>
                <div className='flex gap-6 flex-wrap justify-center'>
                    {data.map((eachData, index) => (
                        <div key={index} className="w-[20vw] bg-gray-200 text-black p-4 py-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="text-black text-4xl mb-2">{eachData.logo}</div>
                            <h2 className="text-black text-lg font-semibold">{eachData.title}</h2>
                            <p className="text-black text-sm text-gray-800">{eachData.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EquipCard;