import { ControlledField } from '@baca/components'
import { isWeb } from '@baca/constants'
import { Box, Text } from '@baca/design-system'
import { useWeb } from '@baca/hooks'
import { ProfileControlledInputProps } from '@baca/types'
import { StyleSheet } from 'react-native'

export const ProfileControlledInput = ({
  label,
  name,
  isDisabled = false,
  ...rest
}: ProfileControlledInputProps) => {
  const { shouldApplyMobileStyles } = useWeb()

  return (
    <Box
      justifyContent="space-between"
      flexDirection={isWeb && !shouldApplyMobileStyles ? 'row' : 'column'}
      mb={isWeb ? 10 : 0}
      maxW={800}
    >
      <Text.SmBold flex={1} color="text.primary" style={styles.labelMargin}>
        {label}
      </Text.SmBold>
      <Box flex={isWeb ? 2 : 0}>
        <ControlledField.Input
          autoCapitalize="none"
          inputMode={name === 'email' ? 'email' : 'text'}
          name={name}
          testID={`${name}Input`}
          isDisabled={isDisabled}
          {...rest}
        />
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  labelMargin: { marginBottom: 10 },
})
