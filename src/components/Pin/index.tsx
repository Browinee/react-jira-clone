import { Rate } from "antd";


interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Pin = (props: PinProps) => {
  const { checked, onCheckedChange, ...resetProps } = props;
  return <Rate value={checked ? 1 : 0} count={1} onChange={num => {
    onCheckedChange && onCheckedChange(!!num);
  }} {...resetProps} />
  ;
};

export default Pin;
