import { Stack, useLink } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Button, Text, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import SideItem from "../components/sideMenuItem"

const Layout = () => {
  const link = useLink()
  return (
    <Drawer
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#f4511e",
        // },
        headerTintColor: "#000",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
      drawerContent={() => (
        <SafeAreaView>
          <ScrollView className='border-b border-gray-300'>
            <View className='py-3 border-t border-gray-300 px-4'>
              <SideItem>
                <View
                  className='flex-row items-center flex-1'
                  onTouchEnd={() => {
                    link.push("/")
                  }}
                >
                  <Text>
                    <Ionicons name='logo-usd' size={24} color='#a9a9a9' />
                  </Text>
                  <Text className='text-sm ml-3 font-bold'>Home</Text>
                </View>
                <Text
                  className='px-2 items-center'
                  onPress={() => {
                    link.push("setting/")
                  }}
                >
                  <Ionicons name='settings' size={22} color='#a9a9a9' />
                </Text>
              </SideItem>
              <SideItem>
                <View className='flex-row items-center'>
                  <Text>
                    <Ionicons name='stats-chart' size={24} color='#a9a9a9' />
                  </Text>
                  <Text className='text-sm ml-3 font-bold'>TOP</Text>
                </View>
              </SideItem>
            </View>

            <View className='py-3 border-t border-gray-300 px-4'>
              <View className='pb-1'>
                <Text className='text-gray-400'>分类</Text>
              </View>
              <SideItem title='类别1'></SideItem>
              <SideItem title='类别1'></SideItem>
            </View>

            <View className='py-3 border-t border-gray-300 px-4'>
              <View className='pb-1'>
                <Text className='text-gray-400'>最近</Text>
              </View>
              <SideItem title='类别13'></SideItem>
            </View>
            <View className='py-3 border-t border-gray-300 px-4'>
              <View className='pb-1'>
                <Text className='text-gray-400'>全部</Text>
              </View>
              <SideItem title='类别1'></SideItem>
              <SideItem title='类别12'></SideItem>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    ></Drawer>

    // <Stack
    //   screenOptions={{
    //     // headerStyle: {
    //     //   backgroundColor: "#f4511e",
    //     // },
    //     headerTintColor: "#000",
    //     headerTitleStyle: {
    //       fontWeight: "bold",
    //     },
    //   }}
    // />
  )
}

export default Layout
