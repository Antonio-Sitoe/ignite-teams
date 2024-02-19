import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: "PRIMARY" | "SECUNDARY";
}
export function Button({ title, type='PRIMARY', ...props }: Props) {
  return (
    <TouchableOpacity
      {...props}
      className={`flex-1 min-h-14 max-h-14 rounded-sm justify-center items-center ${
        type === "PRIMARY" ? "bg-GREEN_700" : "bg-RED"
      }`}
    >
      <Text className="text-MD font-BOLD text-white">{title}</Text>
    </TouchableOpacity>
  );
}
