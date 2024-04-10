import { AppLoading } from '@baca/components'
import { useAppStateActive } from '@baca/hooks'
import { AuthLogic } from '@baca/logic/AuthLogic'
import { store } from '@baca/store'
import { checkForUpdates } from '@baca/utils'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { PortalProvider } from '@gorhom/portal'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'jotai'
import { FC, PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ColorSchemeProvider } from './ColorSchemeProvider'
import { NotificationsProvider } from './NotificatedProvider'
import { NotificationProvider as ExpoNotificationsProvider } from './NotificationProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // It's needed to do it like that because when it's set to true it refetch query every 1-2 seconds
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  useAppStateActive(checkForUpdates, false)

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <PortalProvider>
        <ColorSchemeProvider>
          <SafeAreaProvider>
            <Provider store={store}>
              <ExpoNotificationsProvider>
                {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
                <NotificationsProvider>
                  <QueryClientProvider client={queryClient}>
                    <AppLoading>
                      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
                    </AppLoading>
                    <AuthLogic />
                  </QueryClientProvider>
                </NotificationsProvider>
              </ExpoNotificationsProvider>
            </Provider>
          </SafeAreaProvider>
        </ColorSchemeProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
