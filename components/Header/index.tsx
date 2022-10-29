import { View, Text, StyleProp, ViewStyle } from "react-native"
import React from "react"
import { DrawerNavigationProp } from "@react-navigation/drawer"

import { Ionicons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"

type RootStackParamList = {
  App: undefined
  PdpComments: { slug: string } // a screen that we are
}

interface PageProps {
  navigation: DrawerNavigationProp<RootStackParamList, "App">
  bgStyle?: StyleProp<ViewStyle>
  headerLeft?: React.ReactElement
  headerTitle?: React.ReactElement
  headerRight?: React.ReactElement
}

const Header = ({
  navigation,
  bgStyle,
  headerLeft,
  headerTitle,
  headerRight,
}: PageProps) => {
  const leftBtn = headerLeft ? (
    headerLeft
  ) : (
    <Text
      className='p-3'
      onPress={() => {
        navigation.openDrawer()
      }}
    >
      <Ionicons name='menu-sharp' size={24} color='black' />
    </Text>
  )

  const title = headerTitle ? (
    headerTitle
  ) : (
    <Text className='ml-2 text-lg font-bold'>9GAG</Text>
  )

  const right = headerRight ? (
    headerLeft
  ) : (
    <View className='flex-row'>
      <Text className='p-2 mr-1'>
        <Ionicons name='search' size={22} color='#acacac' />
      </Text>
      <Text className='p-2'>
        <MaterialCommunityIcons name='bell' size={22} color='#acacac' />
      </Text>
      <Text className='px-3 py-2'>
        <FontAwesome name='user-circle' size={22} color='#acacac' />
      </Text>
    </View>
  )

  return (
    <View
      className='bg-white h-14 flex-row items-center justify-between'
      style={[bgStyle]}
    >
      <View className='flex-row items-center'>
        {leftBtn}
        {title}
      </View>

      {right}
    </View>
  )
}

export default Header
