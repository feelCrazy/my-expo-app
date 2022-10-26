import { View, Text, Image } from "react-native"
import React, { useState } from "react"
import { useLink } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

type Props = {
  children?: React.ReactNode
  path?: string
  isStar?: boolean
  img?: string
  hasIcon?: boolean
  title?: string
}

const SideMenuItem = (props: Props) => {
  const { path, isStar, img, hasIcon = true, children, title } = props
  const link = useLink()
  const [star, setStar] = useState(isStar || false)

  const handleRouter = (path?: string) => {
    link.push(path || "home")
  }
  return (
    <View className='justify-center'>
      <View className='flex-row h-10 items-center'>
        {children ? (
          children
        ) : (
          <>
            <Text onPress={() => handleRouter(path)} className='flex-1 '>
              <View className='flex-row items-center'>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={{
                    uri: img || "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />

                <View>
                  <Text className='text-sm ml-3 font-bold'>{title}</Text>
                </View>
              </View>
            </Text>

            {hasIcon && (
              <Text className='text-right px-2' onPress={() => setStar(!star)}>
                <Ionicons
                  name='star'
                  size={20}
                  color={`${star ? "#ffb103" : "#ccc"}`}
                />
              </Text>
            )}
          </>
        )}
      </View>
    </View>
  )
}

export default SideMenuItem
