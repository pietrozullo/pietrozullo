import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroAnimationProps {
  videoSrc: string;
  duration?: number; // Duration in seconds
  onComplete?: () => void; // Callback for when animation completes
}

export function HeroAnimation({ 
  videoSrc, 
  duration = 4,
  onComplete
}: HeroAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle video loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(err => console.error("Error playing video:", err));
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // If video is already loaded
    if (video.readyState >= 3) {
      setVideoLoaded(true);
      video.play().catch(err => console.error("Error playing video:", err));
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoRef]);

  // Handle video end or timeout
  useEffect(() => {
    if (!videoLoaded) return;

    const video = videoRef.current;
    if (!video) return;

    // Listen for video end event
    const handleVideoEnd = () => {
      completeAnimation();
    };

    video.addEventListener('ended', handleVideoEnd);

    // Fallback timeout in case video doesn't trigger ended event
    const timer = setTimeout(() => {
      if (isPlaying) {
        completeAnimation();
      }
    }, Math.max(duration * 1000, video.duration * 1000 || 5000));

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(timer);
    };
  }, [duration, videoLoaded, isPlaying]);

  const completeAnimation = () => {
    setIsPlaying(false);
    if (onComplete) {
      // Small delay to allow fade out animation to complete
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] overflow-hidden rounded-lg"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop={false}
            className="w-full h-auto object-cover"
            onEnded={completeAnimation}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* White vignette overlay */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{ 
                 background: 'radial-gradient(circle, transparent 30%, rgba(255,255,255,0.7) 100%)',
                 mixBlendMode: 'lighten'
               }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 