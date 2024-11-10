"use client";

import React from 'react'
import { motion } from 'framer-motion'; 
import Card from '@/components/Cards';

const data = [
   {
      id: 0,
      title: "Countdown Timer",
      desc: "A React & TypeScript based app for managing and Organization",
      img: "/project_1 .jpeg",
      tags: [
             { name: "Live Demo", href: "https://30-days-of-30-nextjs-projects-7nmf.vercel.app/" },
             { name: "GitHub", href: "https://github.com/aliza-moin18/30-Days-of-30-Nextjs-Projects../tree/main/countdown-timer" }
      ],
   },

   {
      id: 1,
      title: "Weather Widget",
      desc: "A React & TypeScript based app for managing and Organization",
      img: "/project_2.jpeg",
      tags: [
         { name: "Live Demo", href: "" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/30-Days-of-30-Nextjs-Projects./tree/main/weather-widget" }
      ],
   },

   {
      id: 2,
      title: "Static Interactive Resume",
      desc: "A React & TypeScript based app for managing and Organization",
      img: "/project_3.jpeg",
      tags: [
         { name: "Live Demo", href: "https://hackathon-milestone-based-interactive-resume-builder-mqlh.vercel.app/" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/Hackathon-Milestone-Based-Interactive-Resume-Builder./tree/main/Milestone%201" }
      ],
   },

   {
      id: 3,
      title: "Dynamic Resume Builder",
      desc: "A React & TypeScript based app for managing and Organization",
      img: "/project_4.jpeg",
      tags: [
         { name: "Live Demo", href: "https://hackathon-milestone-3-eqph.vercel.app/" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/Hackathon-Milestone-Based-Interactive-Resume-Builder./tree/main/Milestone%203" }
      ],
   },

   {
      id: 4,
      title: "Cards",
      desc: "A React & TypeScript based app for managing and Organization",
      img: "/project_5.jpg",
      tags: [
         { name: "Live Demo", href: "" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/HTML-and-CSS-Assignments./tree/main/Chap%20%23%2010" }
      ],
   },

   {
      id: 5,
      title: "Youtube Clone",
      desc: "A React & TypeScript based app for managing and Organization",
      img: "/project_6.jpg",
      tags: [
         { name: "Live Demo", href: "https://youtube-clone-1zed.vercel.app/" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/Youtube-Clone." }
      ],
   },
]

const Projects = () => {
   return (
     <div id="projects" className='container pt-12'>
       <h2 className="text-6xl font-bold bg-gradient-to-r from-[#993ca8] via-[#ad40bb] to-[#f6f6f6] text-transparent bg-clip-text mb-10 mt-[-10px] flex items-center justify-center"> 
         My Recent Works
       </h2>
      
       <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center rounded-[20px]'>
          {data.map((el) => (
            <motion.div
              key={el.id}
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}   
              transition={{ delay: 0.1 * el.id, duration: 0.6, ease: "easeOut" }} 
            >
            <Card 
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
              </motion.div>
          ))}
       </div>
     </div>
   );
 };
 
 export default Projects;