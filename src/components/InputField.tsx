type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "number" | "email" | "url" | "time";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
};

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  min,
  max,
  step,
  required = false,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        min={min}
        max={max}
        step={step}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}