import { StatusBar } from "expo-status-bar"
import { Text, View, Button, Animated } from "react-native"
import { useState, useRef } from "react"
import { useLink, Link, Stack } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { SafeAreaView } from "react-native-safe-area-context"
import TagList from "../components/tagList"

import Item from "../components/list/item"
import Header from "../components/Header"

const HeaderImg = () => {
  return (
    <View className='-ml-3'>
      {/* <Image
        style={{ width: 20, height: 20 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      /> */}
      <Text className='text-lg font-bold'>9GAG</Text>
    </View>
  )
}
type RootStackParamList = {
  App: undefined //current screen
  PdpComments: { slug: string } // a screen that we are
}

type Props = {
  navigation: DrawerNavigationProp<RootStackParamList, "App">
}

export default function App({ navigation }: Props) {
  const history = useLink()
  const [refresh, setRefresh] = useState(false)
  const scrollOffsetY = useRef(new Animated.Value(0)).current
  const diffClampY = Animated.diffClamp(scrollOffsetY, 0, 126)

  const headerHeight = diffClampY.interpolate({
    inputRange: [0, 140],
    outputRange: [0, -120],
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto' backgroundColor='#fff' />
      <Drawer.Screen
        options={{
          title: "首页",
          headerTitle: () => <HeaderImg />,
          headerTitleAlign: "left",
          headerShown: false,
        }}
      />
      <Animated.View
        style={{
          transform: [{ translateY: headerHeight }],
          backgroundColor: "#fff",
        }}
      >
        <Header navigation={navigation} />
        <View className='bg-white'>
          <TagList />
        </View>
      </Animated.View>

      <Animated.FlatList
        style={{
          transform: [{ translateY: headerHeight }],
          flex: 1,
          marginBottom: -120,
        }}
        bounces={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollOffsetY,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={Item}
        keyExtractor={(item) => item.toString()}
      />

      <Button title='hello' />
    </SafeAreaView>
  )
}
