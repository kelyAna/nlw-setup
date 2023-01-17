import { ActivityIndicator, View } from "react-native"

export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  )
}