import { PipBoyLayout } from "@/components/pip-boy-layout"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "005",
      name: "AUTONOMOUS PAC-MAN ROBOT",
      category: "ROBOTICS",
      status: "OPERATIONAL",
      description:
        "Implemented custom ROS2 nodes for motor control, odometry, and sensor fusion on a Raspberry Pi, achieving 5cm navigation accuracy via RRT path planning and lidar scan-matching (>80% drift reduction) and designed a state machine for dynamic task prioritization, processing real-time scan data and environmental inputs to optimize robot behavior.",
      tech: ["ROS2", "PYTHON", "OPENCV", "GIT"],
      year: "2025",
      image: "/assets/photos/projects/pacman-robot.jpg",
    },
    {
      id: "004",
      name: "THE ARBITER: DYNAMIC OBSTACLE-AVOIDING BOT",
      category: "MOTION PLANNING",
      status: "OPERATIONAL",
      description:
        "Developed a 2D autonomous agent in Python that captures a flag and returns while avoiding collisions in a dynamic environment with static and predicted dynamic obstacles. Implemented 3 motion planners: 2D RRT, 3D RRT with time coordination, and PRM with A* and a nonlinear cost function penalizing proximity to enemy FOV (cone-based, angle + range buffered). Built a dual-visualization GUI (Tkinter + Matplotlib + Pygame) for real-time path-following and occupancy grid monitoring, supporting iterative debugging and planner validation.",
      tech: ["PYTHON", "TKINTER", "GIT"],
      year: "2025",
      image: "/assets/photos/projects/arbiter.jpg",
      pdfs: [{ name: "TECHNICAL PAPER", url: "/assets/pdfs/Arbiter_final_paper.pdf" }],
    },
    {
      id: "003",
      name: "D* LITE ALGORITHM IMPLEMENTATION",
      category: "PATH PLANNING",
      status: "OPERATIONAL",
      description:
        "Implemented a real-time path planning system using D* Lite and A* search in Python, enabling dynamic replanning in response to environmental changes with sub-50ms update times. Modeled the environment with a grid-based occupancy map and integrated enemy field-of-view constraints to ensure safe, collision-free navigation under uncertainty. Built an interactive visualization interface using Matplotlib, Pygame, and Tkinter to display robot movement, obstacle dynamics, and trajectory adjustments in real time.",
      tech: ["PYTHON", "TKINTER", "GIT"],
      year: "2024",
      image: "/assets/photos/projects/dstar-lite.jpg",
      pdfs: [{ name: "TECHNICAL PAPER", url: "/assets/pdfs/D_star_lite_final_paper.pdf" }],
    },
    {
      id: "002",
      name: "ROBOTIC GUITAR PLAYING SYSTEM",
      category: "ROBOTICS",
      status: "OPERATIONAL",
      description:
        "Engineered a 45-DOF bimanual robotic system using the Shadow Robot Hand URDF in ROS, implemented damped least-squares inverse kinematics for task-prioritized motion planning, and wrote algorithms for chord progression and strumming patterns within ROS.",
      tech: ["ROS2", "PYTHON", "GIT"],
      year: "2024",
      image: "/assets/photos/projects/guitar-robot.jpg",
      pdfs: [{ name: "BOT DYLAN PAPER", url: "/assets/pdfs/bot-dylan.pdf" }],
    },
    {
      id: "001",
      name: "AUTONOMOUS COMPUTER VISION TRACKING",
      category: "COMPUTER VISION",
      status: "OPERATIONAL",
      description:
        "Built a dual-mode vision system (PyTorch CNN eye detection + adaptive HSV object tracking) with >85% accuracy, implemented quartic spline motion smoothing, and designed an optimized 3D-printed pan/tilt platform.",
      tech: ["OPENCV", "PYTHON", "SOLIDWORKS", "3D PRINTING"],
      year: "2022",
      image: "/assets/photos/projects/vision-tracking.jpg",
      pdfs: [{ name: "PILLARS FORUM POSTER", url: "/assets/pdfs/PILLARS-Forum-Poster.pdf" }],
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
              {project.image && (
                <div className="mb-4 border border-primary overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                    style={{ filter: "sepia(0.3) contrast(1.1)" }}
                  />
                </div>
              )}

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

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs border border-primary/50 px-2 py-1 bg-background/50">
                    {tech}
                  </span>
                ))}
              </div>

              {project.pdfs && project.pdfs.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-primary/30">
                  {project.pdfs.map((pdf, index) => (
                    <Link
                      key={index}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs border-2 border-primary px-3 py-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      ▼ {pdf.name}
                    </Link>
                  ))}
                </div>
              )}
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
