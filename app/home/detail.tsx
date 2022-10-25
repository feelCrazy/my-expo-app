import { Stack, Children } from "expo-router"
import { View, Text, StyleSheet } from "react-native"

export const Layout = () => {
  return (
    <View className='flex-1'>
      <View className='flex-row bg-white border-b border-gray-500 h-9'>
        <View className='flex-1 justify-center items-center '>
          <Text className='text-base'>Tab1</Text>
          <View className='border-b-2 absolute bottom-0 w-11/12'></View>
        </View>
        <View className='flex-1 justify-center items-center'>
          <Text className='text-base'>Tab2</Text>
        </View>
        <View className='flex-1 justify-center items-center'>
          <Text className='text-base'>Tab3</Text>
        </View>
      </View>
      <Children />
    </View>
  )
}
export default Layout
