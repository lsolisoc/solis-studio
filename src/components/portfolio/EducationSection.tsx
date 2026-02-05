 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { X } from 'lucide-react';
 
 interface EducationItem {
   id: string;
   institution: string;
   program: string;
   subtitle: string;
   details: string[];
 }
 
 const educationData: EducationItem[] = [
   {
     id: 'tec',
     institution: 'Tec de Monterrey',
     program: 'Sustainable Development Engineering',
     subtitle: 'Specialized in sustainable technologies, product development, and entrepreneurship.',
     details: [
       'Led capstone projects in renewable energy systems design',
       'Developed sustainable product prototypes with circular economy principles',
       'Entrepreneurship program with focus on cleantech ventures',
       'Cross-functional team leadership in innovation challenges',
     ],
   },
   {
     id: 'thi',
     institution: 'Technische Hochschule Ingolstadt',
     program: 'Renewable Energies',
     subtitle: 'Focused on technical project management and led two innovation projects in renewable energies.',
     details: [
       'Technical project management for solar and wind energy systems',
       'Innovation project: Next-gen battery storage solutions',
       'Innovation project: Smart grid integration for rural communities',
       'German-engineering methodologies for precision manufacturing',
     ],
   },
   {
     id: 'cmu',
     institution: 'Carnegie Mellon University',
     program: 'M.S. Engineering & Technology Innovation Management',
     subtitle: 'Advanced studies in technology innovation, product strategy, and AI applications.',
     details: [
       'Product management and innovation strategy frameworks',
       'Machine learning applications in product development',
       'Cross-disciplinary collaboration with design and business schools',
       'Capstone: AI-driven product roadmap optimization',
     ],
   },
 ];
 
 export const EducationSection = () => {
   const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);
 
   return (
     <section id="education" className="section-viewport snap-section bg-education/20 flex flex-col p-8 md:p-12">
       {/* Header */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
       >
         <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Education</h2>
         <p className="text-muted-foreground font-light mt-2">
           From renewables and music to AI-driven innovation.
         </p>
       </motion.div>
 
       {/* Education Blocks */}
       <div className="flex-1 flex items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
           {educationData.map((item, index) => (
             <motion.button
               key={item.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               onClick={() => setSelectedItem(item)}
               className="education-block p-6 md:p-8 text-left h-full min-h-[200px] flex flex-col"
             >
               <p className="text-sm text-muted-foreground font-light mb-2">{item.institution}</p>
               <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">{item.program}</h3>
               <p className="text-sm text-muted-foreground font-light flex-1">{item.subtitle}</p>
               <p className="text-xs text-muted-foreground/60 mt-4 italic">Click to learn more</p>
             </motion.button>
           ))}
         </div>
       </div>
 
       {/* Modal */}
       <AnimatePresence>
         {selectedItem && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
             onClick={() => setSelectedItem(null)}
           >
             <motion.div
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.95, opacity: 0 }}
               onClick={(e) => e.stopPropagation()}
               className="bg-card border border-border rounded-lg p-8 max-w-lg w-full relative"
             >
               <button
                 onClick={() => setSelectedItem(null)}
                 className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
               >
                 <X className="w-5 h-5" />
               </button>
               <p className="text-sm text-muted-foreground font-light mb-2">{selectedItem.institution}</p>
               <h3 className="text-xl font-medium text-foreground mb-3">{selectedItem.program}</h3>
               <p className="text-sm text-muted-foreground font-light mb-6">{selectedItem.subtitle}</p>
               <ul className="space-y-3">
                 {selectedItem.details.map((detail, index) => (
                   <li key={index} className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-education mt-2 flex-shrink-0" />
                     <span className="text-sm text-foreground/80 font-light">{detail}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </section>
   );
 };