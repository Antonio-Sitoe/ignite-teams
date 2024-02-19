import theme from "@/theme";
import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
}
export default function GroupCard({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}className="h-20 w-full rounded-sm flex-row bg-GRAY_500 items-center p-6 mb-3">
      <UsersThree
        color={theme.COLORS.GREEN_700}
        weight="fill"
        size={32}
        style={{
          marginRight: 20,
        }}
      />
      <Text className="text-MD text-gray-200 font-REGULAR">{title}</Text>
    </TouchableOpacity>
  );
}
