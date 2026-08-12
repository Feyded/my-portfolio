import { useEffect, useRef } from "react";

type ClickStream = {
  x: number;
  y: number;
  speed: number;
  length: number;
};

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FONT_SIZE = 18;
    const SPEED = 0.15;
    const ACTIVE_STREAMS = 4;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let animationId: number;
    let columns = 0;
    let drops: number[] = [];
    const clickStreams: ClickStream[] = [];

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const initializeDrops = () => {
      columns = Math.floor(canvas.width / FONT_SIZE);

      drops = Array(columns).fill(-1);

      const used = new Set<number>();

      while (used.size < ACTIVE_STREAMS) {
        const col = Math.floor(Math.random() * columns);

        if (!used.has(col)) {
          used.add(col);
          drops[col] = Math.random() * (canvas.height / FONT_SIZE);
        }
      }
    };

    const spawnNewStream = () => {
      let newCol: number;

      do {
        newCol = Math.floor(Math.random() * columns);
      } while (drops[newCol] !== -1);

      drops[newCol] = -Math.random() * 50;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeDrops();
    };

    const handleClick = (e: MouseEvent) => {
      clickStreams.push({
        x: e.clientX,
        y: e.clientY,
        speed: 0.15,
        length: 20,
      });
    };

    const drawBackgroundRain = () => {
      ctx.fillStyle = "#5eead4";
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] === -1) continue;

        ctx.fillText(randomChar(), i * FONT_SIZE, drops[i] * FONT_SIZE);

        drops[i] += SPEED;

        if (drops[i] * FONT_SIZE > canvas.height) {
          drops[i] = -1;
          spawnNewStream();
        }
      }
    };

    const drawClickStreams = () => {
      for (let i = clickStreams.length - 1; i >= 0; i--) {
        const stream = clickStreams[i];

        for (let j = 0; j < stream.length; j++) {
          const opacity = 1 - j / stream.length;

          ctx.fillStyle = j === 0 ? "#ffffff" : `rgba(94,234,212,${opacity})`;
          ctx.fillText(randomChar(), stream.x, stream.y - j * FONT_SIZE);
        }

        stream.y += stream.speed * FONT_SIZE;

        if (stream.y > canvas.height + stream.length * FONT_SIZE) {
          clickStreams.splice(i, 1);
        }
      }
    };

    const draw = () => {
      // Long fading trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawBackgroundRain();
      drawClickStreams();

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        background: "#000",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </div>
  );
}
