import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import tecLogo from '@/assets/logos/tecmty.png';
import cmuLogo from '@/assets/logos/cmu8.png';
import thiLogo from '@/assets/logos/thifin.png';

interface EducationItem {
  id: string;
  institution: string;
  program: string;
  subtitle: string;
  logo: string;
  details: {
    overview: string;
    keyProjects: string[];
    Selectedcoursework: string;
    skills: string[];
  };
}

const educationData: EducationItem[] = [
  {
    id: 'cmu',
    institution: 'Carnegie Mellon University',
    program: 'M.S. Engineering & Technology Innovation Management',
    subtitle: 'Graduate studies in product development, artificial intelligence, and technology strategy for engineering innovation.',
    logo: cmuLogo,
    details: {
      overview: 'Advanced graduate program focusing on product development, technology strategy, artificial intelligence to build innovative products that are customer centric.',
      keyProjects: [
        'Chopin AI: Developed a gesture-driven GenAI model to create real-time classical music.',
        'IceBreaker: Led 0-1 development of an ML model to predict hockey talent for the Pittsburgh Penguins',
        'Grundfos Digital Twins: Built a neural network to simulate industrial pump behavior.',
        'Ansys Discovery: Developed a convolutional neural network to optimize CAD capabilities ',
      ],
      Selectedcoursework: 'Product Management, Human-computer Interaction, Design of AI Prodcuts, Data Science, Technology Management & Entrepreneurship',
      skills: ['Product Management', 'Artificial Intelligence', 'Technology Strategy', 'Design Thinking'],
    },
  },
  {
    id: 'tec',
    institution: 'Tec de Monterrey',
    program: 'Sustainable Development Engineering',
    subtitle: 'BSc specialized in renewable energy systems, product development, sustainable technologies, and entrepreneurship.',
    logo: tecLogo,
    details: {
      overview: 'Engineering program focused on creating sustainable technology solutions through circular economy principles and clean technology innovation.',
      keyProjects: [
        'Wind Turbine Optimization: Redesigned an H-Rotor wind turbine for improved performance and lower development costs.',
        'Wastepaper Bioethanol: Co-developed a process to produce Bioethanol from paper waste.',
        'Sustainable Pyrolisis: Concucted research to produce biofeuls from waste avocado seeds through thermal pyrolisis.',
        'Blomex: Designed a modular construction solution based on recycled polymers.',
      ],
      Selectedcoursework: 'Renewable energies, systems design, project management, mathematical modeling, information systems, process engineering. ',
      skills: ['Renewable Energy', 'Systems Design', 'Project Management', 'Sustainability', 'Entrepreneurship'],
    },
  },
  {
    id: 'thi',
    institution: 'Technische Hochschule Ingolstadt',
    program: 'Project Management & Renewable Energy',
    subtitle: 'International exchange program in Germany focused on technical project management and renewable energies.',
    logo: thiLogo,
    details: {
      overview: 'Yearlong program focused on developing innovative renewable energy solutions and engineering project management/strategy.',
      keyProjects: [
        'Next-gen battery storage solutions',
        'Smart grid integration for rural communities',
        'Hybrid wind-solar energy systems',
        'Energy efficiency optimization projects',
      ],
      Selectedcoursework: 'Solar Energy Systems, Wind Power Engineering, Battery Storage Technology, Smart Grid Integration, Technical Project Management, Power Systems Analysis',
      skills: ['Energy Systems', 'Technical PM', 'Systems Integration', 'Research & Development.'],
    },
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
          Engineering, Software, and Artificial Intelligence with a foundation in Sustainable Development
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
              <img 
                src={item.logo} 
                alt={`${item.institution} logo`} 
                className="w-16 h-16 object-contain mb-4 opacity-80"
              />
              <p className="text-sm text-muted-foreground font-inter font-light mb-2">{item.institution}</p>
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">{item.program}</h3>
              <p className="text-sm text-muted-foreground font-inter font-light flex-1">{item.subtitle}</p>
              <p className="text-xs text-muted-foreground/60 mt-4 italic font-inter font-light">Click to learn more</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full relative my-8"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <p className="text-sm text-muted-foreground font-inter font-light mb-2">{selectedItem.institution}</p>
              <h3 className="text-2xl font-medium text-foreground mb-3">{selectedItem.program}</h3>
              <p className="text-sm text-muted-foreground font-inter font-light mb-8">{selectedItem.subtitle}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Overview</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedItem.details.overview}</p>  {/* ← CHANGED: Added font-inter */}
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Projects</h4>
                  <ul className="space-y-2">
                    {selectedItem.details.keyProjects.map((project, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-education mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-inter font-light">{project}</span>  {/* ← CHANGED: Added font-inter */}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Selected Coursework</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedItem.details.Selectedcoursework}</p>  {/* ← CHANGED: Added font-inter */}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                {selectedItem.details.skills.map((skill) => (
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
