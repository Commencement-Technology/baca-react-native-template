import { CompanyLogo, KeyboardAwareScrollView, LandingHeader } from '@baca/components'
import { Button, Center, Text } from '@baca/design-system'
import { useCallback, useScreenOptions, useTranslation } from '@baca/hooks'
import { router } from 'expo-router'

//TODO: Ask Mateusz for which purpose does LandingScreen exist?

export const LandingScreen = () => {
  const { t } = useTranslation()

  useScreenOptions({
    title: t('navigation.screen_titles.home'), //TODO: Delete JSON we're not using
  })

  const navigateToBlog = useCallback(() => {
    router.navigate('/blog')
  }, [])

  const navigateToBigForm = useCallback(() => {
    router.navigate('/big-form')
  }, [])

  return (
    <KeyboardAwareScrollView>
      <LandingHeader />
      <Center flex={1} px={4}>
        <CompanyLogo />
        <Text.LgBold textAlign="center">{t('hello')}</Text.LgBold>
        <Text.MdRegular textAlign="center">{t('thanks')}</Text.MdRegular>
        <Text.MdRegular textAlign="center">{t('app_information')}</Text.MdRegular>
        <Button mt={4} onPress={navigateToBigForm}>
          {t('landing_screen.go_to_form')}
        </Button>
        <Button mt={4} onPress={navigateToBlog}>
          {t('landing_screen.go_to_blog')}
        </Button>
      </Center>
    </KeyboardAwareScrollView>
  )
}
