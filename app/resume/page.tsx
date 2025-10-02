import { PipBoyLayout } from "@/components/pip-boy-layout"

export default function ResumePage() {
  const experience = [
    {
      year: "2075 - PRESENT",
      title: "SENIOR WASTELAND ENGINEER",
      company: "VAULT-TEC INDUSTRIES",
      description:
        "Lead development of critical infrastructure systems. Manage team of 5 engineers. Reduced system downtime by 60%.",
      achievements: [
        "Architected new settlement management platform",
        "Implemented real-time communication system",
        "Optimized resource allocation algorithms",
      ],
    },
    {
      year: "2073 - 2075",
      title: "FULL-STACK DEVELOPER",
      company: "BROTHERHOOD OF STEEL",
      description:
        "Built secure database systems for technology tracking. Developed mobile applications for field operations.",
      achievements: [
        "Created encrypted data transmission protocol",
        "Developed cross-platform mobile app",
        "Integrated biometric authentication",
      ],
    },
    {
      year: "2071 - 2073",
      title: "FRONTEND ENGINEER",
      company: "DIAMOND CITY TECH",
      description:
        "Designed and implemented user interfaces for trading platforms. Collaborated with designers and backend teams.",
      achievements: [
        "Rebuilt UI with modern framework",
        "Improved accessibility compliance to 100%",
        "Reduced page load times by 45%",
      ],
    },
  ]

  const skills = {
    PROGRAMMING: ["JavaScript / TypeScript", "Python", "C#", "SQL", "HTML / CSS"],
    FRAMEWORKS: ["React / Next.js", "Node.js", "Unity", "Godot", "Express"],
    TOOLS: ["Git / GitHub", "Docker", "Vercel", "Supabase", "Figma"],
    SPECIALTIES: ["UI/UX Design", "Accessibility", "Performance Optimization", "Game Development", "API Design"],
  }

  const education = [
    {
      year: "2067 - 2071",
      degree: "BACHELOR OF SCIENCE",
      field: "COMPUTER SCIENCE",
      institution: "COMMONWEALTH INSTITUTE OF TECHNOLOGY",
      honors: "SUMMA CUM LAUDE",
    },
    {
      year: "2072",
      degree: "CERTIFICATION",
      field: "ADVANCED TERMINAL SYSTEMS",
      institution: "ROBCO INDUSTRIES",
      honors: "DISTINCTION",
    },
  ]

  return (
    <PipBoyLayout>
      <div className="space-y-8">
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; LOADING PERSONNEL FILE...</div>
          <h1 className="text-3xl md:text-5xl font-bold">[RESUME]</h1>
          <div className="text-sm mt-2 opacity-80">PROFESSIONAL EXPERIENCE // SKILLS // EDUCATION</div>
        </div>

        {/* Contact Info */}
        <div className="border border-primary p-6 bg-background/50">
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[CONTACT INFORMATION]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="opacity-70 mb-1">EMAIL:</div>
              <div>vault.dweller@wasteland.com</div>
            </div>
            <div>
              <div className="opacity-70 mb-1">LOCATION:</div>
              <div>The Commonwealth, Wasteland</div>
            </div>
            <div>
              <div className="opacity-70 mb-1">GITHUB:</div>
              <div>github.com/vaultdweller</div>
            </div>
            <div>
              <div className="opacity-70 mb-1">PORTFOLIO:</div>
              <div>wasteland-dev.com</div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[WORK EXPERIENCE]</div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-2 border-primary p-6 bg-background/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <div className="text-sm opacity-80">{job.company}</div>
                  </div>
                  <div className="text-sm border border-primary px-3 py-1 whitespace-nowrap">{job.year}</div>
                </div>
                <p className="text-sm leading-relaxed mb-3 opacity-90">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▸</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[TECHNICAL SKILLS]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border border-primary p-4 bg-background/50">
                <div className="text-sm font-bold mb-3 opacity-70">{category}:</div>
                <div className="space-y-2">
                  {items.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">▸</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[EDUCATION]</div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-2 border-primary p-6 bg-background/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      {edu.degree} - {edu.field}
                    </h3>
                    <div className="text-sm opacity-80">{edu.institution}</div>
                  </div>
                  <div className="text-sm border border-primary px-3 py-1 whitespace-nowrap">{edu.year}</div>
                </div>
                <div className="text-sm">
                  <span className="opacity-70">HONORS: </span>
                  <span>{edu.honors}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="border border-primary p-6 bg-background/50 text-center">
          <button className="border-2 border-primary px-6 py-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-bold">
            ▼ DOWNLOAD FULL RESUME (PDF)
          </button>
        </div>
      </div>
    </PipBoyLayout>
  )
}
