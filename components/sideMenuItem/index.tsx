import { View, Text } from "react-native"
import React from "react"
import { useLink } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

type Props = {
  children?: React.ReactNode
}

const SideMenuItem = (props: Props) => {
  const link = useLink()
  return (
    <View className='h-8 justify-center'>
      <View className='flex-row justify-between'>
        <Text
          onPress={() => {
            link.push("home/")
          }}
          className='text-base flex-1 '
        >
          {props.children}
        </Text>
        <Text className='text-right  px-2'>
          <Ionicons name='star' size={18} color='#ccc' />
        </Text>
      </View>
    </View>
  )
}

export default SideMenuItem
