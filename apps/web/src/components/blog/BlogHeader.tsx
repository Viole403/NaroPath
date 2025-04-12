interface BlogHeaderProps {
  title: string;
  description?: string;
}

export function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}