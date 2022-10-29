import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native"
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Screen
        options={{
          title: "首页",
          headerTitle: () => <HeaderImg />,
          headerTitleAlign: "left",
          headerShown: false,
        }}
      />

      <View className='flex-1 bg-gray-100'>
        <FlatList
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
          ListHeaderComponent={
            <View>
              <Header navigation={navigation} />
              <View className='bg-white'>
                <TagList />
              </View>
            </View>
          }
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={Item}
          keyExtractor={(item) => item.toString()}
        />
      </View>

      <Button title='hello' />
    </SafeAreaView>
  )
}
