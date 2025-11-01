import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.error('❌ Audio element not found');
      return;
    }

    console.log('🎵 BackgroundMusic mounted');
    console.log('🎵 Audio src:', audio.src);

    audio.loop = true;
    audio.volume = 0.3;

    // Check if audio can load
    audio.addEventListener('canplay', () => {
      console.log('✅ Audio loaded and ready to play');
    });

    audio.addEventListener('error', (e) => {
      console.error('❌ Audio error:', e);
    });

    // Try silent start immediately on load
    const tryAutoplay = async () => {
      console.log('🔄 Attempting autoplay...');
      try {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          console.log('✅ AUTOPLAY SUCCEEDED!');
        }
      } catch (err) {
        console.log('⚠️ Autoplay blocked:', err.message);
        console.log('💡 Waiting for user interaction...');
      }
    };

    // Start music on first user interaction (invisible to user)
    const startOnInteraction = async (eventType) => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      console.log(`🎯 User interaction detected: ${eventType}`);
      console.log('🔄 Starting playback...');

      try {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          console.log('✅ MUSIC PLAYING! Volume:', audio.volume);
        }
      } catch (err) {
        console.error('❌ Failed to play:', err.message);
      }

      // Clean up listeners
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('keydown', handleKeydown);
    };

    const handleScroll = () => startOnInteraction('scroll');
    const handleMouseMove = () => startOnInteraction('mousemove');
    const handleClick = () => startOnInteraction('click');
    const handleTouch = () => startOnInteraction('touch');
    const handleKeydown = () => startOnInteraction('keydown');

    // Try autoplay first
    tryAutoplay();

    // Set up invisible fallback triggers - use named functions to ensure cleanup works
    document.addEventListener('scroll', handleScroll, { once: true, passive: true });
    document.addEventListener('mousemove', handleMouseMove, { once: true });
    document.addEventListener('click', handleClick, { once: true });
    document.addEventListener('touchstart', handleTouch, { once: true });
    document.addEventListener('keydown', handleKeydown, { once: true });

    return () => {
      cleanup();
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.muted = isMuted;
    }
  }, [isMuted, isPlaying]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/bali-meditation.mp3"
        preload="auto"
        playsInline
      />

      <motion.button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.svg
              key="muted"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="unmuted"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default BackgroundMusic;
