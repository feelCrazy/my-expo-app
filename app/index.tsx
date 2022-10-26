import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button, Image, ScrollView } from "react-native"
import { useLink, Link, Stack } from "expo-router"
import { Drawer } from "expo-router/drawer"

const HeaderImg = () => {
  return (
    <View style={styles.header}>
      <Image
        style={{ width: 20, height: 20 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text>首页</Text>
    </View>
  )
}

export default function App() {
  const history = useLink()

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: "首页",
          headerTitle: () => <HeaderImg />,
          headerTitleAlign: "left",
        }}
      />

      <Button title='hello' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
})
