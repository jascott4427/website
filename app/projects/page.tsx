import { PipBoyLayout } from "@/components/pip-boy-layout"

export default function ProjectsPage() {
  const projects = [
    {
      id: "001",
      name: "VAULT-TEC TRADING SYSTEM",
      category: "E-COMMERCE",
      status: "OPERATIONAL",
      description:
        "Full-stack trading platform for wasteland merchants. Built with Next.js, PostgreSQL, and Stripe integration.",
      tech: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "STRIPE"],
      year: "2077",
    },
    {
      id: "002",
      name: "BROTHERHOOD DATABASE",
      category: "DATA MANAGEMENT",
      status: "OPERATIONAL",
      description:
        "Secure database system for tracking technology and resources. Features real-time updates and advanced search.",
      tech: ["REACT", "SUPABASE", "TAILWIND", "WEBSOCKETS"],
      year: "2077",
    },
    {
      id: "003",
      name: "SETTLEMENT BUILDER",
      category: "PRODUCTIVITY",
      status: "OPERATIONAL",
      description:
        "Interactive planning tool for wasteland settlements. Drag-and-drop interface with resource calculations.",
      tech: ["REACT", "CANVAS API", "ZUSTAND", "FRAMER MOTION"],
      year: "2076",
    },
    {
      id: "004",
      name: "RADIO FREEDOM APP",
      category: "MEDIA",
      status: "OPERATIONAL",
      description:
        "Streaming platform for wasteland radio stations. Features playlist management and live broadcasting.",
      tech: ["NEXT.JS", "WEB AUDIO API", "REDIS", "VERCEL"],
      year: "2076",
    },
    {
      id: "005",
      name: "CARAVAN TRACKER",
      category: "LOGISTICS",
      status: "MAINTENANCE",
      description: "Real-time tracking system for trade caravans. GPS integration and route optimization algorithms.",
      tech: ["REACT NATIVE", "MAPBOX", "MONGODB", "EXPRESS"],
      year: "2075",
    },
    {
      id: "006",
      name: "WASTELAND WEATHER",
      category: "UTILITY",
      status: "OPERATIONAL",
      description: "Radiation and weather monitoring system. Provides alerts for rad storms and safe travel windows.",
      tech: ["NEXT.JS", "OPENWEATHER API", "CHART.JS", "PWA"],
      year: "2075",
    },
  ]

  return (
    <PipBoyLayout>
      <div className="space-y-6">
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; LOADING PROJECT DATABASE...</div>
          <h1 className="text-3xl md:text-5xl font-bold">[ALL PROJECTS]</h1>
          <div className="text-sm mt-2 opacity-80">TOTAL ENTRIES: {projects.length} // STATUS: ACTIVE</div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-primary p-4 md:p-6 bg-background/50 hover:bg-primary/5 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs opacity-70">#{project.id}</span>
                    <h2 className="text-xl md:text-2xl font-bold">{project.name}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs mb-3">
                    <span className="border border-primary px-2 py-1">{project.category}</span>
                    <span
                      className={`border px-2 py-1 ${
                        project.status === "OPERATIONAL" ? "border-primary bg-primary/20" : "border-primary/50"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="border border-primary/50 px-2 py-1">{project.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4 opacity-90">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs border border-primary/50 px-2 py-1 bg-background/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-primary p-4 bg-background/50 text-center">
          <div className="text-sm opacity-70">&gt; END OF PROJECT LIST // MORE PROJECTS IN DEVELOPMENT</div>
        </div>
      </div>
    </PipBoyLayout>
  )
}
