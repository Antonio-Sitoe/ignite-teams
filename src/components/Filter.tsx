import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface IFilterProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}
export function Filter({ title, isActive, ...props }: IFilterProps) {
  return (
    <TouchableOpacity
      {...props}
      className={`rounded-sm mr-3 h-9 w-20 items-center justify-center ${isActive ? "border border-GREEN_700" : ""}`}>
      <Text className="text-white uppercase text-SM font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
