import React, { useState, type ComponentType } from "react";
import {
  FolderGit2 as Github,
  ExternalLink,
  Mail,
  GraduationCap,
  User,
} from "lucide-react";
import MatrixBackground from "./components/matrix-background";
import profile from "@/assets/profile.jpg";

/* ---------- design tokens ---------- */
const T = {
  bg: "#07080C",
  bgPanel: "#111319",
  bgPanelHover: "#161923",
  text: "#ECEEF3",
  textDim: "#8A90A3",
  textFaint: "#565C70",
  accent: "#5EEAD4",
  accent2: "#A78BFA",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.18)",
};

/* set these to your own image URLs to replace the placeholders */
const PHOTO_URL = profile;

/* ---------- tool logo icons (simplified brand marks) ---------- */
const ICONS: Record<string, ComponentType> = {
  React: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.3">
        <ellipse cx="12" cy="12" rx="10" ry="4.1" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.1"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.1"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#3178C6" />
      <text
        x="12"
        y="16"
        fontSize="9"
        fontWeight="700"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        TS
      </text>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 12.5c.8-3 2.4-4.5 5-4.5 3 0 4 2.2 5.5 2.7-1-1.6-2.6-3.7-5.5-3.7-3.2 0-5.3 2-6 4.5"
        stroke="#38BDF8"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M1 17c.8-3 2.4-4.5 5-4.5 3 0 4 2.2 5.5 2.7-1-1.6-2.6-3.7-5.5-3.7-3.2 0-5.3 2-6 4.5"
        stroke="#38BDF8"
        strokeWidth="1.7"
        strokeLinecap="round"
        transform="translate(6 0)"
      />
    </svg>
  ),
  Vue: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h4.2L12 12.2 16.8 4H21L12 20 3 4Z"
        stroke="#42B883"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 4 12 12.2 16.8 4"
        stroke="#35495E"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Shadcn: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 7h12"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 12h8"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 17h12"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  TanStackQuery: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 8c0-2 1.5-3.5 3.5-3.5S14 6 14 8"
        stroke="#FF4154"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 16c0 2-1.5 3.5-3.5 3.5S10 18 10 16"
        stroke="#FFB347"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 8h3M7 16h3"
        stroke="#FF4154"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Vuetify: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5 12 19 20 5"
        stroke="#1867C0"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 5 12 12 16 5"
        stroke="#1867C0"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 18 6.5v7L12 17l-6-3.5v-7L12 3Z"
        stroke="#FF2D20"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v7m0 0 6-3.5m-6 3.5-6-3.5"
        stroke="#FF2D20"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  Hono: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 5v14"
        stroke="#F97316"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 5v14"
        stroke="#F97316"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 12h12"
        stroke="#F97316"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Node.js": () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 19 7v10l-7 4-7-4V7l7-4Z"
        stroke="#68A063"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 7v10"
        stroke="#68A063"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#1A1A1A" />
      <text
        x="12"
        y="16"
        fontSize="9"
        fontWeight="700"
        fill="#fff"
        textAnchor="middle"
        fontStyle="italic"
        fontFamily="Georgia"
      >
        ex
      </text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c-3 0-5 1-5 4v3h5v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-2 1.5-3 3-3h4c2 0 3-1 3-3V6c0-2.5-2-4-5-4z"
        fill="#3776AB"
      />
      <path
        d="M12 22c3 0 5-1 5-4v-3h-5v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v3c0 2-1.5 3-3 3h-4c-2 0-3 1-3 3v3c0 2.5 2 4 5 4z"
        fill="#FFD43B"
      />
    </svg>
  ),
  Django: () => (
    <svg viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#0C4B33" />
      <text
        x="12"
        y="16"
        fontSize="8.5"
        fontWeight="700"
        fill="#44B78B"
        textAnchor="middle"
        fontFamily="Georgia"
      >
        Dj
      </text>
    </svg>
  ),
  GraphQL: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 21,7.5 21,16.5 12,22 3,16.5 3,7.5"
        stroke="#E10098"
        strokeWidth="1.3"
      />
      {[
        [12, 2],
        [21, 7.5],
        [21, 16.5],
        [12, 22],
        [3, 16.5],
        [3, 7.5],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="#E10098" />
      ))}
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#336791" />
      <text
        x="12"
        y="15.5"
        fontSize="7"
        fontWeight="700"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        SQL
      </text>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c3 3 5 7 5 11 0 4-2.5 6.5-5 8-2.5-1.5-5-4-5-8 0-4 2-8 5-11z"
        fill="#47A248"
      />
      <line x1="12" y1="10" x2="12" y2="22" stroke="#E8F5E9" strokeWidth="1" />
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 18c0-3.5 2.2-6.5 5.5-8.5"
        stroke="#4479A1"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12.5 9.5c2.5 0 4.5 1.8 4.5 4.5"
        stroke="#4479A1"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 6c2.5 0 5 1 7 3"
        stroke="#4479A1"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="14" r="1" fill="#4479A1" />
    </svg>
  ),
  Nginx: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 20 8v8l-8 5-8-5V8l8-5Z"
        stroke="#009639"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 15V9l8 6V9"
        stroke="#009639"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24">
      <g fill="#2496ED">
        <rect x="2" y="10" width="4" height="4" rx="0.6" />
        <rect x="7" y="10" width="4" height="4" rx="0.6" />
        <rect x="12" y="10" width="4" height="4" rx="0.6" />
        <rect x="7" y="5" width="4" height="4" rx="0.6" />
        <rect x="12" y="5" width="4" height="4" rx="0.6" />
        <path d="M1 14.5c1.5 4 5 6.5 10 6.5 6.5 0 11-3.5 12.5-9-1 .6-2.2.9-3 .5-.3-1-.9-1.7-.9-1.7s-.9.9-1.9.9c-.5-1-1.4-1.7-1.4-1.7s-1 1-2 1H1z" />
      </g>
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 24 24">
      <text
        x="12"
        y="14"
        fontSize="8"
        fontWeight="800"
        fill="#FF9900"
        textAnchor="middle"
        fontFamily="Arial"
      >
        aws
      </text>
      <path
        d="M4 17c4 2 12 2 16 0"
        stroke="#FF9900"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="18" r="2" fill="#F05033" />
      <circle cx="6" cy="6" r="2" fill="#F05033" />
      <circle cx="17" cy="12" r="2" fill="#F05033" />
      <path d="M6 8v8M6 8c0 4 4 4 9 4" stroke="#F05033" strokeWidth="1.4" />
    </svg>
  ),
  Vitest: () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#1ffb89" />
      <text
        x="12"
        y="16.5"
        fontSize="11"
        fontWeight="700"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Georgia"
      >
        V
      </text>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#181717" />
      <path
        fill="#fff"
        d="M12 5a7 7 0 00-2.2 13.6c.35.06.48-.15.48-.34v-1.3c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.08 1.65.77 2.05.59.06-.46.24-.77.44-.95-1.56-.18-3.2-.78-3.2-3.48 0-.77.27-1.4.72-1.9-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72a6.7 6.7 0 013.5 0c1.34-.91 1.93-.72 1.93-.72.38.97.14 1.69.07 1.87.45.5.72 1.13.72 1.9 0 2.71-1.64 3.3-3.2 3.47.25.22.47.64.47 1.3v1.93c0 .19.13.4.49.34A7 7 0 0012 5z"
      />
    </svg>
  ),
  Linux: () => (
    <svg viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#0B0B0B" />
      <text
        x="12"
        y="15.5"
        fontSize="8"
        fontWeight="700"
        fill="#FCC624"
        textAnchor="middle"
        fontFamily="monospace"
      >
        &gt;_
      </text>
    </svg>
  ),
};

