import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import tecLogo from '@/assets/logos/tecmty.png';
import cmuLogo from '@/assets/logos/cmu.png';
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
    subtitle: 'Graduate studies in technology innovation, artificial intelligence, and product management.',
    logo: cmuLogo,
    details: {
      overview: 'Advanced graduate program combining engineering, business strategy, and design thinking to build innovative technology products.',
      keyProjects: [
        'Gesture-driven GenAI model to create real-time music',
        'ML model to predict hockey talent for the Pitt Penguins',
        'Neural net to predict industrial pump behavior',
        'Convolutional neural net to optimiza CAD',
      ],
      Selectedcoursework: 'Product Management, Human-computer Interaction, Design of AI Prodcuts, Innovation Management, Technology Entrepreneurship',
      skills: ['Product Strategy', 'Machine Learning', 'Agile Development', 'User Research'],
    },
  },
  {
    id: 'tec',
    institution: 'Tec de Monterrey',
    program: 'Sustainable Development Engineering',
    subtitle: 'Specialized in sustainable technologies, product development, and entrepreneurship.',
    logo: tecLogo,
    details: {
      overview: 'Engineering program focused on creating sustainable solutions through circular economy principles and clean technology innovation.',
      keyProjects: [
        'Biofuel production from agricultural waste',
        'Electric mobility conversion kits for reefer trucks',
        'Circular economy product prototypes',
        'Renewable energy systems design',
      ],
      Selectedcoursework: 'Sustainable Design, Renewable Energy Systems, Circular Economy, Environmental Engineering, Project Management, Cleantech Entrepreneurship',
      skills: ['Sustainable Design', 'Project Management', 'Systems Thinking', 'Entrepreneurship'],
    },
  },
  {
    id: 'thi',
    institution: 'Technische Hochschule Ingolstadt',
    program: 'Renewable Energies',
    subtitle: 'Focused on technical project management and led two innovation projects in renewable energies.',
    logo: thiLogo,
    details: {
      overview: 'Technical program applying German engineering methodologies to renewable energy systems and sustainable infrastructure.',
      keyProjects: [
        'Next-gen battery storage solutions',
        'Smart grid integration for rural communities',
        'Hybrid wind-solar energy systems',
        'Energy efficiency optimization projects',
      ],
      Selectedcoursework: 'Solar Energy Systems, Wind Power Engineering, Battery Storage Technology, Smart Grid Integration, Technical Project Management, Power Systems Analysis',
      skills: ['Energy Systems', 'Technical PM', 'Systems Integration', 'Research & Development'],
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
          Engineering, Software, and Artificial Intelligence with a foundation in Sustainable Development.
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
                  <p className="text-sm text-muted-foreground font-light">{selectedItem.details.overview}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Projects</h4>
                  <ul className="space-y-2">
                    {selectedItem.details.keyProjects.map((project, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-education mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-light">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Selected Coursework</h4>
                  <p className="text-sm text-muted-foreground font-light">{selectedItem.details.coursework}</p>
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
