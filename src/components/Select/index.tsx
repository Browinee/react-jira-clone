import { Select as AntdSelect } from "antd";

type AntdSelectProps = React.ComponentProps<typeof AntdSelect>;

interface SelectProps
  extends Omit<AntdSelectProps, "value" | "onChange" | "options"> {
  value?: string | number | null | undefined;
  onChange?: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}


export const Select = (props: SelectProps) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;
  return (
    <AntdSelect
      value={options?.length ? toNumber(value) : 0}
      onChange={(value) => onChange?.(toNumber(value) || undefined)}
      {...restProps}
    >
      {defaultOptionName ? (
        <AntdSelect.Option value={0}>{defaultOptionName}</AntdSelect.Option>
      ) : null}
      {options?.map((option) => (
        <AntdSelect.Option key={option.id} value={option.id}>
          {option.name}
        </AntdSelect.Option>
      ))}
    </AntdSelect>
  );
};


const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
;
