import { Navigation } from '@/components/portfolio/Navigation';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { MusicSection } from '@/components/portfolio/MusicSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Luis Solis – Product Manager | AI & Music';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Luis Solis is a Product Manager specializing in AI, sustainability, and software innovation. Also creates music and experiments with AI-driven art.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Luis Solis is a Product Manager specializing in AI, sustainability, and software innovation. Also creates music and experiments with AI-driven art.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <MusicSection />
      </main>
    </div>
  );
};

export default Index;
