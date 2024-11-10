"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';


const PageTransition = ({ children }: { children: ReactNode }) => {
   const pathname = usePathname();
  return (
   <AnimatePresence>
    <div key={pathname}>
       <motion.div
       initial={{ opacity: 1 }}
       animate={{
        opacity: 0,
        transition: { delay: 0 , duration: 0.2 , ease: 'easeInOut' }
       }}
       className= "screen w-screen fixed bg-white bg-opacity-20 backdrop-blur-lg top-0 pointer-events-none"
       />

    {children}   
    </div>
   </AnimatePresence>
  )
};

export default PageTransition;