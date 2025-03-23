import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-12">
        {/* About Me Section */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Mechanical Engineer & Roboticist with full-stack development skills.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src="/profile.jpg"
                  alt="Pietro Zullo"
                  className="aspect-square h-full w-full object-cover mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400?text=Pietro+Zullo";
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Pietro Zullo</h3>
                <p className="text-sm text-muted-foreground">Mechanical Engineer & Roboticist</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  Hello! I'm Pietro, a mechanical engineer specializing in robotics and motion
                  planning. I also have experience in full-stack web development and cloud
                  infrastructure.
                </p>
                <p>
                  My primary expertise is in control systems and motion planning for robotics
                  applications. I've worked on projects involving multi-agent systems, autonomous
                  vehicles, and haptic devices. My master thesis focused on developing novel methods
                  for efficient multi-agent motion planning.
                </p>
                <p>
                  In addition to my engineering background, I've developed skills in web development
                  and infrastructure, working with technologies like TypeScript, React, Docker, and
                  AWS. This combination allows me to build complete solutions from mechanical
                  systems to user interfaces.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>Motion Planning</Badge>
                <Badge>Robotics</Badge>
                <Badge>Control Systems</Badge>
                <Badge>MATLAB</Badge>
                <Badge>Python</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Button asChild variant="outline" className="gap-1">
                  <Link to="/resume">
                    View Resume <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-1">
                  <Link to="/projects">
                    View Projects <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-1">
                  <Link to="/skills">
                    View Skills <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