/* ---------- data ---------- */
const SKILLS = [
  {
    group: "Frontend",
    items: [
      "React",
      "Vue",
      "TypeScript",
      "Tailwind",
      "Vuetify",
      "Shadcn",
      "TanStackQuery",
    ],
  },
  {
    group: "Backend",
    items: ["Laravel", "Node.js", "Express", "Hono", "Python"],
  },
  {
    group: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "Nginx", "Docker"],
  },
  { group: "Tooling", items: ["Git", "Vitest", "GitHub", "Linux"] },
];

const WORK = [
  {
    role: "Full Stack Developer",
    company: "NSJ Tech",
    period: "2025 — Present",
    bullets: [
      "Developed and maintained HRIS systems for clients, handling end-to-end feature development, bug fixes, and production deployments",
      "Built core modules including payroll computation, attendance tracking, leave management, overtime processing, scheduling, payroll and multi-level approval workflows",
      "Implemented an AI-powered employee attendance system using human for facial detection and recognition, enabling employees to clock in and out through face verification",
      "Integrated Google's Gemini AI into the HRIS platform, enabling employees to access HR information and self-service support for leave, attendance, payroll, and company policies through an AI-powered chatbot.",
      "Implemented Laravel Queues for sending automated emails and Scheduler for monthly leave balance updates",
      "Designed and integrated RESTful APIs between frontend and backend systems",
      "Implemented GitHub CI/CD pipeline to automate deployment and ensure repeatable release workflows",
      "Generated dynamic PDF reports and Excel exports for payroll, attendance, and HR analytics",
      "Developed Python automation scripts (openpyxl, pandas) for data extraction and Excel processing workflows",
    ],
  },
  {
    role: "Front End Developer",
    company: "Hytec Power Inc.",
    period: "2024 — 2025",
    bullets: [
      "Built internal web applications (HRIS, Task Management, KPI Tracking, Attendance) from scratch, attend meetings, meet deadlines, help with team objectives and successfully deployed within a month",
      "Manage Deployments using Control Web Panel",
      "Collaborated with backend developers to integrate Laravel APIs and implement dynamic data",
      "Worked closely with designers to convert Figma/UI designs into pixel-perfect layouts",
      "Implemented form validations, interactive dashboards, and reusable UI components to streamline workflows Created reusable and scalable components for a modular front-end architecture",
    ],
  },
];

