import './src/lib/dayjs'

import { StatusBar } from "expo-status-bar"
import {
  useFonts,
  Inter_400Regular,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter"
import { Loading } from "./src/components/Loading"
import { Home } from "./src/screens/Home"

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Home  />
      <StatusBar
        bar-style="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  )
}
