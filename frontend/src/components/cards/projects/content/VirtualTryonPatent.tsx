import { ProjectCard } from "../ProjectCard";
import { CardWrapper } from "../../CardWrapper";

export function VirtualTryonPatent() {
  return (
    <CardWrapper>
      <ProjectCard
        title="Virtual Try-on Technology"
        subtitle="Innovative virtual try-on technology"
        description={[
          "Patent reference: CH001377/2024",
          "Developed innovative method for virtual product visualization with realistic physics and appearance. This technology enables users to virtually try on products with high fidelity and accuracy.",
        ]}
        period="January 2024 - Pending"
        badgeLabel="January 2024 - Pending"
        imageSrc="videos/blackhope.gif"
        skills={["Computer Vision", "3D Modeling", "Physics Simulation"]}
      />
    </CardWrapper>
  );
}
