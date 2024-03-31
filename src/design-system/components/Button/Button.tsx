import { useTheme } from '@baca/hooks'
import { IconNames } from '@baca/types/icon'
import { getColorValue } from '@baca/utils'
import {
  useMemo,
  memo,
  useCallback,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  View,
  Platform,
} from 'react-native'

import {
  ButtonSize,
  ButtonVariant,
  buttonSizeVariants,
  buttonVariants,
  getButtonShadowStyle,
} from '../../config'
import { generateStyledComponent } from '../../utils'
import { Icon } from '../Icon'
import { Loader } from '../Loader'
import { Row } from '../Row'
import { Text } from '../Text'
import { useHover } from '../Touchables/useHover'
import { StyledProps } from '../types'

export type ButtonProps = StyledProps &
  PressableProps & {
    disabled?: boolean
    leftIconName?: IconNames
    loaderElement?: JSX.Element
    loading?: boolean
    rightIconName?: IconNames
    size?: ButtonSize
    textStyle?: StyleProp<TextStyle>
    title?: string
    variant?: ButtonVariant
  }

const styles = StyleSheet.create({
  baseButton: {
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  baseText: {
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
  },
})

const RawButton = memo(
  forwardRef<View, ButtonProps>(
    (
      {
        children,
        disabled,
        leftIconName,
        loading,
        rightIconName,
        size = 'md',
        style,
        textStyle,
        title,
        variant = 'Primary',
        ...props
      },
      ref
    ) => {
      const { colors } = useTheme()
      const { hoverProps, isHovered } = useHover()
      const { hoveredStyle, defaultStyle, disabledStyle } = useMemo(
        () => buttonVariants[variant],
        [variant]
      )

      const pressedStyles = useMemo<ViewStyle>(() => {
        return getButtonShadowStyle({ variant })
      }, [variant])

      const hoveredStyles = useMemo<ViewStyle>(
        () => ({
          backgroundColor: getColorValue({
            color: hoveredStyle.backgroundColor,
            colors,
          }),
          borderColor: getColorValue({
            color: hoveredStyle.borderColor!,
            colors,
          }),
          borderWidth: hoveredStyle.borderWidth,
        }),
        [colors, hoveredStyle.backgroundColor, hoveredStyle.borderColor, hoveredStyle.borderWidth]
      )

      const hoverColorStyle = useMemo<TextStyle>(
        () => ({
          color: getColorValue({
            color: hoveredStyle.color!,
            colors,
          }),
        }),
        [colors, hoveredStyle.color]
      )

      const defaultStyles = useMemo<ViewStyle>(
        () => ({
          backgroundColor: getColorValue({
            color: defaultStyle.backgroundColor,
            colors,
          }),
          borderColor: getColorValue({
            color: defaultStyle.borderColor!,
            colors,
          }),
          borderWidth: defaultStyle.borderWidth,
        }),
        [colors, defaultStyle.backgroundColor, defaultStyle.borderColor, defaultStyle.borderWidth]
      )

      const defaultColorStyle = useMemo<TextStyle>(
        () => ({
          color: getColorValue({
            color: defaultStyle.color!,
            colors,
          }),
        }),
        [colors, defaultStyle.color]
      )

      const disabledStyles = useMemo<ViewStyle>(
        () => ({
          backgroundColor: getColorValue({
            color: disabledStyle.backgroundColor,
            colors,
          }),
          borderColor: getColorValue({
            color: disabledStyle.borderColor!,
            colors,
          }),
          borderWidth: disabledStyle.borderWidth,
        }),
        [
          colors,
          disabledStyle.backgroundColor,
          disabledStyle.borderColor,
          disabledStyle.borderWidth,
        ]
      )

      const disabledColorStyle = useMemo<TextStyle>(
        () => ({
          color: getColorValue({
            color: disabledStyle.color!,
            colors,
          }),
        }),
        [colors, disabledStyle.color]
      )
      const buttonSizeVariant = buttonSizeVariants[size]

      const buttonSizeStyle = useMemo<ViewStyle>(
        () => ({
          paddingHorizontal: buttonSizeVariant.paddingHorizontal,
          paddingVertical: buttonSizeVariant.paddingVertical,
        }),
        [buttonSizeVariant.paddingHorizontal, buttonSizeVariant.paddingVertical]
      )

      const pressableStyleFunction = useCallback(
        ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> =>
          StyleSheet.flatten<ViewStyle>([
            styles.baseButton,
            {
              ...Platform.select({
                default:
                  pressed || isHovered ? { ...hoveredStyles, ...pressedStyles } : defaultStyles,
                web: pressed
                  ? { ...defaultStyles, ...pressedStyles }
                  : isHovered
                  ? hoveredStyles
                  : defaultStyles,
              }),
            },
            disabled && disabledStyles,
            loading && disabledStyles,
            buttonSizeStyle,
            typeof style === 'function' ? style({ pressed }) : style,
          ]),
        [
          buttonSizeStyle,
          defaultStyles,
          disabled,
          disabledStyles,
          hoveredStyles,
          isHovered,
          loading,
          pressedStyles,
          style,
        ]
      )

      const getIconColor = useCallback(
        ({ pressed }: PressableStateCallbackType): ColorNames | undefined => {
          if (disabled) return disabledStyle.color
          if (pressed || isHovered) return hoveredStyle.color
          return defaultStyle.color
        },
        [defaultStyle.color, disabled, disabledStyle.color, hoveredStyle.color, isHovered]
      )

      const pressableTextStyleFunction = useCallback(
        ({ pressed }: PressableStateCallbackType) =>
          StyleSheet.flatten([
            styles.baseText,
            pressed ? hoverColorStyle : defaultColorStyle,
            disabled && disabledColorStyle,
            textStyle,
          ]),
        [hoverColorStyle, defaultColorStyle, disabled, disabledColorStyle, textStyle]
      )

      const iconElement = useCallback(
        (props: PressableStateCallbackType, iconName?: IconNames) => {
          return iconName ? (
            <Icon name={iconName} size={buttonSizeVariant.iconSize} color={getIconColor(props)} />
          ) : null
        },
        [buttonSizeVariant.iconSize, getIconColor]
      )

      const childrenElement = useCallback(
        (props: PressableStateCallbackType) => {
          if (title) {
            return (
              <Text
                allowFontScaling={false}
                selectable={false}
                style={pressableTextStyleFunction(props)}
                textAlign="center"
                variant={buttonSizeVariant.textVariant}
              >
                {title}
              </Text>
            )
          }
          if (typeof children === 'string') {
            return (
              <Text
                allowFontScaling={false}
                selectable={false}
                style={pressableTextStyleFunction(props)}
                textAlign="center"
                variant={buttonSizeVariant.textVariant}
              >
                {children}
              </Text>
            )
          }
          return <>{children}</>
        },

        [buttonSizeVariant.textVariant, children, pressableTextStyleFunction, title]
      )

      return (
        <Pressable
          accessibilityRole="button"
          disabled={disabled || loading}
          role="button"
          style={pressableStyleFunction}
          testID="baseButton"
          {...{ ...hoverProps, ref, ...props }}
        >
          {loading ? (
            <Loader
              color={colors.button.primary.bg}
              size={buttonSizeVariant.iconSize}
              type="default"
            />
          ) : (
            (props: PressableStateCallbackType) => (
              <Row gap={buttonSizeVariant.iconGap}>
                {leftIconName && iconElement(props, leftIconName)}
                {childrenElement(props)}
                {rightIconName && iconElement(props, rightIconName)}
              </Row>
            )
          )}
        </Pressable>
      )
    }
  )
)

type ButtonComposition = ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> & RefAttributes<View>
> & {
  [key in ButtonVariant]: ForwardRefExoticComponent<
    PropsWithoutRef<ButtonProps> & RefAttributes<View>
  >
}
const Button = generateStyledComponent<ButtonProps, typeof Pressable>(
  RawButton
) as ButtonComposition

const generateButtonVariant = (variant: ButtonVariant) =>
  forwardRef<View, ButtonProps>((props, ref) => <Button {...{ ...props, ref, variant }} />)

Button.Primary = generateButtonVariant('Primary')
Button.PrimaryDestructive = generateButtonVariant('PrimaryDestructive')
Button.SecondaryColor = generateButtonVariant('SecondaryColor')
Button.SecondaryGray = generateButtonVariant('SecondaryGray')
Button.SecondaryDestructive = generateButtonVariant('SecondaryDestructive')
Button.TertiaryColor = generateButtonVariant('TertiaryColor')
Button.TertiaryGray = generateButtonVariant('TertiaryGray')
Button.TertiaryDestructive = generateButtonVariant('TertiaryDestructive')
Button.LinkColor = generateButtonVariant('LinkColor')
Button.LinkGray = generateButtonVariant('LinkGray')
Button.LinkDestructive = generateButtonVariant('LinkDestructive')

export { Button }
