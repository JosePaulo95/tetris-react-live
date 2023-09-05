import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Visible({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <>
      <div
        ref={ref}
        style={{
          bottom: 10,
          left: 10,
          pointerEvents: 'none',
          position: 'absolute',
          right: 10,
          top: 10,
        }}
      ></div>
      {isVisible && children}
    </>
  );
}
