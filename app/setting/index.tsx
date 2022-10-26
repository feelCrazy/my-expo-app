import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Drawer } from "expo-router/drawer"
import { useLink } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

type Props = {}

const Setting = (props: Props) => {
  const link = useLink()
  return (
    <View>
      <Drawer.Screen
        options={{
          title: "设置",
          headerLeft: () => (
            <Text
              className='px-3'
              onPress={() => {
                link.back()
              }}
            >
              <Ionicons name='arrow-back' size={24} color='black' />
            </Text>
          ),
        }}
      ></Drawer.Screen>

      <Text>Setting</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})
