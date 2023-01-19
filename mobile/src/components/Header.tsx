import { Text, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import Logo from "../assets/logo.svg"
import { useNavigation } from "@react-navigation/native"

export function Header() {
  const { navigate  } = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('new')}
        className="flex-row h-11 px-4 border rounded-lg items-center  bg-violet-700"
      >
        <Feather name="plus" color={colors.white} size={20} />
        <Text className="text-white ml-3 font-semibold text-base">
          Novo hábito
        </Text>
      </TouchableOpacity>
    </View>
  )
}
