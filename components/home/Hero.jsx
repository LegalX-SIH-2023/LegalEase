"use client"
import "@/styles/globals.css";
import Navbar from "../common/Navbar"
import React, { useState } from 'react'
import heroImg2 from '../assets/heroImg2.png'
import Image from "next/image"
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <>
            <div className="bg-primary-lightGray h-[100vh] rounded-bl-[100q]">
            <Navbar />
                <section className="flex justify-around items-center xl:mt-16">
                    <div className="flex flex-col items-start gap-4">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                cursor: '<span class="text-primary-navy font-extralight text-5xl mb-8">|</span>',
                                // delay: 260,
                                deleteSpeed: 'natural',
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('<span style="color: #D47C42; font-size:4em; font-weight:500;">Earn.</span>').pauseFor(500).deleteAll()
                                    .typeString('<span style="color: #D47C42; font-size:4em; font-weight:500;">Consult.</span>').pauseFor(500).deleteAll()
                                    .typeString('<span style="color:#D47C42; font-size:4em; font-weight:500;">Automate.</span>').pauseFor(500).deleteAll()
                                    .typeString('<span style="color: #D47C42; font-size:4em; font-weight:500;">Learn.</span>').pauseFor(500).deleteAll()
                                    .start();
                            }}
                        />
                        <p className="text-xl text-primary-mediumGray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Obcaecati odio suscipit in hic exercitationem accusantium  <br /> dolorem iste itaque, animi, asperiores, ipsum facilis aperiam.
                        </p>
                        <button className="p-2 bg-primary-navy rounded-xl px-4 text-xl font-semibold text-white hover:shadow-xl">Explore</button>
                    </div>
                    <div className="z-20">
                        <Image src={heroImg2} width={550} height={550} alt="heroImg" className="hover:scale-105 duration-500" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero