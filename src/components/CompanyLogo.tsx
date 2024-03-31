import { darkBinarLogo, darkLogoSygnet, lightBinarLogo, lightLogoSygnet } from '@baca/constants'
import { ColorSchemeName, useColorScheme } from '@baca/contexts'
import { Image, ImageProps, ImageStyle } from 'react-native'

type LogoTypes = 'binarSygnet' | 'binar'

const LOGO: {
  [key in ColorSchemeName]: { [key in LogoTypes]: ImageProps['source'] }
} = {
  light: { binarSygnet: lightLogoSygnet, binar: lightBinarLogo },
  dark: { binarSygnet: darkLogoSygnet, binar: darkBinarLogo },
}

export const CompanyLogo = ({
  height = 100,
  type = 'binar',
  width = '100%',
  style,
}: {
  height?: ImageStyle['height']
  type?: LogoTypes
  width?: ImageStyle['width']
  style?: ImageStyle
}) => {
  const { colorScheme } = useColorScheme()

  const source = LOGO[colorScheme][type]

  return (
    <Image
      {...{ source }}
      resizeMethod="resize"
      resizeMode="contain"
      style={[{ height, maxWidth: width }, style]}
    />
  )
}
