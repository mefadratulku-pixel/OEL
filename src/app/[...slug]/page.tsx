import pagesData from "@/data/pages.json";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join("/");
  
  // Try to find exact match
  const page = pagesData[path as keyof typeof pagesData];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 grid-border-x max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col">
            <span className="text-accent-brand mb-4 font-mono text-xs">╔</span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">{page.title}</h1>
            <div className="h-px w-full bg-grid-line mt-12"></div>
        </div>
        
        {/* We use dangerouslySetInnerHTML to render the scraped WordPress content */}
        {/* Note: The scraped content might contain WordPress-specific classes that aren't styled in Tailwind, 
            so some structural styles are applied via globals.css or can be added directly to this container */}
        <div 
          className="prose prose-lg max-w-none text-foreground-muted prose-headings:text-foreground prose-a:text-accent-brand hover:prose-a:text-foreground transition-colors prose-img:border prose-img:border-black/10"
          dangerouslySetInnerHTML={{ __html: page.content }} 
        />
    </div>
  );
}
