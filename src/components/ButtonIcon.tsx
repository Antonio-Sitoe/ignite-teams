import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@/theme";

interface Props extends TouchableOpacityProps {
  type: "PRIMARY" | "SECUNDARY";
  name: keyof typeof MaterialIcons.glyphMap;
}
export function ButtonIcon({ type, name, ...rest }: Props) {
  return (
    <TouchableOpacity className="w-14 h-14 justify-center items-center ml-3" {...rest}>
      <MaterialIcons
        name={name}
        
        size={24}
        color={type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED}
      />
    </TouchableOpacity>
  );
}
