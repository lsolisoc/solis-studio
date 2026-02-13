import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import penguinsImage from '@/assets/projects/icebreaker.png';
import chopinaiImage from '@/assets/projects/chopinai.png';
import mccImage from '@/assets/projects/mcc.jpg';
import BritelineImage from '@/assets/projects/briteline5.png';
import movsusImage from '@/assets/projects/movsus.png';
import mintlyImage from '@/assets/projects/mintly3.png';
import reechImage from '@/assets/projects/REECH5.png';
import pyrolisisImage from '@/assets/projects/pyrolisis.png';

type ProjectCategory = 'sustainability' | 'software' | 'ai';

interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  skills: string[];
  images?: string[];
  attachments?: { name: string; url: string }[];
  details: {
    overview: string;
    approach: string[];
    impact: string;
    technologies?: string[];
  };
}

const projects: Project[] = [
  /*IceBreaker AI*/
  {
    id: 'ml-hockey',
    category: 'ai',
    title: 'IceBreaker AI',
    description: 'End-to-end ML product predicting youth hockey potential for the Pittsburgh Penguins with 94% accuracy.',
    skills: ['Machine Learning', 'Product Management', 'Data Science'],
    images: [penguinsImage],
    attachments: [
      { name: 'Project Presentation', url: '/attachments/icebreaker-presentation.pdf' },
      { name: 'Technical Documentation', url: '/attachments/icebreaker-docs.pdf' },
    ],
    details: {
      overview: 'Led 0-1 ML product development to predict youth hockey player success, achieving 0.98 ROC-AUC across 10 feature categories. Owned stakeholder management, data cleaning, feature engineering, model optimization, and delivery.',
      approach: [
        'Conducted stakeholder interviews with coaches and scouts to define success metrics and KPIs',
        'Led data analysis and cleaning across 10 performance feature categories',
        'Supervised feature engineering, model development, and hyperparameter tuning',
        'Shipped interactive dashboards showing success probability, player similarity scores, and ranked development features',
        'Presented results to Penguins leadership and iterated based on feedback',
      ],
      impact: 'Delivered 94% accuracy model (0.98 ROC-AUC) enabling data-driven scouting decisions and personalized development plans for youth players.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression', 'Data Visualization'],
    },
  },

  /*Chopin AI*/
  {
    id: 'chopin-ai',
    category: 'ai',
    title: 'Chopin AI',
    description: 'Gesture-driven GenAI system generating real-time classical music through hand movements for accessible music therapy.',
    skills: ['Artificial Intelligence', 'Computer Vision', 'Human-AI Interaction'],
    images: [chopinaiImage],
    attachments: [
      { name: 'Research Paper', url: '/attachments/chopin-paper.pdf' },
      { name: 'Architecture Diagram', url: '/attachments/chopin-architecture.pdf' },
    ],
    details: {
      overview: 'Developed an accessible, human-centered AI music generation system using computer vision for hand tracking and LSTM neural networks for real-time Chopin-style composition. Designed for music therapy applications to improve mental health outcomes.',
      approach: [
        'Designed modular, interpretable architecture using OpenCV + MediaPipe for hand detection and Mido + PrettyMIDI for MIDI processing',
        'Trained LSTM recurrent neural network on 50-piece Chopin dataset using PyTorch',
        'Built real-time gesture-to-music pipeline with NumPy-based vectorized embeddings',
        'Implemented privacy-preserving design (no user data collected)',
        'Performed at 2 live events and published research paper',
      ],
      impact: 'Created novel, accessible music creation tool for non-musicians, enabling therapeutic music intervention without requiring technical training or musical expertise.',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'MediaPipe', 'LSTM', 'MIDI', 'NumPy'],
    },
  },

  /*MCC SaaS Workflow*/
  {
    id: 'saas-workflow',
    category: 'software',
    title: 'SaaS Workflow Automation',
    description: 'Led enterprise SaaS deployment across 130+ sites in Americas, APAC, EMEA, achieving 60% delivery improvement.',
    skills: ['Product Management', 'SaaS', 'Agile', 'Cross-functional Leadership'],
    images: [mccImage],
    attachments: [
      { name: 'Implementation Roadmap', url: '/attachments/mcc-roadmap.pdf' },
      { name: 'Process Documentation', url: '/attachments/mcc-processes.pdf' },
    ],
    details: {
      overview: 'Product Manager for global Salesforce, SAP CPQ, NetZero Cloud, and Monday.com deployment across 130+ manufacturing sites. Improved delivery by 60%, reduced estimating time by 80%, and enhanced sales visibility for 500+ users.',
      approach: [
        'Led US/India engineering and business teams through requirements gathering, user research, and feature definition',
        'Delivered 150+ features via Agile sprints, managing roadmap, backlog prioritization, and A/B testing',
        'Created technical specifications, process maps, and implementation documentation',
        'Managed stakeholder communication and reported progress to CTO',
        'Conducted change management training for 500+ sales reps and estimators globally',
      ],
      impact: '60% faster delivery, 80% reduction in estimating time, and enhanced ESG reporting capabilities. Achieved 95% user adoption within 6 months across global operations.',
      technologies: ['Salesforce', 'SAP CPQ', 'Monday.com', 'Jira', 'SQL', 'APIs'],
    },
  },

  /*Briteline*/
  {
    id: 'second-startup',
    category: 'software',
    title: 'My Second Startup',
    description: 'Co-founded digital transformation consultancy serving 10+ SMBs with 40% efficiency gains through workflow automation.',
    skills: ['SaaS', 'Digital Transformation', 'Consulting', 'Data Analytics'],
    images: [BritelineImage],
    details: {
      overview: 'Co-founded consultancy delivering end-to-end digital transformation for 10+ SMB clients. Led customer-facing solutions engineering, process optimization, and SaaS platform implementation.',
      approach: [
        'Conducted stakeholder interviews to map current-state processes and identify pain points',
        'Created process diagrams, technical specifications, and optimization recommendations',
        'Built and deployed Salesforce, Monday.com, CRM, and ERP systems tailored to client needs',
        'Led change management workshops and user training',
        'Monitored KPIs and iterated based on client feedback',
      ],
      impact: '40%+ efficiency gains, 30% revenue growth, and 60% technology adoption across client base. Generated $50K ARR with 25% average time savings reported.',
      technologies: ['Salesforce', 'Monday.com', 'Power BI', 'SQL', 'Process Automation'],
    },
  },

  /*Mintlypro - Industrial Software*/
  {
    id: 'industrial-software',
    category: 'software',
    title: 'Industrial SaaS Platforms',
    description: 'Led 0-1 development of SaaS monitoring platform adopted by 15 manufacturing sites.',
    skills: ['Product Management', 'SaaS', 'IoT', 'Product Development'],
    images: [mintlyImage],
    details: {
      overview: 'Product Lead for industrial IoT software suite enabling real-time equipment monitoring and predictive alerts. Launched 2 products from discovery to adoption at 15 manufacturing sites.',
      approach: [
        'Conducted discovery interviews with 20+ plant managers to define MVP requirements',
        'Designed monitoring dashboard with alerting and analytics capabilities',
        'Managed agile development sprints from 0 to launch',
        'Established customer feedback loops and KPI tracking',
        'Drove adoption through site visits and training sessions',
      ],
      impact: 'Launched 2 products adopted by manufacturing sites, reducing downtime, enhancing traceability, and enabling predictive maintenance.',
      technologies: ['IoT Sensors', 'Cloud Platforms', 'APIs', 'Data Visualization'],
    },
  },

  /*Electric Mobility*/
  {
    id: 'electric-mobility',
    category: 'sustainability',
    title: 'Hybrid Vehicles and E-Mobility',
    description: 'Co-designed electric conversion kit for refrigerated trucks achieving 30% fuel reduction.',
    skills: ['Technical Project Management', 'Renewable Energies', 'E-Mobility'],
    images: [movsusImage],
    attachments: [
      { name: 'Technical Specifications', url: '/attachments/movsus-specs.pdf' },
      { name: 'Financial Feasibility Study', url: '/attachments/movsus-roi.pdf' },
    ],
    details: {
      overview: 'Product Manager for hybrid electric conversion kit transforming diesel reefer trucks into hybrid vehicles. Reduced fuel consumption by 30% by separating refrigeration from propulsion systems.',
      approach: [
        'Conducted energy consumption analysis: fuel needs, route length, refrigeration load, and temperature requirements',
        'Designed tri-phase inverter and lithium-ion battery bank system based on energy modeling',
        'Specified battery provider and engineered modular deployment structure',
        'Performed financial feasibility analysis incorporating green energy incentives and ROI',
        'Designed solar roof charging station funded by regulatory green energy programs',
      ],
      impact: '30% fuel reduction prototype. Secured pilot contract with logistics company. Created scalable, low-emission solution for cold-chain transportation.',
      technologies: ['Battery Systems', 'Inverter Design', 'Energy Modeling', 'Solar Integration'],
    },
  },

  /*Renewable Energy Innovation*/
  {
    id: 'renewable-innovation',
    category: 'sustainability',
    title: 'Renewable Energy Innovation',
    description: 'Led design of low-cost, resilient wind turbine for marginalized coastal communities in Germany.',
    skills: ['Technical Project Management', 'Systems Design', 'Renewable Energies'],
    images: [reechImage],
    attachments: [
      { name: 'Design Documentation', url: '/attachments/reech-design.pdf' },
      { name: 'REECH Competition Presentation', url: '/attachments/reech-presentation.pdf' },
    ],
    details: {
      overview: 'Innovation Project Lead at TH Ingolstadt (Germany) designing H-rotor wind turbine for energy-independent coastal communities. Won recognition at REECH competition hosted by KIT.',
      approach: [
        'Performed energy modeling to assess viable coastal locations and generation potential',
        'Designed turbine airfoils optimized for regional wind profiles',
        'Engineered resilient structure using locally-available materials for easy deployment',
        'Conducted cost estimation and ROI analysis for marginalized communities',
        'Presented technical feasibility study at REECH innovation competition',
      ],
      impact: 'Achieved 40% cost reduction vs. traditional installations. Enabled energy independence for underserved communities with scalable, locally-manufacturable design.',
      technologies: ['CFD Simulation', 'Airfoil Design', 'Energy Modeling', 'Structural Engineering'],
    },
  },

  /*Sustainable Biofuels*/
  {
    id: 'biofuels',
    category: 'sustainability',
    title: 'Waste-to-Biofuel Research',
    description: 'Led research producing bioethanol from waste paper and biofuels from avocado seeds via pyrolysis.',
    skills: ['Technical Project Management', 'Renewable Energies', 'Biotechnology'],
    images: [pyrolisisImage],
    attachments: [
      { name: 'Research Paper - Bioethanol', url: '/attachments/bioethanol-paper.pdf' },
      { name: 'Pyrolysis Study', url: '/attachments/pyrolysis-study.pdf' },
    ],
    details: {
      overview: 'Project Manager for biofuel research converting agricultural waste into renewable fuels. Led two parallel initiatives: bioethanol from waste paper and biofuel/activated carbon from avocado seeds.',
      approach: [
        'Bioethanol Project: Researched cellulose-to-sugar treatment process, sourced materials, conducted lab experiments treating waste paper, documented results, and performed financial feasibility analysis',
        'Pyrolysis Project: Researched thermal pyrolysis methods, conducted lab experiments converting avocado seeds to biogas/biofuel/activated carbon, optimized process parameters',
        'Co-authored research papers and presented findings at academic conferences',
        'Analyzed economic viability and scalability for commercial deployment',
      ],
      impact: 'Successfully produced bioethanol from waste paper and demonstrated viable pyrolysis process for avocado seed waste. Published findings in sustainability journals, proving circular economy concept.',
      technologies: ['Biochemical Processing', 'Thermal Pyrolysis', 'Lab Equipment', 'Process Optimization'],
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
                {/* Overview */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Overview</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedProject.details.overview}</p>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Approach</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.approach.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${categoryColors[selectedProject.category].bg} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground font-inter font-light">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Impact</h4>
                  <p className="text-sm text-muted-foreground font-inter font-light">{selectedProject.details.impact}</p>
                </div>

                {/* Technologies */}
                {selectedProject.details.technologies && selectedProject.details.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground font-inter font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Attachments */}
              {selectedProject.attachments && selectedProject.attachments.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">Attachments</h4>
                  <div className="space-y-2">
                    {selectedProject.attachments.map((file, index) => (
                      <a
                        key={index}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        <span className="font-inter font-light">{file.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tags */}
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
