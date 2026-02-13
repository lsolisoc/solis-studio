import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import penguinsImage from '@/assets/projects/icebreaker.png';
import chopinaiImage from '@/assets/projects/chopinai.png';
import mccImage from '@/assets/projects/mcc.jpg';
import BritelineImage from '@/assets/projects/briteline5.png';
import movsusImage from '@/assets/projects/movsus.png';
import mintlyImage from '@/assets/projects/mintly3.png';
import reechImage from '@/assets/projects/REECH8.png';
import pyrolisisImage from '@/assets/projects/pyrolisis3.png';




 
type ProjectCategory = 'sustainability' | 'software' | 'ai';


interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  skills: string[];
  images?: string[];
  files?: { name: string; url: string }[];
  details: {
    problem: string;
    role: string;
    process: string[];
    impact: string;
  };
}


const projects: Project[] = [
  
 /*Penguins ML Model*/
  {
    id: 'ml-hockey',
    category: 'ai',
    title: 'IceBreaker AI',
    description: 'Owned end-to-end ML product development predicting youth hockey potential for the Pitt Penguins.',
    skills: ['Machine Learning', 'Product Management', 'Data Science'],
    images: [penguinsImage],
    details: {
      problem: 'The Pittsburgh Penguins needed a data-driven approach to identify promising youth players earlier in their development.',
      role: 'Product Manager leading a cross-functional team of data scientists and sports analysts.',
      process: [
        'Conducted stakeholder interviews with coaches and scouts',
        'Defined ML model requirements and success metrics',
        'Iterated on feature engineering with domain experts',
        'Deployed prediction dashboard for scouting team',
      ],
      impact: 'Improved scouting efficiency by 40% and identified 3 players now in development pipeline.',
    },
  },
  
  /*Chopin AI*/
  {
    id: 'chopin-ai',
    category: 'ai',
    title: 'Chopin AI',
    description: 'Gesture-driven AI model designed to generate real-time music with hand movement.',
    skills: ['Artificial Intelligence', 'Computer Vision', 'Human-AI Interaction'],
    images: [chopinaiImage],
    details: {
      problem: 'Traditional music interfaces limit expressiveness. Can we create music through natural gesture?',
      role: 'Technical Product Manager and AI Developer.',
      process: [
        'Researched gesture recognition and music generation models',
        'Built computer vision pipeline for hand tracking',
        'Integrated with generative audio synthesis',
        'User testing with musicians and performers',
      ],
      impact: 'Created novel instrument performed at 2 live events. Published research paper.',
    },
  },
  
  /*MCC*/
  {
    id: 'saas-workflow',
    category: 'software',
    title: 'SaaS Workflow Automation',
    description: 'Led US/India teams deploying Salesforce, SAP, and Monday.com across 130+ global sites.',
    skills: ['Product Management', 'SaaS', 'Agile', 'Cross-functional Leadership'],
    images:[mccImage],
    details: {
      problem: 'Enterprise needed unified workflow tools across global manufacturing sites.',
      role: 'Senior Product Manager leading distributed teams.',
      process: [
        'Mapped existing workflows across 130+ sites',
        'Designed integration architecture for Salesforce, SAP, Monday.com',
        'Managed agile sprints with US and India teams',
        'Rolled out with site-by-site training program',
      ],
      impact: 'Reduced operational overhead by 35%. Achieved 95% user adoption within 6 months.',
    },
  },
  
  /*Briteline*/
  {
    id: 'second-startup',
    category: 'software',
    title: 'My Second Startup',
    description: 'SaaS, workflow automation, and analytics projects for 10+ SMB clients.',
    skills: ['SaaS', 'Digital Transformation', 'Consulting', 'Data Analytics'],
    images: [BritelineImage],
    details: {
      problem: 'Small businesses struggle with fragmented tools and manual processes.',
      role: 'Co-founder and Head of Product.',
      process: [
        'Identified common pain points across SMB verticals',
        'Built modular SaaS platform with analytics dashboard',
        'Onboarded 10+ clients with custom workflows',
        'Iterated based on client feedback cycles',
      ],
      impact: 'Grew to $50K ARR. Clients reported 25% time savings on average.',
    },
  },
  
  /*Mintlypro*/
  {
    id: 'industrial-software',
    category: 'software',
    title: 'Industrial Software Automation',
    description: 'Led 0 to 1 product development of two SaaS products for industrial applications.',
    skills: ['Product Management', 'SaaS', 'Product Development'],
    images: [mintlyImage],
    details: {
      problem: 'Industrial manufacturers lacked modern software for equipment monitoring.',
      role: 'Product Lead for industrial IoT software suite.',
      process: [
        'Conducted discovery with manufacturing plant managers',
        'Defined MVP requirements for monitoring and alerting',
        'Managed development sprints from 0 to launch',
        'Established customer feedback loops for iteration',
      ],
      impact: 'Launched 2 products adopted by 15 manufacturing sites.',
    },
  },
  
  /*MovSus*/
  {
    id: 'electric-mobility',
    category: 'sustainability',
    title: 'Electric Mobility',
    description: 'Led the design of a hybrid vehicle conversion kit for reefer trucks.',
    skills: ['Technical Project Management', 'Renewable Energies', 'E-Mobility'],
    images: [movsusImage],
    details: {
      problem: 'Refrigerated trucks are major polluters. Electric conversion can reduce emissions significantly.',
      role: 'Product Manager for e-mobility conversion kit.',
      process: [
        'Analyzed reefer truck market and emission profiles',
        'Designed modular hybrid conversion system',
        'Coordinated with engineering on battery integration',
        'Piloted with fleet operator for real-world testing',
      ],
      impact: 'Prototype reduced fuel consumption by 30%. Secured pilot contract with logistics company.',
    },
  },
  
  /*Reech*/
  {
    id: 'renewable-innovation',
    category: 'sustainability',
    title: 'Renewable Energy Innovation',
    description: 'Led the technical design of innovative wind and solar energy systems for social imapct.',
    skills: ['Technical Project Management', 'Systems Design', 'Renewable Energies'],
    images: [reechImage],
    details: {
      problem: 'Rural communities need affordable, reliable renewable energy solutions.',
      role: 'Innovation Project Lead at TH Ingolstadt.',
      process: [
        'Researched hybrid wind-solar configurations',
        'Designed integrated energy system for off-grid use',
        'Built and tested prototype installation',
        'Documented learnings for academic publication',
      ],
      impact: 'System achieved 40% cost reduction vs. traditional installations.',
    },
  },
  
  /*Pyrolisis*/
  {
    id: 'biofuels',
    category: 'sustainability',
    title: 'Sustainable Biofuels',
    description: 'Oversaw the development of projects generating biofuels from waste (paper, avocado seeds).',
    skills: ['Technical Project Management', 'Renewable Energies', 'Biotechnology'],
    images: [pyrolisisImage],
    details: {
      problem: 'Agricultural waste creates pollution. Can it become renewable fuel instead?',
      role: 'Project Manager for biofuel research initiative.',
      process: [
        'Identified viable waste streams for biofuel conversion',
        'Coordinated with biochemistry lab on extraction methods',
        'Managed pilot production runs',
        'Analyzed economic viability and scalability',
      ],
      impact: 'Proved concept for avocado seed biofuel. Published findings in sustainability journal.',
    },
  },
];


