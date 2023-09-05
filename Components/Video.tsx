import { useInView } from 'framer-motion';
import { ReactHTMLElement, useEffect, useRef } from 'react';

export default function Video(
  props: Omit<ReactHTMLElement<HTMLVideoElement>, 'ref'>,
) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView && ref.current && ref.current.paused) {
      ref.current.play();
    }
  }, [inView]);
  return (
    <video
      autoPlay={inView}
      controlsList="nofullscreen"
      loop
      muted
      preload="auto"
      ref={ref}
      {...props}
    />
  );
}
