import React from 'react';

export interface ScallopedEdgeProps {
  position?: 'top' | 'bottom';
  fillColor?: string;
  className?: string;
  height?: number;
}

export function ScallopedEdge({
  position = 'top',
  fillColor = '#FFF5F4',
  className = '',
  height = 18,
}: ScallopedEdgeProps) {
  // Rotasi 180 derajat jika diletakkan di bagian bawah section
  const isBottom = position === 'bottom';
  const transformStyle = isBottom ? 'rotate(180deg)' : 'none';

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full block"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: transformStyle }}
      >
        <path
          d="M0,0 
             Q25,24 50,0 
             Q75,24 100,0 
             Q125,24 150,0 
             Q175,24 200,0 
             Q225,24 250,0 
             Q275,24 300,0 
             Q325,24 350,0 
             Q375,24 400,0 
             Q425,24 450,0 
             Q475,24 500,0 
             Q525,24 550,0 
             Q575,24 600,0 
             Q625,24 650,0 
             Q675,24 700,0 
             Q725,24 750,0 
             Q775,24 800,0 
             Q825,24 850,0 
             Q875,24 900,0 
             Q925,24 950,0 
             Q975,24 1000,0 
             Q1025,24 1050,0 
             Q1075,24 1100,0 
             Q1125,24 1150,0 
             Q1175,24 1200,0 
             L1200,24 L0,24 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
