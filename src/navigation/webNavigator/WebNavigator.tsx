import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { webScreensData } from '../config/tabs'
import { WebNavBar } from './WebNavBar'

import { WEB_SCREEN_STYLES } from '~constants/navigation'
import { useDimensions, useNavigationTheme, useWeb } from '~hooks'

const { Navigator: NavigatorWeb, Screen: ScreenWeb } = createStackNavigator<WebTabParamList>()

const renderScreens = webScreensData.map((screen) => (
  <ScreenWeb
    key={screen?.name}
    options={screen.options}
    // @ts-expect-error: hard to implement good types when mapping screens
    name={screen?.name}
    // @ts-expect-error: hard to implement good types when mapping screens
    component={screen.component}
  />
))

export const WebNavigator: FC = () => {
  const { shouldApplyMobileStyles, webContentWidth } = useWeb()
  const { navigationTheme } = useNavigationTheme()
  const {
    window: { width: windowWidth },
  } = useDimensions()

  return (
    <>
      {!shouldApplyMobileStyles && <WebNavBar />}
      <NavigatorWeb
        screenOptions={{
          headerShown: false,
          cardStyle: {
            ...WEB_SCREEN_STYLES,
            paddingHorizontal: (windowWidth - webContentWidth) / 2,
            backgroundColor: navigationTheme.colors.background,
          },
        }}
      >
        {renderScreens}
      </NavigatorWeb>
      {shouldApplyMobileStyles && <WebNavBar />}
    </>
  )
}
