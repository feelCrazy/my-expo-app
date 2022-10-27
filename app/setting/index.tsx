import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
  ScrollView,
} from "react-native"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { Drawer } from "expo-router/drawer"
import { useLink } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import PagerView from "react-native-pager-view"

type Props = {}

const Setting = (props: Props) => {
  const link = useLink()
  const scrollRef = useRef(null)

  const [position, setPosition] = useState(0)
  const tabs = [
    "tab1",
    "tab2",
    "tab3",
    "tab4",
    "123",
    "1",
    "12003",
    "11",
    "000",
  ]

  return (
    <View className='flex-1'>
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
      />

      <View className='bg-blue-300 h-12 border border-l-0 border-r-0 border-t-0 border-gray-200'>
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          bounces={false}
          scrollsToTop={false}
          scrollEventThrottle={16}
        >
          <View className='flex-row justify-around'>
            {tabs.map((item, i) => (
              <View
                key={item}
                className='flex-1 bg items-center justify-center pb-1 mx-2'
              >
                <Text className='bg-slate-300 px-4'>
                  {item}
                  {i}
                  {position}
                </Text>

                <Animated.View className='bg-red-500 absolute bottom-0 w-full h-1' />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          onPageScroll={(event) => {
            if (event.nativeEvent.offset) {
              console.log(">>>>>", event.nativeEvent.position)
            }
          }}
        >
          {tabs.map((item, i) => (
            <View key={item} className='bg-red-300'>
              <Text>{item}</Text>
            </View>
          ))}
        </PagerView>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})
