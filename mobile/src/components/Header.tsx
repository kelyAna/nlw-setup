import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-violet-400 rounded-lg items-center"
      >
        <Feather name="plus" color={colors.violet[400]} size={20} />
        <Text className="text-violet-400 ml-3 font-semibold text-base">
          Novo hábito
        </Text>
      </TouchableOpacity>
    </View>
  );
}
