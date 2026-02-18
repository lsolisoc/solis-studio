import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import wshImage from '@/assets/wsh.jpg';
import qnImage from '@/assets/qn.jpg';
import tameImage from '@/assets/tame.jpg';
import mazImage from '@/assets/maz.jpg';
import bosImage from '@/assets/bos.jpg';
import planeImage from '@/assets/plane.jpg';
import drinkImage from '@/assets/drink.jpg';
import mtyImage from '@/assets/mty.jpg';
import brekleeVideo from '@/assets/breklee.mp4';
import coldplayVideo from '@/assets/coldplay.mp4';
import jungleVideo from '@/assets/jungle.mp4';
import aliciaVideo from '@/assets/alicia.mp4'
import museumimage from '@/assets/museum.jpg'
import fireworksVideo from '@/assets/fireworks.mp4'
import romeimage from '@/assets/rome.jpg'

interface MusicItem {
  id: string;
  type: 'video' | 'image' | 'project';
  title: string;
  caption?: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  image?: string;
  video?: string;
}

const musicItems: MusicItem[] = [
  { id: '1', type: 'video', title: 'Berklee College of Music', aspectRatio: 'landscape', video: brekleeVideo },
  { id: '2', type: 'image', title: 'Washington DC', aspectRatio: 'portrait', image: wshImage },
  { id: '3', type: 'video', title: 'Coldplay', aspectRatio: 'square', video: coldplayVideo},
  { id: '4', type: 'image', title: 'Chicago, IL', aspectRatio: 'landscape', image: planeImage },
  { id: '5', type: 'video', title: 'Jungle', aspectRatio: 'portrait', video: jungleVideo },
  { id: '6', type: 'image', title: 'Rome, Italy', aspectRatio: 'portrait', image: romeimage },
  { id: '13', type: 'video', title: '4th of July', aspectRatio: 'portrait', video: fireworksVideo },
  { id: '7', type: 'image', title: 'Tame Impala', aspectRatio: 'portrait', image: tameImage },
  { id: '8', type: 'image', title: 'Boston International Airport', aspectRatio: 'square', image: bosImage },
  { id: '9', type: 'image', title: 'Monterrey, NL', aspectRatio: 'portrait', image: mtyImage },
  { id: '10', type: 'image', title: 'Mazatlan, MX', aspectRatio: 'landscape', image: mazImage },
  { id: '11', type: 'video', title: 'Alicia Keys', aspectRatio: 'portrait', video: aliciaVideo },
  { id: '12', type: 'image', title: 'Carnegie Museum of Art', aspectRatio: 'portrait', image: museumimage },
  { id: '14', type: 'image', title: 'Pittsburgh, PA', aspectRatio: 'square', image: drinkImage },
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

// Video card component with volume toggle
const VideoCard = ({ item }: { item: MusicItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleMute}
      className="relative w-full h-full"
    >
      <video
        ref={videoRef}
        src={item.video}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      />
      
      {/* Volume icon on hover */}
      <div className={`absolute inset-0 bg-background/40 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-3 rounded-full bg-background/60 backdrop-blur-sm">
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-foreground" />
          ) : (
            <Volume2 className="w-6 h-6 text-foreground" />
          )}
        </div>
      </div>
    </div>
  );
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
        className="w-full md:w-80 lg:w-96 flex-shrink-0 p-8 md:p-12 md:sticky md:top-0 md:h-screen flex flex-col"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Music & Arts</h2>
        <p className="text-muted-foreground font-light mt-2 mb-8">
          A passion for technology, music, and arts.
        </p>
        
       
        <nav className="flex flex-row md:flex-col gap-4">
           {/*  <a
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
          </a>  */}

        
        </nav> 

        <div className="mt-auto hidden md:block">
          <p className="text-xs text-muted-foreground/60 font-light">
            Tech. Music. Travel. Songs.<br />
            Arts. Design.
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
              {/* Media background: video or image */}
              {item.type === 'video' && item.video ? (
                <VideoCard item={item} />
              ) : item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay on hover for images */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'project' && (
                      <div className="flex items-center gap-2 text-foreground">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted"
                  style={{
                    backgroundImage: `linear-gradient(${45 + index * 30}deg, hsl(var(--muted)), hsl(var(--card)), hsl(var(--muted)))`,
                  }}
                />
              )}

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent pointer-events-none">
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
