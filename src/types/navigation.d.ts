import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'

declare global {
  // PARAMS
  type HomeStackParamList = {
    Home: undefined
    Details: { id: string }
  }

  type ExampleStackParamList = {
    Examples: undefined
    Components: undefined
  }

  type MainTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    ExamplesStack: NavigatorScreenParams<ExampleStackParamList>
  }

  type RootStackParamList = {
    // unauthorized
    SignUp: undefined
    SignIn: undefined

    // authorized
    MainTab: NavigatorScreenParams<MainTabParamList>
    Settings: undefined

    // modals
    ApplicationInfo: undefined
    NotFound: undefined
  }

  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }

  // SCREENS - specific screens props
  // You can get navigation or route prop for every screen f. eg.
  // - HomeScreenNavigationProps['route']
  // - HomeScreenNavigationProps['navigation']

  // Home stack
  type HomeScreenNavigationProps = HomeStackComposite<'Home'>
  type DetailsScreenNavigationProps = HomeStackComposite<'Details'>

  // Examples stack
  type ExamplesScreenNavigationProps = ExamplesStackComposite<'Examples'>
  type ComponentsScreenNavigationProps = ExamplesStackComposite<'Components'>
}

type HomeStackComposite<S extends keyof HomeStackParamList> = CompositeScreenProps<
  StackScreenProps<RootStackParamList, 'MainTab'>,
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, 'HomeStack'>,
    StackScreenProps<HomeStackParamList, S>
  >
>

type ExamplesStackComposite<S extends keyof ExampleStackParamList> = CompositeScreenProps<
  StackScreenProps<RootStackParamList, 'MainTab'>,
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, 'HomeStack'>,
    StackScreenProps<ExampleStackParamList, S>
  >
>
