/* eslint-disable prettier/prettier */
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";

const InputField = ({ label, labelStyle }) => {
  // eslint-disable-next-line no-unused-expressions
  <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
      <View className="my-2 w-full">
        <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>;
};
export default InputField;
