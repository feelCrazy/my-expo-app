import { View, Text, TouchableHighlight } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import TagList from "../../tagList"

type Props = {}

const Item = (props: Props) => {
  return (
    <View className='bg-white px-3 py-3 mb-2'>
      <View className='flex-row items-center justify-between'>
        <View className='flex-row items-center'>
          <Ionicons name='people-circle' size={24} color='black' />
          <Text className='font-bold ml-2 mr-1'>crazay21</Text>
          <Text className='text-gray-400'>4h</Text>
        </View>

        <View className='mr-2 flex-row'>
          <Text className='p-1'>
            <Ionicons name='bookmark' size={12} color='white' />
          </Text>
          <TouchableHighlight className='p-1 pl-3'>
            <Ionicons name='ellipsis-vertical-sharp' size={12} color='black' />
          </TouchableHighlight>
        </View>
      </View>

      <View className='py-1'>
        <Text className='text-base font-bold'>Fsadgsadg 撒谎</Text>
      </View>

      <View className='h-52 bg-red-100 -mx-3'></View>
      <View className='-ml-3'>
        <TagList />
      </View>

      <View className='flex-row items-center justify-between'>
        <View className='flex-row items-center'>
          <Text className='px-1'>
            <MaterialCommunityIcons
              name='arrow-up-bold'
              size={28}
              color='#acacac'
            />
          </Text>

          <Text className='text-gray-400 text-base font-bold '>148</Text>
        </View>
        <View className='flex-row items-center ml-4'>
          <Text className='rotate-180 px-1'>
            <MaterialCommunityIcons
              name='arrow-up-bold'
              size={28}
              color='#acacac'
            />
          </Text>

          <Text className='text-gray-400 text-base font-bold'>148</Text>
        </View>

        <View className='flex-row items-center '>
          <Text className='px-2 ml-8'>
            <MaterialCommunityIcons name='message' size={24} color='#acacac' />
          </Text>
          <Text className='text-gray-400 text-base font-bold'>44</Text>
        </View>

        <View className='flex-row items-center '>
          <Text className='px-2 '>
            <Ionicons name='share-social' size={24} color='#acacac' />
          </Text>
          <Text className='text-gray-400 text-base font-bold'>share</Text>
        </View>
      </View>
    </View>
  )
}

export default Item
