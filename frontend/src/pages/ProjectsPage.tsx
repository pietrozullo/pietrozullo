import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12 space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            A collection of my research and development work
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Research Projects</h2>
        </div>
        <Separator />

        {/* MT: Factorization Project */}
        <Card className="overflow-hidden group">
          <div className="md:grid md:grid-cols-2">
            <div className="bg-muted relative">
              <div className="absolute inset-0 z-0">
                <img
                  src="/videos/output.gif"
                  alt="Motion planning visualization"
                  className="w-full h-full object-cover opacity-30 filter grayscale 
                  transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
                />
              </div>
              <div
                className="relative z-10 flex flex-col items-center justify-center h-full p-6 
              transition-opacity duration-300 group-hover:opacity-0"
              >
                <Badge className="mb-4">2022</Badge>
                <h3 className="text-2xl font-bold mb-2">Multi-Agent Motion Planning</h3>
                <p className="text-muted-foreground">
                  Novel factorization method for sampling-based algorithms
                </p>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">MT: Factorization Of Sampling Based Algorithms</h3>
              <p>
                For my Master Thesis project I developed a novel method to solve multi-agent motion
                planning problems efficiently. The core contribution was a mathematical framework to
                detect and leverage independence between agents, leading to proven reductions in
                computational complexity.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Key achievements:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Derived analytical proof of sample complexity improvement for PRM* algorithm
                  </li>
                  <li>
                    Achieved 75% reduction in required iterations while maintaining solution
                    optimality
                  </li>
                  <li>
                    Reduced graph complexity by over 80% (30k to 9.7k edges) in real-world tests
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary">Motion Planning</Badge>
                <Badge variant="secondary">Game Theory</Badge>
                <Badge variant="secondary">Graph Theory</Badge>
                <Badge variant="secondary">Python</Badge>
              </div>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="inline-flex items-center gap-1">
                    <ExternalLinkIcon className="h-4 w-4" /> IEEE CDC 2023
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Model Predictive Control Project */}
        <Card className="overflow-hidden group">
          <div className="md:grid md:grid-cols-2">
            <CardContent className="p-6 space-y-4 order-2 md:order-1">
              <h3 className="text-2xl font-bold">
                Model Predictive Control for High Performance Driving
              </h3>
              <p>
                On behalf of IDSC Zurich I collaborated with UniPD and UniNA to conduct an analysis
                on a commercial software to control vehicles in high performance driving,
                successfully improving its accuracy and overall performance.
              </p>
              <p>
                I refined the work done by previous developers which used the MATLAB tool MATMPC to
                develop a NMPCC controller for high performance driving. This was used to control
                highly accurate virtual vehicles in a cosimulation environment.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary">Control Systems</Badge>
                <Badge variant="secondary">MATLAB</Badge>
                <Badge variant="secondary">SIMULINK</Badge>
                <Badge variant="secondary">Model Predictive Control</Badge>
              </div>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://idsc.ethz.ch/" className="inline-flex items-center gap-1">
                    <ExternalLinkIcon className="h-4 w-4" /> IDSC Zurich
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="inline-flex items-center gap-1">
                    <ExternalLinkIcon className="h-4 w-4" /> Vi-Grade
                  </a>
                </Button>
              </div>
            </CardContent>
            <div className="bg-muted relative order-1 md:order-2">
              <div className="absolute inset-0 z-0">
                <video
                  src="/videos/semesterproject.mp4"
                  className="w-full h-full object-cover opacity-40 filter sepia 
                  transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
                  autoPlay
                  muted
                  loop
                />
              </div>
              <div
                className="relative z-10 flex flex-col items-center justify-center h-full p-6 
              transition-opacity duration-300 group-hover:opacity-0"
              >
                <Badge className="mb-4">2021</Badge>
                <h3 className="text-2xl font-bold mb-2">High Performance Driving</h3>
                <p className="text-muted-foreground">
                  Advanced control systems for vehicle dynamics
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Uncertainty Aware Learning Project */}
        <Card className="overflow-hidden group">
          <div className="md:grid md:grid-cols-2">
            <div className="bg-muted relative">
              <div className="absolute inset-0 z-0">
                <img
                  src="55fab7d4-0d6f-4a12-aea1-4181a61eb92d.jpeg"
                  alt="Drone control visualization"
                  className="w-full h-full object-cover opacity-40 filter contrast-125 brightness-110 
                  transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
                />
              </div>
              <div
                className="relative z-10 flex flex-col items-center justify-center h-full p-6 
              transition-opacity duration-300 group-hover:opacity-0"
              >
                <Badge className="mb-4">2021</Badge>
                <h3 className="text-2xl font-bold mb-2">Drone Control Systems</h3>
                <p className="text-muted-foreground">
                  Machine learning for improved drone dynamics
                </p>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Uncertainty Aware Learning Algorithm</h3>
              <p>
                In collaboration with Autonomous Systems Lab of ETH I implemented state of the art
                learning algorithms (Deep Kernel Learning, DeepGPs) to improve the dynamical model
                of a 6 propeller's drone.
              </p>
              <p>
                The learning algorithm was used to learn the mismatch, coming from the propellers'
                aerodynamical interactions, between the commanded wrench and the actual one acting
                on the drone. The learnt mismatch was then included in the control architecture.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">PyTorch</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">Deep Learning</Badge>
                <Badge variant="secondary">Control Systems</Badge>
              </div>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://omav.ethz.ch/" className="inline-flex items-center gap-1">
                    <ExternalLinkIcon className="h-4 w-4" /> Omav Drone
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Teleoperation Project */}
        <Card className="overflow-hidden group">
          <div className="md:grid md:grid-cols-2">
            <CardContent className="p-6 space-y-4 order-2 md:order-1">
              <h3 className="text-2xl font-bold">Teleoperation - Haptic Devices</h3>
              <p>
                In a team of 4 students, I worked at the realization of a teleoperated haptic
                device. We exchanged data over a UDP connection between two identical haptic paddles
                and implemented a symmetric controller that made each of the devices mirror the
                behaviour of the other.
              </p>
              <p>
                As a result of our work, we were able to let the user recognize objects of different
                stiffnesses by touching them with the haptic device from another city.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary">LabView</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">UDP</Badge>
                <Badge variant="secondary">Haptic Feedback</Badge>
                <Badge variant="secondary">Control Systems</Badge>
              </div>
            </CardContent>
            <div className="bg-muted relative order-1 md:order-2">
              <div className="absolute inset-0 z-0">
                <img
                  src="image.imageformat.lightbox.1989675467.jpg"
                  alt="Haptic feedback device"
                  className="w-full h-full object-cover opacity-40 filter blur-[1px] saturate-50 
                  transition-all duration-300 group-hover:opacity-100 group-hover:filter-none group-hover:blur-none"
                />
              </div>
              <div
                className="relative z-10 flex flex-col items-center justify-center h-full p-6 
              transition-opacity duration-300 group-hover:opacity-0"
              >
                <Badge className="mb-4">2020</Badge>
                <h3 className="text-2xl font-bold mb-2">Haptic Feedback</h3>
                <p className="text-muted-foreground">
                  Remote tactile sensing through teleoperation
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
