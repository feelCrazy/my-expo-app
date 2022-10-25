import { View, Text } from "react-native"
import { Stack } from "expo-router"

type Props = {}

const Index = (props: Props) => {
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

      <View className='flex-1 bg-blue-500 justify-center items-center'>
        <Text className='text-white text-lg'>Hello</Text>
      </View>
    </View>
  )
}

export default Index
