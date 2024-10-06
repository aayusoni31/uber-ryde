/* eslint-disable prettier/prettier */
import { Link, router } from "expo-router";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import OAuth from "@/components/OAuth";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign-In"
            onPress={onSignInPress}
            className="mt-6"
          />
          {/* Oauth- that will allow us to login with google  */}
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200  mt-10"
          >
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
        {/* verification modal  */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
