interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-muted py-16 sm:py-24 animate-fade-in border-b">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
