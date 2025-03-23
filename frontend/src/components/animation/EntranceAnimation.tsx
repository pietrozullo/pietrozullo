import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EntranceAnimationProps {
  videoSrc: string;
  duration?: number; // Duration in seconds
  onAnimationComplete?: () => void;
}

export function EntranceAnimation({ 
  videoSrc, 
  duration = 4, 
  onAnimationComplete 
}: EntranceAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Set a timeout to end the animation after the specified duration
    const timer = setTimeout(() => {
      setIsPlaying(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, onAnimationComplete]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 