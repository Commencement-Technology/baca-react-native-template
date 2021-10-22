import '@react-navigation/native'
import { routesList, Routes } from '~constants'

// Helpers
type NavigatorParams<NavigatorRouteParams, NavigatorRoute extends keyof NavigatorRouteParams> =
  | {
      screen: NavigatorRoute
      params?: NavigatorRouteParams[NavigatorRoute]
    }
  | undefined

type RoutesUnion = typeof routesList[number]

type RootStackParamList = {
  // Stacks
  HomeStack: HomeStackNavParams

  // Root stack
  Root: undefined
  SignUp: undefined
  SignIn: undefined
  ApplicationInfo: undefined
  NotFound: undefined
  Settings: undefined

  // Home stack
  Home: undefined
  Details: { id: string }
}

// HOME STACK
type HomeStackRoutes = typeof Routes.Home | typeof Routes.Details

// use it in: creatStacknavigator | stackNavParams
type HomeStackParamsMap = Pick<RootStackParamList, HomeStackRoutes>

// use it in RootParams map
type HomeStackNavParams = NavigatorParams<HomeStackParamsMap, HomeStackRoutes>

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
