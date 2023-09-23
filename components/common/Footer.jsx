import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
    <section className="flex flex-wrap bg-primary-lightGray justify-evenly gap-8 rounded-tr-[100q] pb-8 mt-20">
      {/* first */}
      <div className='font-bold text-xl md:text-3xl flex items-center flex-col gap-4 pt-8'>
        <p><span className='text-[#D47C42]'>Legal</span><span className='text-primary-navy'>Connect</span></p>
        <div className='flex gap-2'>
          <AiOutlineTwitter />
          <BiLogoFacebookCircle />
          <AiFillInstagram />
        </div>
      </div>

      {/* second */}
      <div className='font-semibold flex items-center flex-col gap-4 pt-8'>
        <p className='text-xl md:text-2xl text-primary-navy -ml-8 md:-ml-5'>Solution</p>
        <div className='flex gap-2 flex-col'>
          <a>Talk to Lawyer</a>
          <a>Document </a>
          <a>Learn</a>
        </div>
      </div>

      {/* third */}
      <div className='font-semibold flex items-center flex-col gap-4 pt-8'>
        <p className='text-xl md:text-2xl text-primary-navy ml-[-58px] md:-ml-10'>Support</p>
        <div className='flex gap-2 flex-col'>
          <a className='flex gap-1 items-center'><BiPhoneCall /> Talk to Lawyer</a>
          <a className='flex gap-1 items-center'><FiMail /> Mail</a>
        </div>
      </div>

      {/* fourth */}
      <div className='font-semibold flex items-center flex-col gap-4 pt-8'>
        <p className='text-xl md:text-2xl text-primary-navy ml-[-58px] md:-ml-10'>Legal</p>
        <div className='flex gap-2 flex-col'>
          <a>About Us</a>
          <a>Privacy Policy</a>
          <a>Terms of use </a>
        </div>
      </div>
    </section>
    <p className='text-lg text-center pt-6 pb-2 bg-primary-lightGray font-semibold'><span className='text-[#D47C42]'>Legal</span><span className='text-primary-navy'>Connect</span> - 2023 All Rights Reserved</p>
    </>
  )
}

export default Footer