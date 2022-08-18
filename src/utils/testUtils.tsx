import { NavigationContainer } from '@react-navigation/native'
import { render, RenderOptions, RenderAPI } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import { ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from '~i18n'

const nbInitialWindowMetrics = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

const Providers: React.FC = ({ children }) => (
  <NativeBaseProvider initialWindowMetrics={nbInitialWindowMetrics}>
    <NavigationContainer>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </NavigationContainer>
  </NativeBaseProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions): RenderAPI =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
