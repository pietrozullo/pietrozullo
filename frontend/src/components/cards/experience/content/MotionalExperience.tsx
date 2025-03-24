import { ExperienceCard } from "../ExperienceCard";
import { CardWrapper } from "../../CardWrapper";

export function MotionalExperience() {
  return (
    <CardWrapper>
      <ExperienceCard
        title="Research Engineer Intern"
        organization="Motional"
        description="Contributed to autonomous vehicle motion planning and control systems at a leading autonomous driving technology company."
        period="2022"
        responsibilities={[
          "Implemented and tested algorithms for safe and efficient autonomous navigation in complex environments",
          "Collaborated with cross-functional teams to improve motion planning capabilities",
          "Applied robotics expertise to solve real-world autonomous driving challenges",
        ]}
        skills={["Autonomous Vehicles", "Motion Planning", "Robotics"]}
        imageSrc="/NuPlan-Thumbnail.jpg"
        isImageRight={true}
      />
    </CardWrapper>
  );
}
