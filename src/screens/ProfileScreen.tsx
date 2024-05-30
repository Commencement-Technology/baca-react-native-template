import { AuthUpdateDto } from '@baca/api/types'
import { ProfileDeleteAccountButton } from '@baca/components/screens/profile/ProfileDeleteAccountButton'
import { ProfileDetailsForm } from '@baca/components/screens/profile/ProfileDetailsForm'
import { ProfileHeader } from '@baca/components/screens/profile/ProfileHeader'
import { ProfilePasswordForm } from '@baca/components/screens/profile/ProfilePasswordForm'
import { Box, Spacer } from '@baca/design-system'
import { useTranslation, useScreenOptions } from '@baca/hooks'

export const ProfileScreen = () => {
  const { t } = useTranslation()

  useScreenOptions({
    title: t('navigation.screen_titles.profile'),
  })

  const handlePasswordUpdate = (data: AuthUpdateDto) => {
    console.log('Password updated:', data)
  }

  return (
    <Box p={4}>
      <ProfileHeader />
      <Spacer y={4} />
      <ProfileDetailsForm />
      <Spacer y={4} />
      <ProfilePasswordForm onSubmit={handlePasswordUpdate} />
      <Spacer y={4} />
      <ProfileDeleteAccountButton />
    </Box>
  )
}

// import { ProfileDeleteAccountButton } from '@baca/components/screens/profile/ProfileDeleteAccountButton'
// import { ProfileDetailsForm } from '@baca/components/screens/profile/ProfileDetailsForm'
// import { ProfileHeader } from '@baca/components/screens/profile/ProfileHeader'
// import { ProfilePasswordForm } from '@baca/components/screens/profile/ProfilePasswordForm'
// import { Box, Spacer } from '@baca/design-system'
// import { useTranslation, useScreenOptions } from '@baca/hooks'

// export const ProfileScreen = () => {
//   const { t } = useTranslation()

//   useScreenOptions({
//     title: t('navigation.screen_titles.profile'),
//   })

//   const handlePasswordUpdate = (data) => {
//     console.log('Password updated:', data)
//   }

//   return (
//     <Box p={4}>
//       <ProfileHeader />
//       <Spacer y={4} />
//       <ProfileDetailsForm />
//       <Spacer y={4} />
//       <ProfilePasswordForm onSubmit={handlePasswordUpdate} />
//       <Spacer y={4} />
//       <ProfileDeleteAccountButton />
//     </Box>
//   )
// }
