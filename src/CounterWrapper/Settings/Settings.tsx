import React, { type ChangeEvent } from "react";
import s from "../CounterWrapper.module.css";

interface SettingsProps {
  minValue: number;
  maxValue: number;
  maxInputValue: number;
  minInputValue: number;
  setMinInputValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxInputValue: React.Dispatch<React.SetStateAction<number>>;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Settings = ({
  setCount,
  minValue,
  maxValue,
  maxInputValue,
  minInputValue,
  setMinInputValue,
  setMaxInputValue,
  setMinValue,
  setMaxValue,
}: SettingsProps) => {
  const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxInputValue(Number(e.currentTarget.value));
  };

  const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinInputValue(Number(e.currentTarget.value));
  };

  const setParams = () => {
    setMinValue(minInputValue);
    setMaxValue(maxInputValue);
    setCount(minInputValue);
  };

  const disabled =
    minInputValue < 0 ||
    minInputValue === maxInputValue ||
    maxInputValue < minInputValue ||
    (minValue === minInputValue && maxValue === maxInputValue);

  const minInputError = maxInputValue === minInputValue || minInputValue < 0;

  const maxValueError =
    maxInputValue === minInputValue || maxInputValue < minInputValue;

  return (
    <div className={s.container}>
      <div className={s.count_wrap}>
        <div className={s.wrap_input}>
          <span className={s.span}>max Value:</span>
          <input
            className={`${s.input} ${maxValueError ? s.error : ""}`}
            type="number"
            value={maxInputValue}
            onChange={maxValueChange}
          />
        </div>
        <div className={s.wrap_input}>
          <span className={s.span}>start Value:</span>
          <input
            className={`${s.input} ${minInputError && s.error}`}
            type="number"
            value={minInputValue}
            onChange={startValueChange}
          />
        </div>
      </div>

      <div className={s.wrap}>
        <button onClick={setParams} disabled={disabled}>
          set
        </button>
      </div>
    </div>
  );
};
