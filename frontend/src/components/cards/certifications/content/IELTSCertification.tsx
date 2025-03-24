import { CertificationCard } from "../CertificationCard";
import { CardWrapper } from "../../CardWrapper";

export function IELTSCertification() {
  return (
    <CardWrapper>
      <CertificationCard
        title="English Language Certificate IELTS"
        year="2018"
        imageSrc="/ielts.jpg"
        grade="Overall Band Score 7.0 (C1)"
      />
    </CardWrapper>
  );
}
