import { FAQPage, Article, WebApplication, HowTo, SoftwareApplication, Organization } from '@/types/schema';

interface StructuredDataProps {
  data: FAQPage | Article | WebApplication | HowTo | SoftwareApplication | Organization | Array<FAQPage | Article | WebApplication | HowTo | SoftwareApplication | Organization>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  // Handle both single objects and arrays
  const jsonData = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {jsonData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

