import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
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
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/profile-image.jpg" 
                  alt="Pietro Zullo" 
                  className="aspect-square h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400?text=Pietro+Zullo";
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Pietro Zullo</h3>
                <p className="text-sm text-muted-foreground">Mechanical Engineer & Roboticist</p>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
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
                  My master thesis focused on developing novel methods for efficient multi-agent motion planning.
                </p>
                <p>
                  In addition to my engineering background, I've developed skills in web development and infrastructure,
                  working with technologies like TypeScript, React, Docker, and AWS. This combination allows me to
                  build complete solutions from mechanical systems to user interfaces.
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
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section>
          <Tabs defaultValue="experience">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            
            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-6">
              <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Senior Software Engineer</CardTitle>
                        <CardDescription>TechCorp Inc.</CardDescription>
                      </div>
                      <Badge variant="outline">2020 - Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Led the development of a customer-facing web application using React and Node.js.</li>
                      <li>Implemented CI/CD pipelines to streamline the deployment process.</li>
                      <li>Mentored junior developers and conducted code reviews.</li>
                      <li>Collaborated with product managers and designers to define and implement new features.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Software Developer</CardTitle>
                        <CardDescription>WebSolutions Ltd.</CardDescription>
                      </div>
                      <Badge variant="outline">2017 - 2020</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Developed and maintained multiple client websites using JavaScript, HTML, and CSS.</li>
                      <li>Built RESTful APIs using Node.js and Express.</li>
                      <li>Implemented responsive designs and ensured cross-browser compatibility.</li>
                      <li>Worked closely with clients to gather requirements and provide technical solutions.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <Button asChild variant="outline" className="gap-1">
                    <Link to="/experience">
                      View Full Experience <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Education Tab */}
            <TabsContent value="education" className="mt-6">
              <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Master of Science in Computer Science</CardTitle>
                        <CardDescription>University of Technology</CardDescription>
                      </div>
                      <Badge variant="outline">2015 - 2017</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized in Software Engineering with a focus on web technologies and distributed systems.
                      Graduated with honors.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                        <CardDescription>State University</CardDescription>
                      </div>
                      <Badge variant="outline">2011 - 2015</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Completed coursework in algorithms, data structures, database systems, and software development.
                      Participated in various hackathons and coding competitions.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <Button asChild variant="outline" className="gap-1">
                    <Link to="/education">
                      View Full Education <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Robotics & Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span>Motion Planning</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[95%] rounded-full bg-primary"></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Control Systems</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[90%] rounded-full bg-primary"></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>MATLAB/SIMULINK</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[85%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Programming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span>Python</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[90%] rounded-full bg-primary"></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>TypeScript</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[65%] rounded-full bg-primary"></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>C/C++</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[70%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span>Docker</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[85%] rounded-full bg-primary"></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>AWS</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[70%] rounded-full bg-primary"></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Linux</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[80%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button asChild variant="outline" className="gap-1">
                  <Link to="/skills">
                    View All Skills <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* CTA Section */}
        <section className="flex flex-col items-center gap-4 rounded-lg bg-muted p-6 text-center">
          <h2 className="text-2xl font-bold">Interested in working together?</h2>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </section>
      </div>
    </div>
  );
} 