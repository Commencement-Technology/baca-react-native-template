import { REGEX } from '@baca/constants'
import { Box, Icon, Row, Text } from '@baca/design-system'
import { IconNames } from '@baca/types/icon'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

// make sure to add proper translations to path `form.validation.password_`
const passwordSuggestionsList = ['min_8_chars', 'min_1_special_char'] as const

export const usePasswordValidation = () => {
  const { t } = useTranslation()
  const [passwordErrors, setPasswordErrors] = useState<
    ('min_8_chars' | 'min_1_special_char' | '')[]
  >([])
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false)
  const [showValidationState, setShowValidationState] = useState<boolean>(false)

  const validationFn = useCallback(
    (password: string) => {
      const min8Chars = !REGEX.MIN_8_CHARS.test(password) ? 'min_8_chars' : ''
      const min1SpecialChar = !REGEX.SPECIAL_CHAR.test(password) ? 'min_1_special_char' : ''

      !showValidationState && setShowValidationState(true)
      setIsPasswordError(!!min8Chars || !!min1SpecialChar)
      setPasswordErrors([min8Chars, min1SpecialChar])
      return !!min8Chars || !!min1SpecialChar ? 'Error' : false
    },
    [showValidationState]
  )

  const passwordSuggestions = useMemo(() => {
    return passwordSuggestionsList.map((suggestion) => {
      const isError = passwordErrors?.includes(suggestion)
      const iconName: IconNames = isError ? 'close-line' : 'check-line'
      const iconColor: ColorNames = !showValidationState
        ? 'fg.disabled_subtle'
        : isError
        ? 'utility.error.500'
        : 'utility.success.500'

      return (
        <Row alignItems="center" key={suggestion} mb={2} w="full">
          <Box bg={iconColor} borderRadius={10} mr={2}>
            <Icon name={iconName} color="Base.white" size={20} />
          </Box>
          <Text.SmRegular color="text.tertiary">
            {t(`form.validation.password_${suggestion}`)}
          </Text.SmRegular>
        </Row>
      )
    })
  }, [passwordErrors, showValidationState, t])

  return {
    isPasswordError,
    passwordSuggestions,
    validationFn,
  }
}
