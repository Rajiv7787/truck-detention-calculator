"use client";

import { FormEvent, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import ResultCard from "@/components/ResultCard";
import ResetButton from "@/components/ResetButton";
import ErrorMessage from "@/components/ErrorMessage";
import CopyButton from "@/components/CopyButton";

type StartBasis = "arrival" | "appointment" | "later";
type BillingIncrement = 15 | 30 | 60;
type RoundingMode = "none" | "down" | "up";
type Meridiem = "AM" | "PM";

type TimeValue = {
  hour: string;
  minute: string;
  meridiem: Meridiem;
};

function timeToMinutes(time: TimeValue) {
  let hour = Number(time.hour);
  const minute = Number(time.minute);

  if (time.meridiem === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  return hour * 60 + minute;
}

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
}

function formatMoney(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function createEmptyTime(): TimeValue {
  return {
    hour: "",
    minute: "",
    meridiem: "AM",
  };
}

function TimeInput({
  label,
  value,
  onChange,
  required = false,
}: {
  label: string;
  value: TimeValue;
  onChange: (value: TimeValue) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-800">
        {label}
      </label>

      <div className="grid grid-cols-[1fr_1fr_1.15fr] gap-2">
        <input
          type="number"
          min={1}
          max={12}
          placeholder="Hour"
          value={value.hour}
          required={required}
          onChange={(event) =>
            onChange({
              ...value,
              hour: event.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />

        <select
          value={value.minute}
          required={required}
          onChange={(event) =>
            onChange({
              ...value,
              minute: event.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        >
          <option value="">Min</option>

          {Array.from({ length: 60 }, (_, index) => {
            const minute = String(index).padStart(2, "0");

            return (
              <option key={minute} value={minute}>
                {minute}
              </option>
            );
          })}
        </select>

        <select
          value={value.meridiem}
          onChange={(event) =>
            onChange({
              ...value,
              meridiem: event.target.value as Meridiem,
            })
          }
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}

export default function DetentionCalculator() {
  const [startBasis, setStartBasis] =
    useState<StartBasis>("later");

  const [arrivalTime, setArrivalTime] =
    useState<TimeValue>(createEmptyTime());

  const [appointmentTime, setAppointmentTime] =
    useState<TimeValue>(createEmptyTime());

  const [releaseTime, setReleaseTime] =
    useState<TimeValue>(createEmptyTime());

  const [freeTime, setFreeTime] = useState("2");
  const [rate, setRate] = useState("50");

  const [billingIncrement, setBillingIncrement] =
    useState<BillingIncrement>(30);

  const [roundingMode, setRoundingMode] =
    useState<RoundingMode>("none");

  const [error, setError] = useState("");

  const [result, setResult] = useState<{
    totalMinutes: number;
    freeMinutes: number;
    billableMinutes: number;
    billableHours: number;
    detentionPay: number;
  } | null>(null);

  const calculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setResult(null);

    if (
      !arrivalTime.hour ||
      !arrivalTime.minute ||
      !releaseTime.hour ||
      !releaseTime.minute
    ) {
      setError(
        "Please enter the arrival and release times."
      );
      return;
    }

    if (
      startBasis !== "arrival" &&
      (!appointmentTime.hour ||
        !appointmentTime.minute)
    ) {
      setError("Please enter the appointment time.");
      return;
    }

    const arrival = timeToMinutes(arrivalTime);
    const release = timeToMinutes(releaseTime);

    let start = arrival;

    if (startBasis === "appointment") {
      start = timeToMinutes(appointmentTime);
    }

    if (startBasis === "later") {
      const appointment =
        timeToMinutes(appointmentTime);

      start = Math.max(arrival, appointment);
    }

    let totalMinutes = release - start;

    // If release is earlier than the start time,
    // treat it as the following day.
    if (totalMinutes < 0) {
      totalMinutes += 24 * 60;
    }

    const freeHours = Number(freeTime);
    const hourlyRate = Number(rate);

    if (
      !Number.isFinite(freeHours) ||
      freeHours < 0
    ) {
      setError(
        "Please enter a valid free-time value."
      );
      return;
    }

    if (
      !Number.isFinite(hourlyRate) ||
      hourlyRate < 0
    ) {
      setError(
        "Please enter a valid detention rate."
      );
      return;
    }

    const freeMinutes = Math.round(
      freeHours * 60
    );

    let billableMinutes = Math.max(
      0,
      totalMinutes - freeMinutes
    );

    if (roundingMode === "down") {
      billableMinutes =
        Math.floor(
          billableMinutes / billingIncrement
        ) * billingIncrement;
    }

    if (roundingMode === "up") {
      billableMinutes =
        Math.ceil(
          billableMinutes / billingIncrement
        ) * billingIncrement;
    }

    const billableHours =
      billableMinutes / 60;

    const detentionPay =
      billableHours * hourlyRate;

    setResult({
      totalMinutes,
      freeMinutes,
      billableMinutes,
      billableHours,
      detentionPay,
    });
  };

  const reset = () => {
    setStartBasis("later");

    setArrivalTime(createEmptyTime());
    setAppointmentTime(createEmptyTime());
    setReleaseTime(createEmptyTime());

    setFreeTime("2");
    setRate("50");
    setBillingIncrement(30);
    setRoundingMode("none");

    setError("");
    setResult(null);
  };

  const copyText = result
    ? [
        `Total facility time: ${formatDuration(
          result.totalMinutes
        )}`,
        `Free time: ${formatDuration(
          result.freeMinutes
        )}`,
        `Billable detention: ${formatDuration(
          result.billableMinutes
        )}`,
        `Billable hours: ${result.billableHours.toFixed(
          2
        )}`,
        `Estimated detention pay: ${formatMoney(
          result.detentionPay
        )}`,
      ].join("\n")
    : "";

  return (
    <form onSubmit={calculate}>
      <div className="space-y-8">
        {/* DETENTION TIMING */}

        <div>
          <h3 className="text-base font-bold text-slate-900">
            Detention Timing
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Enter the facility arrival, appointment and
            release times.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="startBasis"
              className="block text-sm font-semibold text-slate-800"
            >
              Detention Start Basis
            </label>

            <select
              id="startBasis"
              value={startBasis}
              onChange={(event) =>
                setStartBasis(
                  event.target.value as StartBasis
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              <option value="later">
                Later of Arrival / Appointment
              </option>

              <option value="arrival">
                Driver Arrival
              </option>

              <option value="appointment">
                Appointment Time
              </option>
            </select>
          </div>

          <TimeInput
            label="Driver Arrival"
            value={arrivalTime}
            onChange={setArrivalTime}
            required
          />

          <TimeInput
            label="Appointment Time"
            value={appointmentTime}
            onChange={setAppointmentTime}
            required={startBasis !== "arrival"}
          />

          <TimeInput
            label="Release / Departure Time"
            value={releaseTime}
            onChange={setReleaseTime}
            required
          />
        </div>

        {/* DETENTION TERMS */}

        <div>
          <h3 className="text-base font-bold text-slate-900">
            Detention Terms
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Enter the free time and detention rate from
            your load or carrier agreement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="freeTime"
              className="block text-sm font-semibold text-slate-800"
            >
              Free Time (hours)
            </label>

            <input
              id="freeTime"
              type="number"
              placeholder="e.g. 2"
              value={freeTime}
              onChange={(event) =>
                setFreeTime(event.target.value)
              }
              min={0}
              step={0.25}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="rate"
              className="block text-sm font-semibold text-slate-800"
            >
              Detention Rate (USD/hour)
            </label>

            <input
              id="rate"
              type="number"
              placeholder="e.g. 50"
              value={rate}
              onChange={(event) =>
                setRate(event.target.value)
              }
              min={0}
              step={0.01}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="billingIncrement"
              className="block text-sm font-semibold text-slate-800"
            >
              Billing Increment
            </label>

            <select
              id="billingIncrement"
              value={billingIncrement}
              onChange={(event) =>
                setBillingIncrement(
                  Number(
                    event.target.value
                  ) as BillingIncrement
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>60 minutes</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="roundingMode"
              className="block text-sm font-semibold text-slate-800"
            >
              Rounding
            </label>

            <select
              id="roundingMode"
              value={roundingMode}
              onChange={(event) =>
                setRoundingMode(
                  event.target.value as RoundingMode
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              <option value="none">
                No rounding
              </option>

              <option value="down">
                Round down
              </option>

              <option value="up">
                Round up
              </option>
            </select>
          </div>
        </div>

        <PrimaryButton type="submit">
          Calculate Detention Pay
        </PrimaryButton>

        {error && <ErrorMessage message={error} />}

        {result && (
          <ResultCard
            title="Estimated Detention Pay"
            action={<CopyButton text={copyText} />}
          >
            {formatMoney(result.detentionPay)}

            <div className="mt-5 grid gap-3 border-t border-blue-100 pt-5 sm:grid-cols-2">
              <div className="rounded-xl bg-white/70 p-3">
                <p className="text-xs text-slate-500">
                  Total Facility Time
                </p>

                <p className="mt-1 text-base font-bold text-slate-900">
                  {formatDuration(
                    result.totalMinutes
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/70 p-3">
                <p className="text-xs text-slate-500">
                  Free Time
                </p>

                <p className="mt-1 text-base font-bold text-slate-900">
                  {formatDuration(
                    result.freeMinutes
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/70 p-3">
                <p className="text-xs text-slate-500">
                  Billable Detention
                </p>

                <p className="mt-1 text-base font-bold text-slate-900">
                  {formatDuration(
                    result.billableMinutes
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/70 p-3">
                <p className="text-xs text-slate-500">
                  Billable Hours
                </p>

                <p className="mt-1 text-base font-bold text-slate-900">
                  {result.billableHours.toFixed(2)}
                </p>
              </div>
            </div>
          </ResultCard>
        )}

        <ResetButton onClick={reset} />
      </div>
    </form>
  );
}