type ResultCardProps = {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

export default function ResultCard({
  title = "Result",
  children,
  action,
}: ResultCardProps) {
  return (
    <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {title}
        </p>

        {action}
      </div>

      <div className="mt-3 break-words text-2xl font-bold text-slate-900">
        {children}
      </div>
    </div>
  );
}