interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <h1 className="text-4xl md:text-6xl font-black mb-8 bg-black text-white p-6 rotate-[-1deg] inline-block">
      {title}
    </h1>
  );
}