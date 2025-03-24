import { Badge } from "../../ui/badge";
import { CardContent, CardDescription, CardTitle } from "../../ui/card";

interface ExperienceCardProps {
  title: string;
  organization: string;
  description: string;
  period: string;
  responsibilities: string[];
  skills: string[];
  imageSrc: string;
  isImageRight?: boolean;
}

export function ExperienceCard({
  title,
  organization,
  description,
  period,
  responsibilities,
  skills,
  imageSrc,
  isImageRight = false,
}: ExperienceCardProps) {
  return (
    <div className="md:grid md:grid-cols-2">
      {!isImageRight && (
        <div className="bg-muted relative">
          <div className="absolute inset-0 z-0">
            <img
              src={imageSrc}
              className="w-full h-full object-cover opacity-30 filter grayscale 
              transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
            />
          </div>
          <div
            className="relative z-10 flex flex-col items-center justify-center h-full p-6 
            transition-opacity duration-300 group-hover:opacity-0"
          >
            <Badge className="mb-4">{period}</Badge>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      )}

      <CardContent className={`p-6 space-y-4 ${isImageRight ? "order-2 md:order-1" : ""}`}>
        <div>
          <CardTitle className="text-2xl font-bold">{organization}</CardTitle>
          <CardDescription>{title}</CardDescription>
        </div>
        <p>{description}</p>

        {responsibilities.length > 0 && (
          <div className="space-y-2">
            <p className="font-medium">Key responsibilities:</p>
            <ul className="list-disc list-inside space-y-2">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {isImageRight && (
        <div className="bg-muted relative order-1 md:order-2">
          <div className="absolute inset-0 z-0">
            <img
              src={imageSrc}
              className="w-full h-full object-fit opacity-40 filter sepia 
              transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
            />
          </div>
          <div
            className="relative z-10 flex flex-col items-center justify-center h-full p-6 
            transition-opacity duration-300 group-hover:opacity-0"
          >
            <Badge className="mb-4">{period}</Badge>
            <h3 className="text-2xl font-bold mb-2">{organization}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
