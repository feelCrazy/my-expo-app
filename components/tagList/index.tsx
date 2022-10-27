import { StyleSheet, Text, View, ScrollView } from "react-native"
import React from "react"

type Props = {
  data?: []
}

const TagItem = ({ title }: { title: string }) => (
  <View className='mr-2'>
    <Text className='py-1 px-2 bg-slate-100 rounded text-sm'>{title}</Text>
  </View>
)

const TagList = (props: Props) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        bounces={false}
        scrollsToTop={false}
        scrollEventThrottle={16}
      >
        <View className='py-3 pl-3 pr-1 flex-row'>
          <TagItem title='标签1231' />
          <TagItem title='标签1231迭代' />
          <TagItem title='标签1231三等分' />
          <TagItem title='标签1231模块马里克' />
        </View>
      </ScrollView>
    </View>
  )
}

export default TagList
