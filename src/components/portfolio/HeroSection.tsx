 import { motion } from 'framer-motion';
 import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
 import portraitImage from '@/assets/portrait-placeholder.jpg';
 
 export const HeroSection = () => {
   const scrollToNext = () => {
     const element = document.getElementById('education');
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   };
 
   return (
     <section id="home" className="section-viewport snap-section flex flex-col">
       {/* Top Section */}
       <div className="flex justify-between items-start p-8 md:p-12">
         {/* Name & Title */}
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
         >
           <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
             Luis Solis
           </h1>
           <p className="text-sm md:text-base font-light text-muted-foreground mt-1">
             Product Manager & AI
           </p>
         </motion.div>
       </div>
 
       {/* Center Content */}
       <div className="flex-1 flex items-center justify-center px-8">
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="text-xl md:text-2xl lg:text-3xl font-light text-foreground text-center max-w-2xl leading-relaxed"
         >
           I build tech products with purpose—<br className="hidden md:block" />
           and sometimes with a soundtrack.
         </motion.p>
       </div>
 
       {/* Bottom Section */}
       <div className="flex justify-between items-end p-8 md:p-12">
         {/* Contact Info */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="flex flex-col gap-3"
         >
           <a
             href="mailto:lsolisoc@gmail.com"
             className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
           >
             <Mail className="w-4 h-4" />
             <span className="font-light">lsolisoc@gmail.com</span>
           </a>
           <a
             href="https://www.linkedin.com/in/luiscarlossolis/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
           >
             <Linkedin className="w-4 h-4" />
             <span className="font-light">@luiscarlossolis</span>
           </a>
           <a
             href="https://github.com/lsolisoc"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
           >
             <Github className="w-4 h-4" />
             <span className="font-light">@lsolisoc</span>
           </a>
         </motion.div>
 
         {/* Portrait */}
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="hidden md:block"
         >
           <img
             src={portraitImage}
             alt="Luis Solis"
             className="w-48 lg:w-64 h-auto object-cover grayscale contrast-125"
           />
         </motion.div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.button
         onClick={scrollToNext}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.8 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
       >
         <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
       </motion.button>
     </section>
   );
 };