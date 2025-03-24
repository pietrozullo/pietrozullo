import { CertificationCard } from "../CertificationCard";
import { CardWrapper } from "../../CardWrapper";

export function GRECertification() {
  return (
    <CardWrapper>
      <CertificationCard
        title="Graduate Record Examination (GRE)"
        year="2019"
        imageSrc="/gre.jpg"
        grade="Overall Grade: 329/340"
        items={[
          { label: "Quantitative", value: "163 (87th percentile)" },
          { label: "Verbal", value: "166 (92nd percentile)" },
        ]}
      />
    </CardWrapper>
  );
}
