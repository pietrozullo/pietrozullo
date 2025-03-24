import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  AlterEgoExperience,
  MotionalExperience,
  VirtualTryonPatent,
  FactorizationProject,
  MPCProject,
  UncertaintyAwareProject,
  TeleoperationProject,
  GRECertification,
  IELTSCertification,
} from "../components/cards";

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

        {/* Experiences */}
        <AlterEgoExperience />
        <MotionalExperience />
      </section>

      {/* Patents Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Patents</h2>
          <Badge variant="outline" className="text-sm">
            July 2023 - Present
          </Badge>
        </div>
        <Separator />
        <VirtualTryonPatent />
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
        </div>
        <Separator />

        {/* 2022 Project */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">
            2022
          </Badge>
          <FactorizationProject />
        </div>

        {/* 2021 Project */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">
            2021
          </Badge>
          <MPCProject />
        </div>

        {/* Uncertainty Aware Learning Algorithm Project */}
        <div className="space-y-6">
          <UncertaintyAwareProject />
        </div>

        {/* 2020 Project */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">
            2020
          </Badge>
          <TeleoperationProject />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GRECertification />
          <IELTSCertification />
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
              <p className="mt-1">Python, PyTorch, TypeScript, React, AWS, Docker, Linux</p>
            </div>
            <div>
              <p className="font-medium">Additional:</p>
              <p className="mt-1">C/C++, Terraform, MATLAB & SIMULINK</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Engineering Tools</h3>
            <p className="mt-1">CAD (Fusion 360, OnShape, CREO) • Blender • LabView</p>

            <h3 className="text-xl font-bold mt-6">Languages</h3>
            <ul className="list-disc list-inside space-y-2 mt-1">
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
            <ul className="list-disc list-inside space-y-2">
              <li>Computer Vision</li>
              <li>3D Physics Simulation</li>
              <li>Control Systems</li>
              <li>Motion Planning</li>
              <li>Robotics</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
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
