import { ControlledField } from '@baca/components'
import { Button, Text, Spacer, palette, size } from '@baca/design-system'
import {
  useMemo,
  useCallback,
  useTranslation,
  useUpdateProfileForm,
  useScreenOptions,
} from '@baca/hooks'
import { useRouter } from 'expo-router'
import { InputModeOptions, StyleSheet, View } from 'react-native'

export const ProfileScreen = () => {
  useScreenOptions({ headerShown: false })

  const { back } = useRouter()
  const { t } = useTranslation()

  const { control, errors, isSubmitting, setFocus, submit } = useUpdateProfileForm()

  const focusLastNameInput = useCallback(() => setFocus('lastName'), [setFocus])

  const inputs = useMemo(
    () => [
      {
        inputMode: 'text',
        label: t('common.first_name'),
        name: 'firstName',
        onFocuse: focusLastNameInput,
        testID: 'firstNameInput',
        placeholder: '',
      },
      {
        inputMode: 'text',
        label: t('common.last_name'),
        name: 'lastName',
        testID: 'firstNameInput',
        placeholder: '',
      },
      {
        inputMode: 'email',
        isDisabled: true,
        label: t('common.email_label'),
        name: 'email',
        testID: 'emailInput',
        placeholder: '',
      },
      // {
      //   inputMode: 'password',
      //   isDisabled: true,
      //   label: t('common.password'),
      //   name: 'password',
      //   testID: 'passwordInput',
      //   type: 'password',
      // },
    ],
    [t, focusLastNameInput]
  )

  const renderInputs = useCallback(
    () =>
      inputs.map(({ inputMode, isDisabled, label, name, onFocuse, testID, placeholder }, index) => (
        <View style={styles.inputContainer} key={index}>
          <View style={styles.labelWrapper}>
            <Text.H6>{label}</Text.H6>
          </View>
          <Spacer x="4" />
          <ControlledField.Input
            {...{ control, errors }}
            autoCapitalize="none"
            onFocus={onFocuse}
            inputMode={inputMode as InputModeOptions}
            name={name}
            testID={testID}
            isDisabled={isDisabled}
            placeholder={placeholder}
            // rules={}
          />
        </View>
      )),
    [control, errors, inputs]
  )

  return (
    <View style={styles.container}>
      <Text.H1Bold>Profile</Text.H1Bold>
      <Text.Subtitle>Update your personal details here.</Text.Subtitle>

      <View style={styles.sectionContainer}>{renderInputs()}</View>
      {/* <Spacer y="8" /> */}

      <View style={styles.buttonsContainer}>
        <Button
          disabled={isSubmitting}
          loading={isSubmitting}
          my={8}
          onPress={back}
          backgroundColor={palette.transparent as ColorNames}
          borderColor={palette.gray[300] as ColorNames}
          borderWidth={1}
          testID="backProfileButton"
        >
          {t('common.cancel')}
        </Button>
        <Spacer x="4" />
        <Button
          disabled={isSubmitting}
          loading={isSubmitting}
          my={8}
          onPress={submit}
          testID="saveProfileUpdateButton"
        >
          {t('common.save')}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    borderColor: palette.gray[300],
    borderTopWidth: size[0.5],
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    marginHorizontal: size[8],
    marginVertical: size[8],
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    marginTop: size[4],
    width: '50%',
  },
  labelWrapper: {
    width: '50%',
  },
  sectionContainer: {
    borderColor: palette.gray[300],
    borderTopWidth: size[0.5],
    marginVertical: size[8],
  },
})
