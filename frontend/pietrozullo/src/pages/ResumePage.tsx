import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export function ResumePage() {
  return (
    <div className="container py-8 md:py-12 space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pietro Zullo</h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            Mechanical Engineer & Roboticist with Full-Stack Development Expertise
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">PyTorch</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">AWS</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">Linux</Badge>
            <Badge variant="secondary">Motion Planning</Badge>
            <Badge variant="secondary">Robotics</Badge>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Professional Experience</h2>
        </div>
        <Separator />
        
        {/* AlterEgo Experience */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Founder & CTO</CardTitle>
                <CardDescription>AlterEgo</CardDescription>
              </div>
              <Badge variant="outline">2023 - Present</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Leading the technical development of innovative virtual try-on technology (patent pending CH001377/2024).
            </p>
            <div className="space-y-2">
              <p className="font-medium">Key responsibilities:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Architecting and implementing computer vision and 3D modeling solutions for realistic virtual product visualization</li>
                <li>Leading technical team and product development strategy</li>
                <li>Developing patent-pending technology for virtual try-on applications</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        {/* Motional Experience */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Research Engineer Intern</CardTitle>
                <CardDescription>Motional</CardDescription>
              </div>
              <Badge variant="outline">2022</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Contributed to autonomous vehicle motion planning and control systems at a leading autonomous driving technology company.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Key contributions:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Implemented and tested algorithms for safe and efficient autonomous navigation in complex environments</li>
                <li>Collaborated with cross-functional teams to improve motion planning capabilities</li>
                <li>Applied robotics expertise to solve real-world autonomous driving challenges</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Patents Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Patents</h2>
          <Badge variant="outline" className="text-sm">July 2023 - Present</Badge>
        </div>
        <Separator />
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Virtual Try-on Technology (CH001377/2024)</CardTitle>
              <Badge>Switzerland</Badge>
            </div>
            <CardDescription>January 2024 - Pending</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
        </div>
        <Separator />

        {/* 2022 Project */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">2022</Badge>
          <Card>
            <CardHeader>
              <CardTitle>MT: Factorization Of Sampling Based Algorithms</CardTitle>
              <CardDescription>Motion Planning/Game Theory/Graph Theory</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                For my Master Thesis project I developed a novel method to solve multi-agent motion planning problems efficiently. 
                The core contribution was a mathematical framework to detect and leverage independence between agents, 
                leading to proven reductions in computational complexity.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Key achievements:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Derived analytical proof of sample complexity improvement for PRM* algorithm</li>
                  <li>Achieved 75% reduction in required iterations while maintaining solution optimality</li>
                  <li>Reduced graph complexity by over 80% (30k to 9.7k edges) in real-world tests</li>
                </ul>
              </div>
              <p className="flex items-center gap-2">
                This work was submitted to IEEE CDC 2023, and can be found at 
                <a href="#" className="text-primary inline-flex items-center hover:underline">
                  link <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 2021 Project */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">2021</Badge>
          <Card>
            <CardHeader>
              <CardTitle>Model Predictive Control for high performance driving</CardTitle>
              <CardDescription>MATLAB & SIMULINK</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                On behalf of <a href="https://idsc.ethz.ch/" className="text-primary hover:underline">IDSC Zurich</a> I collaborated with 
                <a href="#" className="text-primary hover:underline"> UniPD</a> and 
                <a href="#" className="text-primary hover:underline"> UniNA</a> to conduct an analysis on a commercial software to control vehicles in high performance driving, 
                successfully improving its accuracy and overall performance.
              </p>
              <p>
                I refined the work done by previous developers which used the MATLAB tool 
                <a href="#" className="text-primary hover:underline"> MATMPC</a> to develop a NMPCC controller for high performance driving. 
                This was used to control highly accurate virtual vehicles in a cosimulation environment.
                <a href="#" className="text-primary hover:underline"> (Vi-Grade)</a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Uncertainty Aware Learning Algorithm Project */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Uncertainty Aware Learning Algorithm</CardTitle>
              <CardDescription>Python/Pytorch/C++</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                In collaboration with Autonomous Systems Lab of ETH I implemented state of the art learning algorithms 
                (Deep Kernel Learning, DeepGPs) to improve the dynamical model of a 6 propeller's drone 
                (<a href="https://omav.ethz.ch/" className="text-primary hover:underline">Omav Drone</a>). 
                The learning algorithm was used to learn the mismatch, coming from the propellers' aerodynamical interactions, 
                between the commanded wrench and the actual one acting on the drone. 
                The learnt mismatch was then included in the control architecture.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 2020 Project */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">2020</Badge>
          <Card>
            <CardHeader>
              <CardTitle>Teleoperation - Haptic Devices</CardTitle>
              <CardDescription>LabView/Python</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                In a team of 4 students, I worked at the realization of a teleoperated haptic device. 
                We exchanged data over a UDP connection between two identical haptic paddles and implemented a symmetric controller 
                that made each of the devices mirror the behaviour of the other. 
                As a result of our work, we were able to let the user recognize objects of different stiffnesses 
                by touching them with the haptic device from another city.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Graduate Record Examination (GRE)</CardTitle>
              <CardDescription>2019</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Overall Grade: 329/340</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Quantitative 163 (87th percentile)</li>
                <li>Verbal 166 (92nd percentile)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>English Language Certificate IELTS</CardTitle>
              <CardDescription>2018</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Overall Band Score 7.0 (C1)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Technical Skills & Languages</h2>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Development & Cloud</h3>
            <div>
              <p className="font-medium">Primary:</p>
              <p>Python, PyTorch, TypeScript, React, AWS, Docker, Linux</p>
            </div>
            <div>
              <p className="font-medium">Additional:</p>
              <p>C/C++, Terraform, MATLAB & SIMULINK</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Engineering Tools</h3>
            <p>CAD (Fusion 360, OnShape, CREO) • Blender • LabView</p>
            
            <h3 className="text-xl font-bold">Languages</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Italian (Native)</li>
              <li>English (Proficient)</li>
              <li>Spanish (Basic)</li>
              <li>German (Basic)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Domain Expertise Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Domain Expertise</h2>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Computer Vision</li>
              <li>3D Physics Simulation</li>
              <li>Control Systems</li>
              <li>Motion Planning</li>
              <li>Robotics</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Web Development</li>
              <li>DevOps</li>
              <li>Product Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Personal</h2>
        </div>
        <Separator />
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline">Music (guitar, piano, vocals, digital)</Badge>
          <Badge variant="outline">Oil Painting</Badge>
          <Badge variant="outline">Basketball</Badge>
          <Badge variant="outline">Tennis</Badge>
          <Badge variant="outline">Regular Blood Donor</Badge>
        </div>
      </section>
    </div>
  );
} 