import { ProjectCard } from "../ProjectCard";
import { CardWrapper } from "../../CardWrapper";

export function UncertaintyAwareProject() {
  return (
    <CardWrapper>
      <ProjectCard
        title="Uncertainty Aware Learning Algorithm"
        subtitle="Machine learning for improved drone dynamics"
        description={[
          "In collaboration with Autonomous Systems Lab of ETH I implemented state of the art learning algorithms (Deep Kernel Learning, DeepGPs) to improve the dynamical model of a 6 propeller's drone (Omav Drone).",
          "The learning algorithm was used to learn the mismatch, coming from the propellers' aerodynamical interactions, between the commanded wrench and the actual one acting on the drone. The learnt mismatch was then included in the control architecture.",
        ]}
        period="2021"
        badgeLabel="2021"
        imageSrc="omavdrone.jpeg"
        skills={["Python", "PyTorch", "C++", "Deep Learning", "Control Systems"]}
      />
    </CardWrapper>
  );
}