const categoryColors: Record<ProjectCategory, { bg: string; text: string; glow: string }> = {
  sustainability: { bg: 'bg-sustainability', text: 'text-sustainability', glow: 'glow-sustainability' },
  software: { bg: 'bg-software', text: 'text-software', glow: 'glow-software' },
  ai: { bg: 'bg-ai', text: 'text-ai', glow: 'glow-ai' },
};


const categoryLabels: Record<ProjectCategory, string> = {
  sustainability: 'Sustainability',
  software: 'Software',
  ai: 'AI',
};


export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);


  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section id="projects" className="section-viewport snap-section flex flex-col p-8 md:p-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Selected Projects</h2>
        <p className="text-muted-foreground font-light mt-2">Tech innovation with purpose.</p>
      </motion.div>



      {/* Legend */}
       <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, delay: 0.2 }}
         className="flex flex-wrap gap-6 mb-8"
       >
         <div className="flex items-center gap-2">
           <div className="w-8 h-0.5 bg-ai" />
           <span className="text-xs text-muted-foreground">AI</span>
         </div>
         <div className="flex items-center gap-2">
           <div className="w-8 h-0.5 bg-software" />
           <span className="text-xs text-muted-foreground">Software</span>
         </div>
         <div className="flex items-center gap-2">
           <div className="w-8 h-0.5 bg-sustainability" />
           <span className="text-xs text-muted-foreground">Sustainability</span>
         </div>
       </motion.div>
       
      {/* Carousel Container */}
      <div className="flex-1 flex items-center relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-muted transition-colors hidden md:flex"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-muted transition-colors hidden md:flex"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>


        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 md:px-12 w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`project-card flex-shrink-0 w-80 md:w-96 h-[28rem] md:h-[32rem] snap-center bg-card border border-border rounded-lg overflow-hidden hover:${categoryColors[project.category].glow} flex flex-col`}
            >
              {/* Category Bar */}
               <div className={`h-1 ${categoryColors[project.category].bg}`} />



               <div className="p-6 flex-1 flex flex-col">
                 <div>
                   <span className={`text-xs font-medium ${categoryColors[project.category].text} uppercase tracking-wider font-inter`}>
                     {categoryLabels[project.category]}
                   </span>
                   <h3 className="text-lg font-medium text-foreground mt-2 mb-3">{project.title}</h3>
                   <p className="text-sm text-muted-foreground font-inter font-light mb-4 line-clamp-4">
                     {project.description}
                   </p>
                   
                   {/* Image Preview */}
                   {project.images && project.images.length > 0 && (
                     <div className="flex-1 flex items-center justify-center my-4">
                       <div className="w-full rounded-lg overflow-hidden border border-border/30 bg-muted/20">
                         <img
                           src={project.images[0]}
                           alt={`${project.title} preview`}
                           className="w-full h-44 object-cover"
                         />
                       </div>
                     </div>
                   )}





                 </div>
                 
                 <div className="mt-auto flex flex-wrap gap-2">
                   {project.skills.map((skill) => (
                     <span key={skill} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-inter font-light">
                       {skill}
                     </span>
                   ))}
                 </div>
               
               </div>
                           </motion.div>
                         ))}
                       </div>
                     </div>



    




      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full relative my-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Category Bar */}
              <div className={`h-1 w-16 rounded ${categoryColors[selectedProject.category].bg} mb-4`} />
              
              <span className={`text-xs font-medium ${categoryColors[selectedProject.category].text} uppercase tracking-wider font-inter`}>
                {categoryLabels[selectedProject.category]}
              </span>
              <h3 className="text-2xl font-medium text-foreground mt-2 mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground font-inter font-light mb-8">{selectedProject.description}</p>


              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedProject.details.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Role & Tools</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedProject.details.role}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Process</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.process.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${categoryColors[selectedProject.category].bg} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground font-inter font-light">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Impact</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedProject.details.impact}</p>
                </div>
              </div>


              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                {selectedProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-inter font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
