// components/AnimatedGlobe.tsx
'use client';

import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function AnimatedGlobe() {
  const globeEl = useRef<any>();

  useEffect(() => {
    if (!globeEl.current) return;

    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.6;
    globeEl.current.controls().enableZoom = false;
  }, []);

  return (
    <div className="w-full h-full">
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={[{ lat: 48.8566, lng: 2.3522 }, { lat: 37.7749, lng: -122.4194 }]}
        pointAltitude={0.02}
        pointColor={() => '#00ff99'}
        width={300}
        height={300}
      />
    </div>
  );
}