/* set an `image` URL on any project to replace its screenshot placeholder */
// const PROJECTS = [
//   {
//     name: "Medical Appointment for Trinity Asia",
//     period: "2025",
//     image: "",
//     description:
//       "Personal finance dashboard that links bank accounts, visualizes spending trends, and forecasts monthly cash flow. Built and shipped solo — now used by over 1,200 people.",
//     stack: ["React", "Node.js", "PostgreSQL"],
//     github: "https://github.com",
//     demo: "#",
//   },
//   {
//     name: "Loop",
//     period: "2024",
//     image: "",
//     description:
//       "Real-time collaborative whiteboard with multiplayer cursors and conflict-free sync. Led the frontend and built the canvas synchronization engine.",
//     stack: ["Next.js", "Socket.io", "Redis"],
//     github: "https://github.com",
//     demo: "#",
//   },
//   {
//     name: "ShelfSense",
//     period: "2023",
//     image: "",
//     description:
//       "Inventory forecasting tool that predicts restock timing for small retailers from historical sales data. Owned the backend and data pipeline end to end.",
//     stack: ["Python", "Django", "AWS"],
//     github: "https://github.com",
//     demo: "#",
//   },
// ];

/* ---------- building blocks ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: T.accent,
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}

function LogoTile({ name }: { name: string }) {
  const Icon = ICONS[name];
  return (
    <div
      className="logo-tile"
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "7px",
          overflow: "hidden",
          flexShrink: 0,
          border: `1px solid ${T.border}`,
        }}
      >
        {Icon ? <Icon /> : null}
      </div>
      <span style={{ fontSize: "13.5px", color: T.textDim }}>{name}</span>
    </div>
  );
}

function AvatarFrame({ src }: { src: string }) {
  return (
    <div
      style={{
        width: "230px",
        height: "230px",
        borderRadius: "22px",
        border: `1px dashed ${T.borderStrong}`,
        overflow: "hidden",
        flexShrink: 0,
        background: T.bgPanel,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <img
          src={src}
          alt="Profile portrait"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div style={{ textAlign: "center", color: T.textFaint }}>
          <User size={26} style={{ margin: "0 auto" }} />
          <div
            style={{
              fontSize: "10.5px",
              marginTop: "8px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Add photo
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [year] = useState(new Date().getFullYear());
  const linkStyle = { color: T.textDim, textDecoration: "none" };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: T.bg,
        color: T.text,
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        a { transition: color 0.15s ease, opacity 0.15s ease; }
        a:hover { color: ${T.accent} !important; }
        .card { transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease; }
        .card:hover { border-color: ${T.borderStrong}; transform: translateY(-2px); background: ${T.bgPanelHover}; }
        .logo-tile { transition: transform 0.15s ease; }
        .logo-tile:hover { transform: translateX(2px); }
        .logo-tile:hover span { color: ${T.text}; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${T.accent}; outline-offset: 3px; }

        .dot-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 15%, #000 40%, transparent 100%);
        }
        .vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 70% at 50% 0%, transparent 35%, ${T.bg} 100%);
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.001ms !important; }
        }
      `}</style>

      <MatrixBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* NAV */}
        <nav
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "28px 24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "-0.01em",
            }}
          >
            Dean Andrew Zaballero
          </span>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
            <a href="#education" style={linkStyle}>
              Education
            </a>
            <a href="#experience" style={linkStyle}>
              Experience
            </a>
            <a href="#projects" style={linkStyle}>
              Projects
            </a>
            <a href="#skills" style={linkStyle}>
              Skills
            </a>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </div>
        </nav>

        {/* HERO */}
        <header
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "110px 24px 90px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "64px",
              flexWrap: "wrap",
            }}
          >
            {/* Left Side - Photo */}
            <div
              style={{
                flexShrink: 0,
              }}
            >
              <AvatarFrame src={PHOTO_URL} />
            </div>

            {/* Right Side - Content */}
            <div
              style={{
                flex: "1 1 500px",
                minWidth: 0,
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "32px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: T.accent,
                  marginBottom: "16px",
                }}
              >
                Full-Stack Developer
              </h1>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: T.textDim,
                  maxWidth: "600px",
                }}
              >
                Full-Stack Developer focused on building modern web
                applications, from backend architecture and APIs to responsive
                user interfaces and deployment.
              </p>
            </div>
          </div>
        </header>

        {/* EDUCATION */}
        <section
          id="education"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "0 24px 90px",
          }}
        >
          <SectionLabel>Education</SectionLabel>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              border: `1px solid ${T.border}`,
              borderRadius: "10px",
              padding: "24px",
              background: T.bgPanel,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "rgba(94,234,212,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <GraduationCap size={19} color={T.accent} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                B.S. in Information Technology
              </div>
              <div
                style={{ fontSize: "14px", color: T.textDim, marginTop: "4px" }}
              >
                STI College · 2019 – 2024
              </div>
              <div
                style={{
                  fontSize: "13.5px",
                  color: T.textFaint,
                  marginTop: "8px",
                  lineHeight: 1.6,
                }}
              >
                Became a Codefest Champion at the branch level and represented
                the school in the Inter-School Programming Competition.
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "0 24px 90px",
          }}
        >
          <SectionLabel>Experience</SectionLabel>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {WORK.map((job) => (
              <div
                key={job.company}
                className="card"
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: "10px",
                  padding: "26px",
                  background: T.bgPanel,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "17px",
                      }}
                    >
                      {job.role}
                    </span>
                    <span style={{ color: T.textFaint }}> · {job.company}</span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: T.textFaint,
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                <ul
                  style={{ margin: "14px 0 0", padding: 0, listStyle: "none" }}
                >
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        textAlign: "left",
                        fontSize: "14.5px",
                        lineHeight: 1.65,
                        color: T.textDim,
                        marginTop: i ? "8px" : 0,
                      }}
                    >
                      <span style={{ color: T.accent, flexShrink: 0 }}>–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        {/* <section
          id="projects"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "0 24px 90px",
          }}
        >
          <SectionLabel>Projects</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="card"
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: "10px",
                  padding: "18px",
                  background: T.bgPanel,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ProjectThumb src={p.image} name={p.name} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      margin: 0,
                    }}
                  >
                    {p.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11.5px",
                      color: T.textFaint,
                    }}
                  >
                    {p.period}
                  </span>
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: T.textDim,
                    flexGrow: 1,
                  }}
                >
                  {p.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: T.accent2,
                        border: `1px solid ${T.border}`,
                        borderRadius: "5px",
                        padding: "3px 8px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginTop: "18px",
                    paddingTop: "16px",
                    borderTop: `1px solid ${T.border}`,
                  }}
                >
                  <a
                    href={p.github}
                    style={{
                      ...linkStyle,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12.5px",
                    }}
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={p.demo}
                    style={{
                      ...linkStyle,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12.5px",
                    }}
                  >
                    <ArrowUpRight size={14} /> Live demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* SKILLS */}
        <section
          id="skills"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "0 24px 90px",
          }}
        >
          <SectionLabel>Skills</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "28px",
            }}
          >
            {SKILLS.map((g) => (
              <div key={g.group}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: T.text,
                    marginBottom: "14px",
                  }}
                >
                  {g.group}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {g.items.map((s) => (
                    <LogoTile key={s} name={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer
          id="contact"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "48px 24px 60px",
            borderTop: `1px solid ${T.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "22px",
              fontSize: "13.5px",
            }}
          >
            <a
              href="mailto:dean.zaballero@gmail.com"
              style={{
                ...linkStyle,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Mail size={14} /> Email
            </a>
            <a
              href="https://github.com/feyded"
              style={{
                ...linkStyle,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="#"
              style={{
                ...linkStyle,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ExternalLink size={14} /> Resume
            </a>
          </div>
          <div
            style={{
              marginTop: "40px",
              fontSize: "12px",
              color: T.textFaint,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            © {year} Dean Andrew Zaballero
          </div>
        </footer>
      </div>
    </div>
  );
}
