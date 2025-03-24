import { ProjectCard } from "../ProjectCard";
import { CardWrapper } from "../../CardWrapper";

export function MPCProject() {
  return (
    <CardWrapper>
      <ProjectCard
        title="Model Predictive Control for High Performance Driving"
        subtitle="Advanced control systems for vehicle dynamics"
        description={[
          "On behalf of IDSC Zurich I collaborated with UniPD and UniNA to conduct an analysis on a commercial software to control vehicles in high performance driving, successfully improving its accuracy and overall performance.",
          "I refined the work done by previous developers which used the MATLAB tool MATMPC to develop a NMPCC controller for high performance driving. This was used to control highly accurate virtual vehicles in a cosimulation environment. (Vi-Grade)",
        ]}
        period="2021"
        badgeLabel="IDSC Zurich"
        imageSrc="/videos/semesterproject.mp4"
        isImageRight={true}
        isVideo={true}
        skills={["Control Systems", "MATLAB", "SIMULINK", "Model Predictive Control"]}
        links={[
          { url: "https://idsc.ethz.ch/", label: "IDSC Zurich" },
          { url: "#", label: "Vi-Grade" },
        ]}
      />
    </CardWrapper>
  );
}
