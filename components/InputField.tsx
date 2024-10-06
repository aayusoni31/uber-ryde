/* eslint-disable prettier/prettier */
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  TextInput,
} from "react-native";
import { InputFieldProps } from "@/types/type";
import { IOS } from "nativewind/dist/utils/selector";
const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    // eslint-disable-next-line no-unused-expressions
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 $(iconStyle)`} />
            )}
            <TextInput
              className={`rounded-full font-JakartaSemiBold p-4 text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            ></TextInput>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default InputField;
