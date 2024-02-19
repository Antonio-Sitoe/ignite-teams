import { TextInput } from "react-native";

const Input = ({ ...props }) => {
  return (
    
    <TextInput
      className="flex-1 min-h-14 max-h-14 text-white bg-GRAY_700 font-REGULAR text-MD, rounded-sm p-4"
      placeholderTextColor='#999'
      {...props}
    />
  );
};

export { Input };
