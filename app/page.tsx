/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useEffect } from "react";

const iconProps = "h-4 w-4";

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconProps}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 7.4 4.6a1 1 0 0 0 1.2 0L20 8" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconProps}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 4H9l1.2 3.6-1.6 1.1a10 10 0 0 0 4.7 4.7l1.1-1.6L18 15v2.5a1 1 0 0 1-1.1 1A14 14 0 0 1 5.5 7.1 1 1 0 0 1 6.5 4Z"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconProps}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
    />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconProps}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 9.8 8.2 4.5 10 9.8 11.8 12 17l2.2-5.2L19.5 10l-5.3-1.8Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 5.5 5.4 7.1 4 7.5l1.4.4L6 9.5l.6-1.6L8 7.5l-1.4-.4Z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconProps}
  >
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h5m8 0h5" />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconProps}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 3 2.5 6.5L21 10l-5 4.4L17 21l-5-3-5 3 1-6.6L3 10l6.5-.5Z"
    />
  </svg>
);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    title: "Software Engineering Mentor",
    org: "WithinTech Rwanda",
    location: "Kigali, Rwanda",
    period: "2024 – Present",
    bullets: [
      "Mentored students in programming and technology.",
      "Supported young innovators building impactful tech solutions.",
      "Championed teamwork, critical thinking, and problem-solving.",
    ],
  },
  {
    title: "Embedded Systems & Frontend Developer",
    org: "EcoWatch Project (RCA Hackathon)",
    location: "Nyabihu, Rwanda",
    period: "2023 – 2024",
    bullets: [
      "Built IoT-driven environmental monitoring features.",
      "Collaborated with a multidisciplinary team from prototype to pitch.",
      "Presented during the award-winning RCA Hackathon challenge.",
    ],
  },
];

const projects = [
  {
    name: "EcoWatch",
    year: "2023–2024",
    detail:
      "IoT and software platform for environmental monitoring; combined sensors, embedded firmware, and a web interface.",
  },
  {
    name: "Health Prediction App",
    year: "2024",
    detail:
      "Machine learning powered predictions (Python) with a TypeScript UI for accessible health insights.",
  },
  {
    name: "FitTrack Mobile",
    year: "2024",
    detail:
      "React Native app for personal fitness tracking with clean UX and offline-friendly flows.",
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PHP", "Java Spring Boot", "Python"],
  },
  {
    title: "Embedded & AI",
    items: [
      "Arduino + sensors",
      "HC-05 Bluetooth",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Computer Vision & NLP",
    ],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Git/GitHub", "Postman", "Trello"],
  },
  {
    title: "Languages",
    items: ["JavaScript/TypeScript", "Python", "Java", "C", "C++"],
  },
];

const certificates = [
  "EcoWatch Hackathon Participation — Rwanda Coding Academy (2024)",
  "HerinTech Coding & Problem-Solving Summer Camp (2023)",
  "Ideation & Prototyping Certificate",
  "I Lead Rwanda — Leadership Certificate",
];

