import { View, StatusBar, Platform } from "react-native"
import React from "react"

type Props = {
  bgStyle?: string
}

const index = ({ bgStyle = "#fff" }: Props) => {
  const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 44 : StatusBar.currentHeight
  return (
    <View
      className='bg-white fixed w-full  z-50'
      style={{ height: STATUS_BAR_HEIGHT, backgroundColor: bgStyle }}
    >
      <StatusBar
        barStyle='dark-content'
        backgroundColor={bgStyle}
        translucent
      />
    </View>
  )
}

export default index
