import AdPlaceholder from "@/components/AdPlaceholder";

type ToolLayoutProps = {
  children: React.ReactNode;
  toolName: string;
  description: string;
};

export default function ToolLayout({
  children,
  toolName,
  description,
}: ToolLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50" />

        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-12 text-center sm:px-6 sm:pb-12 sm:pt-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Free Online Tool
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {toolName}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-7">
            {description}
          </p>
        </div>
      </section>

      <section className="relative mx-auto -mt-1 max-w-4xl px-3 pb-6 sm:px-6 sm:pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 sm:rounded-3xl sm:p-8">
          {children}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 sm:pb-12">
        <AdPlaceholder />
      </div>
    </main>
  );
}