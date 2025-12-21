import { FAQPage, Article, WebApplication } from '@/types/schema';

interface StructuredDataProps {
  data: FAQPage | Article | WebApplication;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

