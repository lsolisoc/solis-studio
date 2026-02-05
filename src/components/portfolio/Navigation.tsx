 import { useState, useEffect } from 'react';
 import { motion } from 'framer-motion';
 
 const sections = [
   { id: 'home', label: 'Home' },
   { id: 'education', label: 'Education' },
   { id: 'projects', label: 'Projects' },
   { id: 'music', label: 'Music/Arts' },
 ];
 
 export const Navigation = () => {
   const [activeSection, setActiveSection] = useState('home');
 
   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition = window.scrollY + window.innerHeight / 3;
       
       for (const section of sections) {
         const element = document.getElementById(section.id);
         if (element) {
           const { offsetTop, offsetHeight } = element;
           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
             setActiveSection(section.id);
             break;
           }
         }
       }
     };
 
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   const scrollToSection = (id: string) => {
     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   };
 
   return (
     <nav className="fixed top-8 right-8 z-50 flex flex-col items-end gap-4">
       {sections.map((section) => (
         <motion.button
           key={section.id}
           onClick={() => scrollToSection(section.id)}
           className="flex items-center gap-3 group"
           whileHover={{ x: -4 }}
           transition={{ duration: 0.2 }}
         >
           <span
             className={`text-xs font-light tracking-wider uppercase transition-all duration-300 ${
               activeSection === section.id
                 ? 'text-foreground opacity-100'
                 : 'text-muted-foreground opacity-0 group-hover:opacity-100'
             }`}
           >
             {section.label}
           </span>
           <div
             className={`nav-dot ${
               activeSection === section.id ? 'nav-dot-active' : 'nav-dot-inactive'
             }`}
           />
         </motion.button>
       ))}
     </nav>
   );
 };