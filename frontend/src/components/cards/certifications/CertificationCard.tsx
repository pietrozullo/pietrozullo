import { Badge } from "../../ui/badge";
import { CardContent, CardTitle } from "../../ui/card";

interface CertificationItem {
  label: string;
  value: string;
}

interface CertificationCardProps {
  title: string;
  year: string;
  imageSrc: string;
  grade?: string;
  items?: CertificationItem[];
}

export function CertificationCard({
  title,
  year,
  imageSrc,
  grade,
  items = [],
}: CertificationCardProps) {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="bg-muted relative w-full md:w-1/3 h-40 md:h-auto">
        <div className="absolute inset-0 z-0">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover opacity-30 filter grayscale 
            transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
          />
        </div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full p-6 
          transition-opacity duration-300 group-hover:opacity-0"
        >
          <Badge className="mb-4">{year}</Badge>
        </div>
      </div>
      <CardContent className="p-6 space-y-4 w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          {grade && <p className="font-medium mt-4">{grade}</p>}

          {items.length > 0 && (
            <ul className="list-disc list-inside space-y-2 mt-4">
              {items.map((item, index) => (
                <li key={index}>
                  {item.label}: {item.value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </div>
  );
}
