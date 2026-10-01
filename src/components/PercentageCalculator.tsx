"use client";

import { FormEvent, useState } from "react";
import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import ResultCard from "@/components/ResultCard";
import ResetButton from "@/components/ResetButton";
import ErrorMessage from "@/components/ErrorMessage";
import CopyButton from "@/components/CopyButton";
import { toolConfig } from "@/lib/tool-config";

export default function PercentageCalculator() {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    setError("");
    setResult(null);

    const p = Number(percentage);
    const n = Number(number);

    if (!percentage || !number) {
      setError("Please enter both values.");
      return;
    }

    if (!Number.isFinite(p) || !Number.isFinite(n)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (p < 0) {
      setError("Percentage cannot be negative.");
      return;
    }

    const calculatedResult = (p / 100) * n;

    setResult(calculatedResult);
  };

  const reset = () => {
    setPercentage("");
    setNumber("");
    setResult(null);
    setError("");
  };

  const formattedResult =
    result !== null
      ? result.toLocaleString(undefined, {
          maximumFractionDigits: 10,
        })
      : "";

  return (
    <form onSubmit={calculate}>
      <div className="grid gap-6 sm:grid-cols-2">
        <InputField
          label="Percentage"
          name="percentage"
          type="number"
          placeholder="e.g. 20"
          value={percentage}
          onChange={setPercentage}
          min={0}
        />

        <InputField
          label="Number"
          name="number"
          type="number"
          placeholder="e.g. 500"
          value={number}
          onChange={setNumber}
        />
      </div>

      <div className="mt-6">
        <PrimaryButton type="submit">
          {toolConfig.tool.buttonText}
        </PrimaryButton>
      </div>

      {error && <ErrorMessage message={error} />}

      {result !== null && (
        <ResultCard
          title="Result"
          action={<CopyButton text={formattedResult} />}
        >
          {formattedResult}
        </ResultCard>
      )}

      <div className="mt-3">
        <ResetButton onClick={reset} />
      </div>
    </form>
  );
}