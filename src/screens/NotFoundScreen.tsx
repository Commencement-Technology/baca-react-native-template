import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '~hooks'

export const NotFoundScreen = () => {
  const { s } = useTheme()
  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Text>NotFound screen</Text>
    </View>
  )
}
