import { cn } from "../lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

export const Vortex = (props) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameId = useRef();
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const HALF_PI = 0.5 * Math.PI;
  const TAU = 2 * Math.PI;
  const TO_RAD = Math.PI / 180;
  const rand = n => n * Math.random();
  const randRange = n => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      // Wait a bit for the container to be properly rendered
      setTimeout(() => {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          resize(canvas, ctx);
          initParticles();
          draw(canvas, ctx);
        }
      }, 50);
    }
  };

  const initParticles = () => {
    tick = 0;
    // simplex = new SimplexNoise();
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width;
    const height = rect.height;

    let x, y, vx, vy, life, ttl, speed, radius, hue;

    // Spread particles across the entire canvas area, not just around center
    x = rand(width);
    y = rand(height); // Use full height instead of center + rangeY
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas, ctx) => {
    const container = containerRef.current;
    if (!container || !canvas || !ctx) {
      // Retry after a short delay if elements aren't ready
      setTimeout(() => {
        animationFrameId.current = window.requestAnimationFrame(() =>
          draw(canvas, ctx));
      }, 100);
      return;
    }
    
    tick++;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = Math.max(rect.width, 1);
    const displayHeight = Math.max(rect.height, 1);
    const expectedCanvasWidth = displayWidth * dpr;
    const expectedCanvasHeight = displayHeight * dpr;

    // Check if we need to resize - if so, resize and continue drawing
    if (Math.abs(canvas.width - expectedCanvasWidth) > 1 || 
        Math.abs(canvas.height - expectedCanvasHeight) > 1) {
      resize(canvas, ctx);
      // After resize, continue with drawing (resize will have updated canvas and context)
    }

    // Reset transform and set up scaling for drawing
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Clear the entire canvas (in CSS pixel coordinates after scaling)
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Set composite operation for glowing effect
    ctx.globalCompositeOperation = "screen";

    // Draw particles
    drawParticles(ctx);

    animationFrameId.current = window.requestAnimationFrame(() =>
      draw(canvas, ctx));
  };

  const drawParticles = (ctx) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i;
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

    x = particleProps[i];
    y = particleProps[i2];
    n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, { width, height }) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x,
    y,
    x2,
    y2,
    life,
    ttl,
    radius,
    hue,
    ctx,
  ) => {
    const alpha = fadeInOut(life, ttl);
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${alpha})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };

  const checkBounds = (x, y, dimensions) => {
    return x > dimensions.width || x < 0 || y > dimensions.height || y < 0;
  };

  const resize = (
    canvas,
    ctx,
  ) => {
    const container = containerRef.current;
    if (!container || !canvas) return;
    
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(rect.width, 1);
    const height = Math.max(rect.height, 1);
    const newWidth = Math.floor(width * dpr);
    const newHeight = Math.floor(height * dpr);

    // Check if dimensions actually changed
    const widthChanged = Math.abs(canvas.width - newWidth) > 1;
    const heightChanged = Math.abs(canvas.height - newHeight) > 1;
    const sizeChanged = widthChanged || heightChanged;
    
    // Always update canvas dimensions and style if needed
    if (sizeChanged) {
      const hadPreviousSize = canvas.width > 0 && canvas.height > 0;
      const oldWidth = hadPreviousSize ? canvas.width / dpr : width;
      const oldHeight = hadPreviousSize ? canvas.height / dpr : height;
      
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      if (ctx) {
        // Reset transform before scaling
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }

      center[0] = 0.5 * width;
      center[1] = 0.5 * height;

      // Reinitialize particles if this is first render or size changed significantly (more than 10%)
      if (!hadPreviousSize) {
        // First time setup - always init particles
        if (width > 0 && height > 0) {
          initParticles();
        }
      } else {
        // Size changed - check if change is significant
        const widthChangeRatio = Math.abs(width - oldWidth) / Math.max(oldWidth, 1);
        const heightChangeRatio = Math.abs(height - oldHeight) / Math.max(oldHeight, 1);
        
        if ((widthChangeRatio > 0.1 || heightChangeRatio > 0.1) && width > 0 && height > 0) {
          initParticles();
        }
      }
    } else {
      // Even if size didn't change, ensure center is correct
      center[0] = 0.5 * width;
      center[1] = 0.5 * height;
    }
  };


  const handleResize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      resize(canvas, ctx);
    }
  };

  useEffect(() => {
    // Use ResizeObserver to watch for container size changes
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(container);

    // Initial setup with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      setup();
    }, 150);

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 bg-transparent"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
        <canvas 
          ref={canvasRef}
          style={{
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        ></canvas>
      </motion.div>
      <div className={cn("relative z-10 h-full w-full", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
