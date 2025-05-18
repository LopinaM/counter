import React from "react";
import { Counter } from "./Counter/Counter";
import { Settings } from "./Settings/Settings";

const MAX_VALUE_STORAGE_KEY = "maxValue";
const START_VALUE_STORAGE_KEY = "startValue";
const MAX_INPUT_VALUE_STORAGE_KEY = "maxInputValue";
const MIN_INPUT_VALUE_STORAGE_KEY = "minInputValue";
const COUNT_VALUE = "countValue";

export const CounterWrapper = () => {
  const [minValue, setMinValue] = React.useState<number>(0);
  const [maxValue, setMaxValue] = React.useState<number>(1);
  const [minInputValue, setMinInputValue] = React.useState<number>(0);
  const [maxInputValue, setMaxInputValue] = React.useState<number>(1);

  const [count, setCount] = React.useState<number>(minValue);

  React.useEffect(() => {
    const value = localStorage.getItem(COUNT_VALUE);
    const minValue = localStorage.getItem(START_VALUE_STORAGE_KEY);
    const maxValue = localStorage.getItem(MAX_VALUE_STORAGE_KEY);
    const minInputValue = localStorage.getItem(MIN_INPUT_VALUE_STORAGE_KEY);
    const maxInputValue = localStorage.getItem(MAX_INPUT_VALUE_STORAGE_KEY);

    if (minValue) setMinValue(JSON.parse(minValue));
    if (maxValue) setMaxValue(JSON.parse(maxValue));
    if (minInputValue) setMinInputValue(JSON.parse(minInputValue));
    if (maxInputValue) setMaxInputValue(JSON.parse(maxInputValue));
    if (value) setCount(JSON.parse(value));
  }, []);

  React.useEffect(() => {
    localStorage.setItem(COUNT_VALUE, JSON.stringify(count));
    localStorage.setItem(START_VALUE_STORAGE_KEY, JSON.stringify(minValue));
    localStorage.setItem(MAX_VALUE_STORAGE_KEY, JSON.stringify(maxValue));
    localStorage.setItem(
      MIN_INPUT_VALUE_STORAGE_KEY,
      JSON.stringify(minInputValue)
    );
    localStorage.setItem(
      MAX_INPUT_VALUE_STORAGE_KEY,
      JSON.stringify(maxInputValue)
    );
  }, [count, minValue, maxValue, minInputValue, maxInputValue]);

  return (
    <>
      <Settings
        setCount={setCount}
        minValue={minValue}
        maxValue={maxValue}
        maxInputValue={maxInputValue}
        minInputValue={minInputValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setMinInputValue={setMinInputValue}
        setMaxInputValue={setMaxInputValue}
      />
      <Counter
        count={count}
        setCount={setCount}
        minValue={minValue}
        maxValue={maxValue}
        minInputValue={minInputValue}
        maxInputValue={maxInputValue}
      />
    </>
  );
};
