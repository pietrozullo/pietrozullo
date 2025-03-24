import { Badge } from "../components/ui/badge";
import {
  FactorizationProject,
  MPCProject,
  UncertaintyAwareProject,
  TeleoperationProject,
  VirtualTryonPatent,
} from "../components/cards";

export function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12 space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            A selection of my technical projects and research
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Motion Planning</Badge>
            <Badge variant="secondary">Control Systems</Badge>
            <Badge variant="secondary">Computer Vision</Badge>
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Robotics</Badge>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <VirtualTryonPatent />
        <FactorizationProject />
        <MPCProject />
        <UncertaintyAwareProject />
        <TeleoperationProject />
      </section>

    </div>
  );
}