const interests = [
  "Exploring emerging technologies & open-source",
  "Mentorship and community tech engagement",
  "Cultural activities, travel, and innovation challenges",
];

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0ms";
            el.style.transitionDelay = delay;
            el.classList.add("show");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="hero-blob" />
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <SparkleIcon />
              Benie
            </span>
            <span className="hidden rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:inline">
              Frontend • Backend • Embedded
            </span>
          </div>
          <nav className="hidden items-center gap-2 text-sm font-semibold text-slate-700 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-14">
        <section
          id="about"
          className="reveal glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-transparent to-violet-50/90" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="relative h-40 w-40 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-400/30 to-emerald-400/30 blur-2xl" />
              <Image
                src="/profile.jpg.jpeg"
                alt="IRATUZI Benie Giramata smiling"
                fill
                priority
                className="rounded-[28px] border-4 border-white object-cover shadow-xl"
              />
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag flex items-center gap-2">
                  <SparkleIcon />
                  Software Developer
                </span>
                <span className="tag flex items-center gap-2">
                  <StarIcon />
                  Frontend & Backend
                </span>
                <span className="tag flex items-center gap-2">
                  <BriefcaseIcon />
                  Embedded Systems
                </span>
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
         IRATUZI Benie Giramata
                </h1>
                <p className="text-lg text-slate-700">
                  Motivated developer with experience in frontend, backend, embedded systems, and data-driven projects. I build solutions that serve communities and aim to further my studies in Data Science, AI, or Computer Science.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                  <MapPinIcon />
                  Kigali, Rwanda
                </span>
                <a
                  href="mailto:iratuzibeniegiramata@gmail.com"
                  className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <MailIcon />
                  iratuzibeniegiramata@gmail.com
                </a>
                <a
                  href="tel:+250795192369"
                  className="flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <PhoneIcon />
                  +250 795 192 369
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div
            className="reveal glass fade-card rounded-2xl border border-white/70 p-6"
            data-reveal-delay="0ms"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Focus
            </p>
            <p className="mt-3 text-slate-800">
              Frontend & backend development, embedded systems, and data/AI projects that connect technology to real-world challenges.
            </p>
          </div>
          <div
            className="reveal glass fade-card rounded-2xl border border-white/70 p-6"
            data-reveal-delay="80ms"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Strengths
            </p>
            <p className="mt-3 text-slate-800">
              Rapid prototyping, mentoring students, cross-disciplinary teamwork, and clear communication in fast-moving projects.
            </p>
          </div>
          <div
            className="reveal glass fade-card rounded-2xl border border-white/70 p-6"
            data-reveal-delay="160ms"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Goal
            </p>
            <p className="mt-3 text-slate-800">
              To study Data Science, AI, or Computer Science while building products that uplift communities.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="reveal glass rounded-3xl border border-white/80 p-8 shadow-lg"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Experience
              </p>
              <h2 className="text-2xl font-bold text-slate-900">Recent roles</h2>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Mentorship • IoT • Web
            </span>
          </div>
          <div className="mt-6 space-y-5">
            {experiences.map((exp) => (
              <div
                key={`${exp.title}-${exp.org}`}
                className="reveal fade-card rounded-2xl border border-slate-100/70 bg-white/80 p-5 transition"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-sm text-slate-600">
                      {exp.org} • {exp.location}
                    </p>
                  </div>
                      <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        <BriefcaseIcon />
                        Impact
                      </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {exp.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="reveal glass rounded-3xl border border-white/80 p-8 shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                Projects
              </p>
              <h2 className="text-2xl font-bold text-slate-900">Selected work</h2>
            </div>
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
              Full-stack • Mobile • IoT
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={project.name}
                className="reveal fade-card flex flex-col rounded-2xl border border-slate-100/80 bg-white/80 p-5"
                data-reveal-delay={`${idx * 80}ms`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {project.year}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="reveal glass rounded-3xl border border-white/80 p-8 shadow-lg"
        >
          <div className="flex flex-wrap items-start gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Skills
              </p>
              <h2 className="text-2xl font-bold text-slate-900">Technical toolkit</h2>
              <p className="max-w-xl text-sm text-slate-600">
                From React/Next.js frontends to Node, PHP, and Java backends, plus embedded systems and applied ML with TensorFlow and PyTorch.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3">
              {skills.map((group) => (
                <div
                  key={group.title}
                  className="reveal fade-card min-w-[220px] flex-1 rounded-2xl border border-slate-100/80 bg-white/80 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{group.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="grid gap-6 lg:grid-cols-2">
          <div className="reveal glass rounded-3xl border border-white/80 p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Certificates
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Recognition</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {certificates.map((cert, idx) => (
                <li
                  key={cert}
                  className="reveal fade-card rounded-2xl border border-slate-100/70 bg-white/60 p-3"
                  data-reveal-delay={`${idx * 70}ms`}
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal glass rounded-3xl border border-white/80 p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Languages & Interests
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Beyond the code</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div className="reveal fade-card rounded-2xl border border-slate-100/70 bg-white/60 p-3">
                <p className="font-semibold text-slate-900">Languages</p>
                <p>English (Fluent) • Kinyarwanda (Native) • Kiswahili (Basic)</p>
              </div>
              <div className="reveal fade-card rounded-2xl border border-slate-100/70 bg-white/60 p-3">
                <p className="font-semibold text-slate-900">Interests</p>
                <ul className="mt-2 space-y-2">
                  {interests.map((interest) => (
                    <li key={interest} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="reveal glass rounded-3xl border border-white/80 p-8 shadow-lg"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Contact
              </p>
              <h2 className="text-2xl font-bold text-slate-900">Let&apos;s work together</h2>
              <p className="max-w-xl text-sm text-slate-700">
                Reach out for collaborations, mentorship, or new opportunities in frontend, backend, embedded systems, or AI projects.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:iratuzibeniegiramata@gmail.com"
                className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <MailIcon />
                Email me
              </a>
              <a
                href="tel:+250795192369"
                className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <PhoneIcon />
                Call
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="reveal fade-card rounded-2xl border border-slate-100/80 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <a
                href="mailto:iratuzibeniegiramata@gmail.com"
                className="text-sm text-blue-700 underline-offset-4 hover:underline"
              >
                <span className="inline-flex items-center gap-2">
                  <MailIcon />
                  iratuzibeniegiramata@gmail.com
                </span>
              </a>
            </div>
            <div className="reveal fade-card rounded-2xl border border-slate-100/80 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-900">Phone</p>
              <a
                href="tel:+250795192369"
                className="text-sm text-blue-700 underline-offset-4 hover:underline"
              >
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon />
                  +250 795 192 369
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
