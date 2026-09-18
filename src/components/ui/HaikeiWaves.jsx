export const HaikeiWaves = ({ variant = "top", className = "" }) => {
  if (variant === "top") {
    return (
      <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-slate-900/60"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,00 L0,0 Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M0,0 C200,60 400,10 600,70 C800,120 1000,30 1200,80 L1200,00 L0,0 Z"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12 sm:h-16 text-slate-900/60"
      >
        <path
          d="M0,60 C300,10 550,130 700,45 C850,-40 1050,90 1200,0 L1200,120 L0,120 Z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M0,80 C200,30 400,120 600,70 C800,10 1000,60 1200,0 L1200,120 L0,120 Z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export const HaikeiBlobMesh = ({ className = "" }) => {
  return (
    <div className={`absolute pointer-events-none -z-10 ${className}`}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full opacity-20 filter blur-3xl"
      >
        <defs>
          <linearGradient id="haikei-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#haikei-grad1)"
          d="M421.5,310.5Q380,371,316,400Q252,429,191.5,397.5Q131,366,104,308Q77,250,99.5,190.5Q122,131,181,99.5Q240,68,304,92.5Q368,117,415.5,183.5Q463,250,421.5,310.5Z"
        />
      </svg>
    </div>
  );
};
