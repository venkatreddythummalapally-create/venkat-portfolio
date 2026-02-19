import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiKubernetes,
  SiApachekafka,
  SiAngular,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: "easeOut" },
  }),
};

function Pill({ children }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function TiltCard({ children, className = "" }) {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rx = (y / r.height - 0.5) * -10;
    const ry = (x / r.width - 0.5) * 10;

    el.style.setProperty("--mx", `${(x / r.width) * 100}%`);
    el.style.setProperty("--my", `${(y / r.height) * 100}%`);
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };

  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div className="tilt-wrap">
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={
          "tilt-card relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/35 p-6 " +
          "shadow-[0_25px_60px_-30px_rgba(0,0,0,0.75)] backdrop-blur " +
          "transition-transform duration-150 will-change-transform " +
          className
        }
      >
        {/* inner glow */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,0.18), transparent 40%)",
            }}
          />
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-8">
      <div className="text-xs tracking-widest text-zinc-400">{kicker}</div>
      <h2 className="mt-2 text-2xl font-semibold text-zinc-100 md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-2 max-w-2xl text-sm text-zinc-300">{desc}</p> : null}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("home");

  const profile = useMemo(
    () => ({
      name: "Venkat Reddy",
      title: "Senior Java Full Stack Developer",
      tagline:
        "I build secure, scalable enterprise banking applications using Java, Spring Boot microservices, Angular, Kafka, and AWS (EKS/Lambda).",
      location: "United States",
      email: "venkat2022.grs@gmail.com",
      phone: "+1 (774) 708-2689",
      linkedin: "https://www.linkedin.com/in/venkatreddy235/",
      github: "https://github.com/venkatreddy-dev",
      resumeUrl: "/Venkat_Reddy_Resume.pdf",
      avatarUrl: "/profile.jpg", // put your image in public/profile.jpg
    }),
    []
  );

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Enterprise Banking Modernization (JPMorgan Chase)",
      stack: ["Java 17", "Spring Boot", "Kafka", "Angular 15+", "AWS EKS"],
      bullets: [
        "Modernized a legacy banking platform into a cloud-native microservices architecture with secure service-to-service communication.",
        "Designed REST & integration APIs with OAuth2/JWT and role-based access to support multiple banking modules safely.",
        "Improved performance using async patterns and clean service boundaries to reduce latency and production issues.",
        "Containerized services and deployed to EKS for stable releases and scalable operations.",
      ],
    },
    {
      title: "Banking Dashboard Platform (Barclays)",
      stack: ["Spring Boot", "PostgreSQL", "Messaging", "Azure Kubernetes"],
      bullets: [
        "Refactored core modules into microservices with better error handling and centralized logging.",
        "Stabilized peak-time workflows using async processing and safer retry strategies.",
      ],
    },
    {
      title: "Financial Workflow Automation (Cloud Express Solutions)",
      stack: ["Java/J2EE", "Hibernate", "REST/SOAP", "CI/CD"],
      bullets: [
        "Built transaction workflows and exposed REST/SOAP services with enterprise security patterns.",
        "Improved deployments and defect turnaround using automated pipelines and structured logs.",
      ],
    },
  ];

  const skills = [
    { label: "Java / Spring Boot / Microservices", value: 95 },
    { label: "AWS (EKS, Lambda, API Gateway, RDS, S3)", value: 90 },
    { label: "Kafka / Messaging", value: 90 },
    { label: "Angular / React", value: 88 },
    { label: "Docker / Kubernetes", value: 87 },
    { label: "CI/CD (Jenkins, GitHub Actions)", value: 85 },
  ];

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-500/18 blur-3xl" />
        <div className="absolute right-[-140px] top-[220px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-20 border-b border-zinc-900/80 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <div className="text-sm font-semibold">{profile.name}</div>
            <div className="text-xs text-zinc-400">{profile.title}</div>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={
                  "rounded-xl px-3 py-2 text-sm transition " +
                  (active === n.id
                    ? "bg-zinc-900 text-zinc-100"
                    : "text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-100")
                }
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-200 hover:bg-zinc-900"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-200 hover:bg-zinc-900"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section id="home" className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to new opportunities
            </div>

            {/* 3D / Gradient heading */}
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl tracking-tight">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
              .
              <br />
              I build{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                cloud-native
              </span>{" "}
              banking systems.
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-zinc-300 md:text-base">
              {profile.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeUrl}
                className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-95"
              >
                Download Resume
              </a>

              <button
                onClick={() => scrollTo("projects")}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                View Projects
              </button>

              <div className="flex flex-wrap gap-2">
                <Pill>Java 17</Pill>
                <Pill>Spring Boot</Pill>
                <Pill>AWS EKS</Pill>
                <Pill>Kafka</Pill>
                <Pill>Angular</Pill>
              </div>
            </div>
          </motion.div>

          {/* Right hero card with avatar */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <TiltCard className="relative">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={profile.avatarUrl}
                    alt="Venkat Reddy"
                    className="h-14 w-14 rounded-full border border-cyan-300/60 object-cover"
                  />
                  <div className="pointer-events-none absolute -inset-1 rounded-full bg-cyan-400/10 blur" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold">{profile.name}</div>
                  <div className="text-xs text-zinc-400">{profile.title}</div>
                </div>
              </div>

              <div className="mt-5 text-sm text-zinc-300">
                <span className="font-semibold text-zinc-100">Current Focus:</span>{" "}
                legacy modernization → microservices on AWS EKS with event-driven workflows.
              </div>

              <div className="mt-5 grid gap-3">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <FaMapMarkerAlt className="text-zinc-400" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <FaEnvelope className="text-zinc-400" />
                  {profile.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <FaPhoneAlt className="text-zinc-400" />
                  {profile.phone}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 scroll-mt-24">
          <SectionTitle
            kicker="ABOUT"
            title="A quick snapshot of my work"
            desc="7+ years delivering enterprise applications in banking/finance—mostly modernizing legacy systems into secure, scalable microservices."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <TiltCard>
              <div className="flex items-center gap-3">
                <SiSpringboot className="text-xl text-zinc-200" />
                <div className="text-sm font-semibold">Backend & Microservices</div>
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                I work mainly on Java + Spring Boot microservices, API design, security (OAuth2/JWT), and performance tuning.
              </p>
            </TiltCard>

            <TiltCard>
              <div className="flex items-center gap-3">
                <SiAngular className="text-xl text-zinc-200" />
                <div className="text-sm font-semibold">Frontend Delivery</div>
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                I build Angular-based dashboards that integrate cleanly with backend services, focusing on stability and user experience.
              </p>
            </TiltCard>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-16 scroll-mt-24">
          <SectionTitle kicker="EXPERIENCE" title="Where I’ve worked" />
          <div className="grid gap-5">
            <TiltCard>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-zinc-100">JPMorgan Chase</div>
                  <div className="text-xs text-zinc-400">
                    Mar 2022 – Present • Modernization, Microservices, AWS EKS
                  </div>
                </div>
                <Pill>Current</Pill>
              </div>
            </TiltCard>

            <TiltCard>
              <div>
                <div className="text-sm font-semibold text-zinc-100">Barclays Bank</div>
                <div className="text-xs text-zinc-400">
                  Microservices, PostgreSQL, Messaging, Azure Kubernetes
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div>
                <div className="text-sm font-semibold text-zinc-100">Cloud Express Solutions</div>
                <div className="text-xs text-zinc-400">
                  Java/J2EE, Hibernate, REST/SOAP, CI/CD
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16 scroll-mt-24">
          <SectionTitle
            kicker="PROJECTS"
            title="Featured work"
            desc="Portfolio-style summaries based on my client projects."
          />
          <div className="grid gap-5">
            {projects.map((p) => (
              <TiltCard key={p.title}>
                <div className="flex items-start justify-between gap-3">
                  <div className="text-base font-semibold">{p.title}</div>
                  <SiApachekafka className="text-xl text-zinc-300" />
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>• {b}</li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 scroll-mt-24">
          <SectionTitle kicker="SKILLS" title="Core strengths" />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((s) => (
              <TiltCard key={s.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-200">{s.label}</span>
                  <span className="text-zinc-400">{s.value}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-zinc-900">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill>Kafka</Pill>
            <Pill>Redis</Pill>
            <Pill>Docker</Pill>
            <Pill>Kubernetes</Pill>
            <Pill>CI/CD</Pill>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 scroll-mt-24">
          <SectionTitle kicker="CONTACT" title="Let’s connect" />
          <div className="grid gap-5 md:grid-cols-2">
            <TiltCard>
              <div className="text-sm font-semibold">Contact details</div>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-zinc-400" />
                  <a className="hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-zinc-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-zinc-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="text-sm font-semibold">Quick message</div>
              <p className="mt-2 text-sm text-zinc-300">
                This is UI-only. If you want, I can add EmailJS later.
              </p>
              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
                <input
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  placeholder="Your email"
                />
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  placeholder="Message"
                />
                <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-95">
                  Send Message
                </button>
              </form>
            </TiltCard>
          </div>
        </section>

        <footer className="mt-16 border-t border-zinc-900/80 py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with React • Tailwind • Framer Motion
        </footer>
      </main>
    </div>
  );
}
