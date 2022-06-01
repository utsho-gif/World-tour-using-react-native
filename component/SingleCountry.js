import { View, Text } from 'react-native'
import React from 'react'

export default function SingleCountry({country}) {
    const {name} = country;
  return (
    <View>
      <Text>{name.common}</Text>
    </View>
  )
}