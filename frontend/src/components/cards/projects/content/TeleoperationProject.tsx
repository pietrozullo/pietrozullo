import { ProjectCard } from "../ProjectCard";
import { CardWrapper } from "../../CardWrapper";

export function TeleoperationProject() {
  return (
    <CardWrapper>
      <ProjectCard
        title="Teleoperation - Haptic Devices"
        subtitle="Remote tactile sensing through teleoperation"
        description={[
          "In a team of 4 students, I worked at the realization of a teleoperated haptic device. We exchanged data over a UDP connection between two identical haptic paddles and implemented a symmetric controller that made each of the devices mirror the behaviour of the other.",
          "As a result of our work, we were able to let the user recognize objects of different stiffnesses by touching them with the haptic device from another city.",
        ]}
        period="2020"
        badgeLabel="Team Project"
        imageSrc="hapticdevice.jpg"
        isImageRight={true}
        skills={["LabView", "Python", "UDP", "Haptic Feedback", "Control Systems"]}
      />
    </CardWrapper>
  );
}
