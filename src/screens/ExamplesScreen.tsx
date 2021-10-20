import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback } from 'react'
import { ScrollView, Text } from 'react-native'

import { Button } from '~components'
import { useColorScheme, useTheme } from '~hooks'
import { colorSchemesList } from '~providers'

export const ExamplesScreen: FC = () => {
  const { navigate } = useNavigation()
  const { setNewColorScheme, colorScheme, systemColorTheme } = useColorScheme()
  const { s } = useTheme()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [])

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Button onPress={goToApplicationInfo} title="Go to ApplicationInfo" />
      <Text style={[s.textPrimary]}>Current theme: {colorScheme}</Text>
      {colorSchemesList.map((scheme) => {
        const isSelected = scheme === colorScheme

        return (
          <Button
            key={scheme}
            style={[s.mB1]}
            onPress={() => setNewColorScheme(scheme)}
            title={`${scheme}${isSelected ? ' - selected' : ''}`}
          />
        )
      })}
    </ScrollView>
  )
}
