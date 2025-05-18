import React from "react";
import s from "../CounterWrapper.module.css";

interface CounterProps {
  count: number;
  maxValue: number;
  minValue: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  minInputValue: number;
  maxInputValue: number;
}

export const Counter = ({
  count,
  setCount,
  maxValue,
  minValue,
  minInputValue,
  maxInputValue,
}: CounterProps) => {
  const setIncCount = () => {
    setCount((count) => count + 1);
  };

  const reset = () => {
    setCount(minValue);
  };

  const message =
    minInputValue === maxInputValue
      ? "Max and min values can't be equal!"
      : maxInputValue < minInputValue
      ? "Max value can't be less than min value!"
      : minInputValue < 0
      ? "Min value can't be negative!"
      : minValue !== minInputValue || maxValue !== maxInputValue
      ? "Enter values and press 'set'"
      : count;

  const incDisabled =
    count >= maxInputValue ||
    minValue !== minInputValue ||
    maxValue !== maxInputValue;

  const resDisabled =
    count <= minInputValue ||
    minValue !== minInputValue ||
    maxValue !== maxInputValue;

  const value = (
    <div
      style={{
        color:
          typeof message === "string" || message === maxValue
            ? "red"
            : "inherit",
      }}
    >
      {message}
    </div>
  );
  return (
    <div className={s.container}>
      <div className={s.count_wrap}>{value}</div>

      <div className={s.wrap}>
        <button onClick={setIncCount} disabled={incDisabled}>
          inc
        </button>
        <button onClick={reset} disabled={resDisabled}>
          reset
        </button>
      </div>
    </div>
  );
};
