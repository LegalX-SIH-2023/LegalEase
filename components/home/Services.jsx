import React from 'react'
import { BsChatDots } from 'react-icons/bs'
import { SiFuturelearn } from 'react-icons/si'
import { MdOutlineAutoAwesome } from 'react-icons/md'
import { GiTakeMyMoney } from 'react-icons/gi'

const Services = () => {
    return (
        <>
            <p className='text-4xl font-semibold text-[#D47C42] text-center m-2 mt-10 mb-12'>Our Services</p>
            <section className='flex md:flex-row flex-col gap-4 justify-center items-center'>
                {/* services card */}
                <div className='flex flex-col gap-4 shadow-xl rounded-2xl p-4 py-8 justify-center items-center hover:scale-105 duration-500'>
                    <div className='flex justify-center items-center w-[75px] h-[75px] rounded-full bg-primary-navy p-2'>
                        <GiTakeMyMoney className='text-3xl text-white' />
                    </div>
                    <div className="">
                        <p className='text-xl text-[#D47C42] font-semibold text-center'>Earn</p>
                        <p className='text-center mt-1'>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. <br /> Doloremquae animi distinctio?</p>
                    </div>
                </div>
                {/* services card */}
                <div className='flex flex-col gap-4 shadow-xl rounded-2xl p-4 py-8 justify-center items-center hover:scale-105 duration-500'>
                    <div className='flex justify-center items-center w-[75px] h-[75px] rounded-full bg-primary-navy p-2'>
                        <BsChatDots className='text-3xl text-white' />
                    </div>
                    <div className="">
                        <p className='text-xl text-[#D47C42] font-semibold text-center'>Consult</p>
                        <p className='text-center mt-1'>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. <br /> Doloremquae animi distinctio?</p>
                    </div>
                </div>
                {/* services card */}
                <div className='flex flex-col gap-4 shadow-xl rounded-2xl p-4 py-8 justify-center items-center hover:scale-105 duration-500'>
                    <div className='flex justify-center items-center w-[75px] h-[75px] rounded-full bg-primary-navy p-2'>
                        <MdOutlineAutoAwesome className='text-3xl text-white' />
                    </div>
                    <div className="">
                        <p className='text-xl text-[#D47C42] font-semibold text-center'>Automate</p>
                        <p className='text-center mt-1'>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. <br /> Doloremquae animi distinctio?</p>
                    </div>
                </div>
                {/* services card */}
                <div className='flex flex-col gap-4 shadow-xl rounded-2xl p-4 py-8 justify-center items-center hover:scale-105 duration-500'>
                    <div className='flex justify-center items-center w-[75px] h-[75px] rounded-full bg-primary-navy p-2'>
                        <SiFuturelearn className='text-3xl text-white' />
                    </div>
                    <div className="">
                        <p className='text-xl text-[#D47C42] font-semibold text-center'>Learn</p>
                        <p className='text-center mt-1'>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. <br /> Doloremquae animi distinctio?</p>
                    </div>
                </div>
            </section>

            {/* mailing */}
            <section className='flex md:flex-row flex-col items-center justify-center mt-20 mdf:gap-0 gap-2'>
                <label htmlFor="Join Us:" className='text-4xl text-[#D47C42] font-semibold mr-4'>Join Us:</label>
                <div>
                    <input type="email" placeholder='Email..' className='rounded-xl bg-primary-lightGray md:w-[300px] w-[200px] m-1 p-2' />
                    <button className='p-2 bg-primary-navy rounded-xl px-4 text-xl font-semibold text-white hover:shadow-xl ml-1'>Subscribe</button>
                </div>
            </section>
        </>
    )
}

export default Services