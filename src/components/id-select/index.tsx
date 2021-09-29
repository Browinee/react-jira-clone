import React from "react";
import { Select } from "antd";

type SelectProps = React.Component<typeof Select>;

export interface IdSelectProps
  extends Partial<
    Omit<SelectProps, "value" | "onChange" | "defaultOptionName" | "options">
  > {
  value: string | number | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

function IdSelect(props: IdSelectProps) {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;
  return (
    <Select
      {...restProps}
      value={options?.length ? toNumber(value) : 0}
      onChange={(value) => onChange(toNumber(value) || undefined)}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
}

export default IdSelect;
