"use client";

import React, { useRef, useEffect } from 'react';

const DynamicUniverseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; radius: number; alpha: number; dying: boolean }[] = [];
    let animationFrameId: number;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          dying: false,
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nebula1 = ctx.createRadialGradient(canvas.width * 0.2, canvas.height * 0.3, 0, canvas.width * 0.2, canvas.height * 0.3, 300);
      nebula1.addColorStop(0, 'rgba(0, 255, 255, 0.05)');
      nebula1.addColorStop(1, 'rgba(0, 255, 255, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebula2 = ctx.createRadialGradient(canvas.width * 0.8, canvas.height * 0.7, 0, canvas.width * 0.8, canvas.height * 0.7, 400);
      nebula2.addColorStop(0, 'rgba(80, 0, 120, 0.08)');
      nebula2.addColorStop(1, 'rgba(80, 0, 120, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.globalAlpha = star.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    const update = () => {
      stars.forEach(star => {
        if (star.dying) {
          star.alpha -= 0.02;
          if (star.alpha < 0) {
            star.alpha = 0;
            star.dying = false;
          }
        } else {
          star.alpha += 0.02;
          if (star.alpha > 1) {
            star.alpha = 1;
            star.dying = true;
          }
        }
      });
    };

    const animate = () => {
      draw();
      update();
      animationFrameId = requestAnimationFrame(animate);
    };

    setup();
    animate();

    const handleResize = () => {
      setup();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-full w-full" />;
};

export default DynamicUniverseBackground;
