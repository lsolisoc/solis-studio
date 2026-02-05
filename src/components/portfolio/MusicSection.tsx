 import { motion } from 'framer-motion';
 import { Play, ExternalLink } from 'lucide-react';
 
 interface MusicItem {
   id: string;
   type: 'video' | 'image' | 'project';
   title: string;
   caption?: string;
   aspectRatio: 'square' | 'portrait' | 'landscape';
 }
 
 const musicItems: MusicItem[] = [
   { id: '1', type: 'project', title: 'Gesture-Controlled Pianist', caption: 'AI music performance', aspectRatio: 'landscape' },
   { id: '2', type: 'image', title: 'Live Set – Pittsburgh', aspectRatio: 'portrait' },
   { id: '3', type: 'video', title: 'Studio Session', aspectRatio: 'square' },
   { id: '4', type: 'image', title: 'Synthesizer Experiments', aspectRatio: 'landscape' },
   { id: '5', type: 'project', title: 'Chopin AI Demo', caption: 'Real-time gesture music', aspectRatio: 'square' },
   { id: '6', type: 'image', title: 'Concert Photography', aspectRatio: 'portrait' },
   { id: '7', type: 'video', title: 'Beat Production', aspectRatio: 'landscape' },
   { id: '8', type: 'image', title: 'Audio Visual Installation', aspectRatio: 'square' },
   { id: '9', type: 'project', title: 'Neural Beat Generator', caption: 'ML-driven rhythms', aspectRatio: 'portrait' },
   { id: '10', type: 'image', title: 'Modular Setup', aspectRatio: 'landscape' },
   { id: '11', type: 'video', title: 'Live Performance', aspectRatio: 'square' },
   { id: '12', type: 'image', title: 'Soundscape Design', aspectRatio: 'portrait' },
 ];
 
 const getAspectClass = (ratio: string) => {
   switch (ratio) {
     case 'portrait':
       return 'aspect-[3/4]';
     case 'landscape':
       return 'aspect-[4/3]';
     default:
       return 'aspect-square';
   }
 };
 
 export const MusicSection = () => {
   return (
     <section id="music" className="min-h-screen flex flex-col md:flex-row">
       {/* Left Sidebar */}
       <motion.aside
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="w-full md:w-64 lg:w-72 flex-shrink-0 p-8 md:p-12 md:sticky md:top-0 md:h-screen flex flex-col"
       >
         <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Music & Arts</h2>
         <p className="text-muted-foreground font-light mt-2 mb-8">
           Where the PM goes to play.
         </p>
         
         <nav className="flex flex-row md:flex-col gap-4">
           <a
             href="#tracks"
             className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
           >
             Tracks
           </a>
           <a
             href="#experiments"
             className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
           >
             Experiments
           </a>
         </nav>
 
         <div className="mt-auto hidden md:block">
           <p className="text-xs text-muted-foreground/60 font-light">
             Tour. Live shows. Portraits.<br />
             Behind the scenes.
           </p>
         </div>
       </motion.aside>
 
       {/* Main Grid */}
       <div className="flex-1 p-4 md:p-8">
         <div className="columns-1 sm:columns-2 gap-4 space-y-4">
           {musicItems.map((item, index) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ duration: 0.5, delay: index * 0.05 }}
               className={`break-inside-avoid group relative overflow-hidden rounded-lg bg-muted ${getAspectClass(item.aspectRatio)} cursor-pointer`}
             >
               {/* Placeholder gradient background */}
               <div 
                 className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted"
                 style={{
                   backgroundImage: `linear-gradient(${45 + index * 30}deg, hsl(var(--muted)), hsl(var(--card)), hsl(var(--muted)))`,
                 }}
               />
               
               {/* Overlay on hover */}
               <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 {item.type === 'video' ? (
                   <div className="flex items-center gap-2 text-foreground">
                     <Play className="w-8 h-8" fill="currentColor" />
                   </div>
                 ) : item.type === 'project' ? (
                   <div className="flex items-center gap-2 text-foreground">
                     <ExternalLink className="w-5 h-5" />
                   </div>
                 ) : null}
               </div>
 
               {/* Caption */}
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                 <p className="text-sm text-foreground font-light">{item.title}</p>
                 {item.caption && (
                   <p className="text-xs text-muted-foreground mt-1">{item.caption}</p>
                 )}
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Footer */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mt-16 pb-12 text-center"
         >
           <p className="text-xs text-muted-foreground/60 font-light">
             © {new Date().getFullYear()} Luis Solis. All rights reserved.
           </p>
         </motion.div>
       </div>
     </section>
   );
 };