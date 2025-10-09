import { PipBoyLayout } from "@/components/pip-boy-layout"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <PipBoyLayout>
      <div className="space-y-8">
        {/* Terminal Header */}
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; ACCESSING PERSONAL DATA...</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">James A. Scott III</h1>
          <div className="text-xl md:text-2xl opacity-80">MECHANICAL & ROBOTICS ENGINEER // VAULT DWELLER</div>
        </div>

        {/* Profile Photo Section */}
        <div className="flex justify-center">
          <div className="border-2 border-primary p-2 bg-background/50">
            <Image
              src="/assets/photos/profile/avatar.jpg"
              alt="Profile Photo"
              width={300}
              height={300}
              className="object-cover"
              style={{ filter: "sepia(0.4) contrast(1.2)" }}
            />
          </div>
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-primary p-4 bg-background/50">
            <div className="text-lg font-bold mb-3 border-b border-primary pb-2">[S.P.E.C.I.A.L.]</div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span>STRENGTH:</span>
                <span>▮▮▮▮▮▮▮▮▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>PERCEPTION:</span>
                <span>▮▮▮▮▮▮▮▮▮▯</span>
              </div>
              <div className="flex justify-between">
                <span>ENDURANCE:</span>
                <span>▮▮▮▮▮▮▮▯▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>CHARISMA:</span>
                <span>▮▮▮▮▮▮▮▮▮▯</span>
              </div>
              <div className="flex justify-between">
                <span>INTELLIGENCE:</span>
                <span>▮▮▮▮▮▮▮▮▮▮</span>
              </div>
              <div className="flex justify-between">
                <span>AGILITY:</span>
                <span>▮▮▮▮▮▮▯▯▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>LUCK:</span>
                <span>▮▯▯▯▯▯▯▯▯▯</span>
              </div>
            </div>
          </div>

          <div className="border border-primary p-4 bg-background/50">
            <div className="text-lg font-bold mb-3 border-b border-primary pb-2">[STATUS]</div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>&gt; SCHOOL: California Institute of Technology</p>
              <p>&gt; QUALIFICATIONS: B.S. Mechanical Engineering</p>
              <p>&gt; STATUS: Finalizing undergraduate studies</p>
              <p>&gt; SPECIALIZATION: Robotics & autonomous systems</p>
              <p>&gt; LOCATION: USA /// Clearance for relocation granted</p>
              <p>
                &gt; PRIMARY DIRECTIVE: Seeking full-time engineering roles in robotics, mechatronics, computer vision,
                and rapid prototyping
              </p>
              <p>&gt; MISSION: To design and deploy innovative systems that solve complex real-world problems</p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="border border-primary p-6 bg-background/50">
          <div className="text-lg font-bold mb-4 border-b border-primary pb-2">[PERSONAL LOG]</div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              &gt; Day 2,847: Field deployment of Mark IV maintenance drone successful. Settlement reports a 40%
              increase in operational uptime for perimeter defense systems.
            </p>
            <p>
              &gt; Design and fabrication of robust electromechanical systems. Focus on the integration of hardware and
              software—creating functional prototypes that transition seamlessly from CAD model to physical reality.
            </p>
            <p>
              &gt; When I'm not coding, you'll find me exploring the wasteland, collecting bottle caps, and occasionally
              fighting off radroaches. The post-apocalyptic life of an engineer is never boring.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/projects"
            className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors"
          >
            <div className="text-3xl mb-2">▣</div>
            <div className="text-xs">VIEW PROJECTS</div>
          </Link>
          <Link
            href="/hobbies"
            className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors"
          >
            <div className="text-3xl mb-2">♦</div>
            <div className="text-xs">HOBBIES</div>
          </Link>
          <Link
            href="/gamedev"
            className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors"
          >
            <div className="text-3xl mb-2">▲</div>
            <div className="text-xs">GAME DEV</div>
          </Link>
          <Link
            href="/resume"
            className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors"
          >
            <div className="text-3xl mb-2">■</div>
            <div className="text-xs">RESUME</div>
          </Link>
        </div>
      </div>
    </PipBoyLayout>
  )
}
