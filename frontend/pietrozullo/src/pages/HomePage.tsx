import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "../components/ui/separator";
import { HeroAnimation } from "../components/animation/HeroAnimation";
import { useState, useEffect } from "react";

export function HomePage() {
  const [animationState, setAnimationState] = useState<'video' | 'transition' | 'completed'>('video');
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  // Check if animation has already played in this session
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('heroAnimationPlayed');
    if (hasPlayed) {
      setAnimationState('completed');
      setHasAnimationPlayed(true);
    }
  }, []);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationState('completed');
    sessionStorage.setItem('heroAnimationPlayed', 'true');
  };

  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section with Animation */}
      <section className="container py-12 md:py-24 lg:py-32">
        {/* Show the hero animation only if it hasn't completed yet */}
        {animationState !== 'completed' && (
          <HeroAnimation 
            videoSrc="/videos/intro-animation.mp4" 
            duration={10} // This is a fallback duration in seconds if the video doesn't trigger the 'ended' event
            onComplete={handleAnimationComplete}
          />
        )}

        {/* Regular hero content (shown if animation has completed) */}
        {animationState === 'completed' && (
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge className="px-3.5 py-1.5 text-sm" variant="secondary">Mechanical Engineer & Roboticist</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Pietro Zullo
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Specializing in robotics, motion planning, and full-stack development with Docker & AWS infrastructure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/resume">View Resume</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/skills">View Skills</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        )}
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
                  src="/Alter Ego Team_11.04.2024-093.jpg" 
                  alt="Pietro Zullo" 
                  className="aspect-square h-full w-full object-cover mix-blend-multiply"
                  style={{ 
                    imageRendering: 'auto',
                    filter: 'brightness(1.05) contrast(0.95)'
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
                  Hello! I'm Pietro, a mechanical engineer specializing in robotics and motion planning.
                  I also have experience in full-stack web development and cloud infrastructure.
                </p>
                <p>
                  My primary expertise is in control systems and motion planning for robotics applications.
                  I've worked on projects involving multi-agent systems, autonomous vehicles, and haptic devices.
                </p>
                <p>
                  In addition to my engineering background, I've developed skills in web development and infrastructure,
                  working with technologies like TypeScript, React, Docker, and AWS.
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
            <p className="text-muted-foreground">
              Highlights from my professional journey
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Founder & CTO</CardTitle>
                    <CardDescription>AlterEgo</CardDescription>
                  </div>
                  <Badge variant="outline">2023 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leading the technical development of innovative virtual try-on technology 
                  (patent pending CH001377/2024). Architecting and implementing computer vision 
                  and 3D modeling solutions for realistic virtual product visualization.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Research Engineer Intern</CardTitle>
                    <CardDescription>Motional</CardDescription>
                  </div>
                  <Badge variant="outline">2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contributed to autonomous vehicle motion planning and control systems.
                  Implemented and tested algorithms for safe and 
                  efficient autonomous navigation in complex environments.
                </p>
              </CardContent>
            </Card>
            
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
            <p className="text-muted-foreground">
              A selection of my recent work and research
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* AlterEgo Project */}
            <Card>
              <CardHeader>
                <CardTitle>AlterEgo</CardTitle>
                <CardDescription>Virtual Try-on Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A virtual fitting room that allows users to try on clothes virtually before purchasing.
                  Featured in ETH Zurich news and patent pending (CH001377/2024).
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">3D Modeling</Badge>
                  <Badge variant="secondary">AR</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="gap-1">
                  <Link to="/alterego">
                    View Project <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Motion Planning Project */}
            <Card>
              <CardHeader>
                <CardTitle>Multi-Agent Motion Planning</CardTitle>
                <CardDescription>Master Thesis Research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Novel method to solve multi-agent motion planning problems efficiently using a mathematical framework 
                  to detect and leverage independence between agents.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Motion Planning</Badge>
                  <Badge variant="secondary">Game Theory</Badge>
                  <Badge variant="secondary">Graph Theory</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="gap-1">
                  <Link to="/projects">
                    View Project <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* MPC Project */}
            <Card>
              <CardHeader>
                <CardTitle>High Performance Driving</CardTitle>
                <CardDescription>Model Predictive Control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Refined NMPCC controller for high performance driving using MATLAB and SIMULINK.
                  Collaborated with IDSC Zurich, UniPD, and UniNA on commercial vehicle control software.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Control Systems</Badge>
                  <Badge variant="secondary">MATLAB</Badge>
                  <Badge variant="secondary">SIMULINK</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="gap-1">
                  <Link to="/projects">
                    View Project <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
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

      {/* CTA Section */}
      <section className="container py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to work together?</h2>
          <p className="max-w-[600px] text-muted-foreground">
            I'm currently available for freelance work and open to new opportunities.
            Let's build something amazing together!
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 