import { ExperienceCard } from "../ExperienceCard";
import { CardWrapper } from "../../CardWrapper";

export function AlterEgoExperience() {
  return (
    <CardWrapper>
      <ExperienceCard
        title="Founder & CTO"
        organization="AlterEgo"
        description="Leading the technical development of innovative virtual try-on technology (patent pending CH001377/2024)."
        period="2023 - Present"
        responsibilities={[
          "Architecting and implementing computer vision and 3D modeling solutions for realistic virtual product visualization",
          "Leading technical team and product development strategy",
          "Developing patent-pending technology for virtual try-on applications",
        ]}
        skills={["Computer Vision", "3D Modeling", "Patent"]}
        imageSrc="videos/alteregorotate.gif"
      />
    </CardWrapper>
  );
}
