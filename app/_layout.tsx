import { Stack } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Button, Text, ScrollView } from "react-native"
import SideItem from "../components/sideMenuItem"

const Layout = () => {
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
              <SideItem>类别112</SideItem>
              <SideItem>类别112</SideItem>
            </View>

            <View className='py-3 border-t border-gray-300 px-4'>
              <View className='pb-1'>
                <Text className='text-gray-400'>分类</Text>
              </View>
              <SideItem>类别1</SideItem>
              <SideItem>类别2</SideItem>
            </View>

            <View className='py-3 border-t border-gray-300 px-4'>
              <View className='pb-1'>
                <Text className='text-gray-400'>最近</Text>
              </View>
              <SideItem>类别3</SideItem>
            </View>
            <View className='py-3 border-t border-gray-300 px-4'>
              <View className='pb-1'>
                <Text className='text-gray-400'>全部</Text>
              </View>
              <SideItem>类别4</SideItem>
              <SideItem>类别5</SideItem>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    >
      <Drawer.Screen
        name='index'
        options={{
          title: "首页",
        }}
      />
      <Drawer.Screen
        name='home/index'
        options={{
          title: "页面",
        }}
      />
      <Drawer.Screen
        name='home/detail'
        options={{
          title: "详情",
        }}
      />
    </Drawer>

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
