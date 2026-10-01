type ResetButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

export default function ResetButton({
  onClick,
  children = "Reset",
}: ResetButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      {children}
    </button>
  );
}