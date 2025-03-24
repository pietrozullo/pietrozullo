import { ProjectCard } from "../ProjectCard";
import { CardWrapper } from "../../CardWrapper";

export function FactorizationProject() {
  return (
    <CardWrapper>
      <ProjectCard
        title="MT: Factorization Of Sampling Based Algorithms"
        subtitle="Novel factorization method for sampling-based algorithms"
        description={[
          "For my Master Thesis project I developed a novel method to solve multi-agent motion planning problems efficiently. The core contribution was a mathematical framework to detect and leverage independence between agents, leading to proven reductions in computational complexity.",
        ]}
        period="2022"
        badgeLabel="Master Thesis"
        imageSrc="/videos/thesis.gif"
        achievements={[
          "Derived analytical proof of sample complexity improvement for PRM* algorithm",
          "Achieved 75% reduction in required iterations while maintaining solution optimality",
          "Reduced graph complexity by over 80% (30k to 9.7k edges) in real-world tests",
        ]}
        skills={["Motion Planning", "Game Theory", "Graph Theory", "Python"]}
        links={[{ url: "#", label: "IEEE CDC 2023" }]}
      />
    </CardWrapper>
  );
}
