"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logoAH.png"
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence , motion } from "framer-motion";



const navLinks = [
    { label: "Procédé", href: "#features" },  // ou tout autre nom cohérent
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
];



export default function Navbar() {

    const[isOpen,setIsOpen]=useState(false);

    return <> <section className="py-4 lg:py-8 fixed w-full sticky top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[30px] md: rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2 items-center">
                            <div className="flex items-center gap-2"> {/* Changed to flex and added gap */}
                                <a href="#hero">
                                    <Image 
                                        src={logoImage} 
                                        alt="flowAi" 
                                        className="w-11 h-11" // Additional sizing control
                                    />
                                </a>
                                <a href="#hero">
                                   <h1 className="font-bold text-lg">AHDIGITAL</h1> {/* Removed padding and adjusted text size */}
                                </a>
                                    
                                
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex  gap-6 font-meduim">
                                    {navLinks.map(link=>(
                                        <a href={link.href} key={link.label}>{link.label}</a>

                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="feather feather-menu md:hidden"
                                    onClick={()=>setIsOpen(!isOpen)}
                                    >
                                    <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition",isOpen && 'opacity-0')}></line>
                                    <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')}></line>
                                    <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition",isOpen && '-rotate-45 translate-y-1')}></line>
                                </svg>
                                
                                
                                

                            </div>

                        
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div 
                                    initial={{height :0}}
                                    animate={{height:"auto"}}
                                    exit={{height:0}}
                                className="overflow-hidden">
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map(link =>(
                                            <a href={link.href} key={link.label} className="">
                                                {link.label}
                                            </a>
                                        ))}
                                       
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </section>
            
        </>  
        
}
