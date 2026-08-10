import { useEffect, useRef, useState } from "react";
import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Landing from "@/pages/Landing";

// Custom cursor with magnetic glow
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let rx = 0, ry = 0, mx = 0, my = 0;
    let raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      const t = e.target;
      const interactive = t.closest("a, button, [data-cursor='hover'], input, textarea");
      if (ring) ring.classList.toggle("cursor-active", !!interactive);
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hidden lg:block" aria-hidden style={{ opacity: hidden ? 0 : 1 }}>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-electric"
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] -ml-4 -mt-4 h-8 w-8 rounded-full border border-slate-400/50 transition-[width,height,border-color] duration-200"
      />
      <style>{`
        .cursor-ring.cursor-active { width:56px; height:56px; margin-left:-28px; margin-top:-28px; border-color:#0066FF; }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
          <CustomCursor />
          <Landing />
          <Toaster position="bottom-right" theme="light" richColors />
        </ReactLenis>
      </LanguageProvider>
    </div>
  );
}

export default App;
