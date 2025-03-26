import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "../components/ui/separator";
import { HeroAnimation } from "../components/animation/HeroAnimation";
import { useState, useEffect } from "react";
import {
  AlterEgoExperience,
  MotionalExperience,
  FactorizationProject,
  MPCProject,
} from "../components/cards";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export function HomePage() {
  const [animationState, setAnimationState] = useState<"video" | "transition" | "completed">(
    "video"
  );
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  // Check if animation has already played in this session
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("heroAnimationPlayed");
    if (hasPlayed) {
      setAnimationState("completed");
      setHasAnimationPlayed(true);
    }
  }, []);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationState("completed");
    sessionStorage.setItem("heroAnimationPlayed", "true");
  };

  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section with Animation */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="relative h-[540px] w-full">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              animationState !== "completed"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <HeroAnimation
              videoSrc="/videos/output.mp4"
              duration={10}
              onComplete={handleAnimationComplete}
            />
          </div>

          {/* Regular hero content (shown if animation has completed) */}
          {animationState === "completed" && (
            <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
              <Badge className="px-3.5 py-1.5 text-sm" variant="secondary">
                Mechanical Engineer & Roboticist
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Pietro Zullo
              </h1>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/pietrozullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkedInLogoIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/pietrozullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GitHubLogoIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=bd9ugd4AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/pietrozullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TwitterLogoIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="container py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <Separator className="my-2" />
          </div>
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src="/profile.jpg"
                  alt="Pietro Zullo"
                  className="aspect-square h-full w-full object-cover mix-blend-multiply"
                  style={{
                    imageRendering: "auto",
                    filter: "brightness(1.05) contrast(0.95)",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400?text=Pietro+Zullo";
                  }}
                />
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
                  vehicles, and haptic devices.
                </p>
                <p>
                  In addition to my engineering background, I've developed skills in web development
                  and infrastructure, working with technologies like TypeScript, React, Docker, and
                  AWS.
                </p>
              </div>
              <div className="flex justify-start">
                <Button asChild variant="outline" className="gap-1">
                  <Link to="/about">
                    More About Me <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-8 bg-muted/30 rounded-lg">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter">Experience</h2>
            <Separator className="my-2" />
            <p className="text-muted-foreground">Highlights from my professional journey</p>
          </div>
          <div className="flex flex-col gap-6">
            <AlterEgoExperience />
            <MotionalExperience />

            <div className="flex justify-center">
              <Button asChild variant="outline" className="gap-1">
                <Link to="/resume">
                  View Full Resume <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <Separator className="my-2" />
            <p className="text-muted-foreground">A selection of my recent work and research</p>
          </div>
          <div className="flex flex-col gap-6">
            <FactorizationProject />
            <MPCProject />
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-1">
              <Link to="/projects">
                View All Projects <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-8 bg-muted/30 rounded-lg">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter">Skills & Expertise</h2>
            <Separator className="my-2" />
            <p className="text-muted-foreground">
              Technologies and tools I work with on a regular basis
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Robotics */}
            <Card>
              <CardHeader>
                <CardTitle>Robotics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Motion Planning</Badge>
                  <Badge>Control Systems</Badge>
                  <Badge>Autonomous Systems</Badge>
                  <Badge>Sensor Fusion</Badge>
                  <Badge>Robot Kinematics</Badge>
                  <Badge>Path Planning</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Engineering */}
            <Card>
              <CardHeader>
                <CardTitle>Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>MATLAB & SIMULINK</Badge>
                  <Badge>CAD Design</Badge>
                  <Badge>Mechanical Design</Badge>
                  <Badge>3D Modeling</Badge>
                  <Badge>Prototyping</Badge>
                  <Badge>System Integration</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>UI/UX</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Linux</Badge>
                  <Badge>Git</Badge>
                  <Badge>Cloud Architecture</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-1">
              <Link to="/skills">
                View All Skills <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
