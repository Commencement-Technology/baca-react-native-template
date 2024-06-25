import { useArticlesControllerFindAll } from '@baca/api/query/articles/articles'
import { ArticleEntity } from '@baca/api/types'
import { Loader, Center, Text, Box, Spacer } from '@baca/design-system'
import { useScreenOptions, useTranslation } from '@baca/hooks'
import { FlashList } from '@shopify/flash-list'
import { useCallback } from 'react'

export const DataFromBeScreen_EXAMPLE = () => {
  const { t } = useTranslation()

  useScreenOptions({
    title: t('navigation.screen_titles.data_from_be_screen_example'),
  })

  const { data: articles, isInitialLoading: isInitialLoadingArticles } =
    useArticlesControllerFindAll({ page: 1, pageSize: 10 })

  const renderItem = useCallback(({ item: { id, title } }: { item: ArticleEntity }) => {
    return (
      <Box mb="1" bg="fg.brand.primary" borderRadius={2} m={2}>
        <Text>{'id: ' + id}</Text>
        <Text.MdRegular mb={2}>{'title: ' + title}</Text.MdRegular>
      </Box>
    )
  }, [])

  return (
    <Box flex={1}>
      <Text.XlRegular alignSelf="center">THIS IS EXAMPLE SCREEN</Text.XlRegular>
      <Text.XlRegular alignSelf="center">which contains data from backend</Text.XlRegular>
      <Spacer y="1" />
      <FlashList
        ListEmptyComponent={
          !isInitialLoadingArticles ? (
            <Center height={400} flex={1}>
              <Loader type="circle" />
            </Center>
          ) : (
            <Text>No data found</Text>
          )
        }
        data={articles}
        renderItem={renderItem}
        estimatedItemSize={81}
      />
    </Box>
  )
}
